/*
* To get a list of cagetogires based on Category ID
* @Param Category ID integer
*/
function setupSync(categoryId){
  return new Promise((resolve,reject)=>{
    const integrationClient = KNYMobileFabric.getIntegrationService("BestBuyJAPI");
    const operationName = "getCategoriesById";
    const params = { "CategoryId" : categoryId};
    const headers = {};

    integrationClient.invokeOperation(operationName, headers, params , function(result) {
      let categories = [];
      for(let i = 0; i < result.SubCategories.length; i++){
		const category = {};
        category.lblCategoryName = result.SubCategories[i].name;
        category.id = result.SubCategories[i].id;
        categories.push(category);
      }
      
      resolve(categories);
    },function(error) {
      reject(error);
      console.log("Integration Service Failure :" + JSON.stringify(error));
    });
  });
}

/*
* To get a list of products base on a Category ID
* @Param Category ID integer
*/
function syncProductsByCategory(categoryId){
  return new Promise((resolve,reject)=>{
    const integrationClient = KNYMobileFabric.getIntegrationService("BestBuyJAPI");
    const operationName = "getProductsByCategory";
    const params = { "CategoryId" : categoryId};
    const headers = {};

    integrationClient.invokeOperation(operationName, headers, params , function(result) {
      let products = [];
      for(let i = 0; i < result.products.length; i++){
		const product = {};
        product.imgProduct = result.products[i].image;
        product.lblProductName = result.products[i].name;
        product.lblProductPrice = result.products[i].regularPrice;
        product.lblAvgRating = result.products[i].customerReviewAverage;
        product.sku = result.products[i].sku;
        products.push(product);
      }
      
      resolve(products);
    },function(error) {
      reject(error);
      console.log("Integration Service Failure :" + JSON.stringify(error));
    });
  });
}

/*
* To get a product details base on its SKU
* @Param SKU integer
*/
function syncProductDetails(sku){
  return new Promise((resolve,reject)=>{
    const integrationClient = KNYMobileFabric.getIntegrationService("BestBuyJAPI");
    const operationName = "getProductDetails";
    const params = { "Sku" : sku};
    const headers = {}; 

    integrationClient.invokeOperation(operationName, headers, params , function(result) {      
      resolve(result.products[0]);
    },function(error) {
      reject(error);
      console.log("Integration Service Failure :" + JSON.stringify(error));
    });
  });
}

/*
* To get a list of reviews  base on a Product's SKU
* @Param SKU integer
*/
function syncReviews(sku){
  return new Promise((resolve,reject)=>{
    const integrationClient = KNYMobileFabric.getIntegrationService("BestBuyJAPI");
    const operationName = "getReviewsBySku";
    const params = { "Sku" : sku};
    const headers = {}; 

    integrationClient.invokeOperation(operationName, headers, params , function(result) {
      let reviews = {};
      reviews.reviews = [];
      reviews.totalReviews = result.totalReviews;
      for(let i = 0; i < result.reviews.length; i++){
		const review = {};
        review.lblTitle = result.reviews[i].title;
        
        let name = "Anonymous";
        if(result.reviews[i].reviewer.length > 0){
          name = result.reviews[i].reviewer[0].name;
        }
        review.lblAuthor = `Submitted by: ${name}`;
        
        const rating = Math.trunc(result.reviews[i].rating);
        // Setting stars based on rating
        for(let i = 0; i < rating; i++){
          review[`imgStar${i}`] = {};
          review[`imgStar${i}`].src = "konymp_pl_star_active.png";
        }
        review.lblComment = result.reviews[i].comment;
        reviews.reviews.push(review);
      }
      
      resolve(reviews);
    },function(error) {
      reject(error);
      console.log("Integration Service Failure :" + JSON.stringify(error));
    });
  });
}