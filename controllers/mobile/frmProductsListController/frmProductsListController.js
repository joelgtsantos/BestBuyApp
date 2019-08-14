define({ 
  productList: [],
  //Local Methods
  onNavigate : async function (params){
    kony.application.showLoadingScreen(null, "Loading...", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {});
  
  	if(params !== null && params !== undefined){
      
      if(params.from !== "productDetails"){
        this.view.sgmProducts.removeAll();
        this.view.lblNavHistory.text = `Category: ${params.categoryName}`;
        this.productList  = await syncProductsByCategory(params.categoryId);
        this.view.sgmProducts.setData(this.productList);
      }
	}
  },
  /*
  * To go back to List of categories
  */
  onBtnBackClick: function onBtnBackClick(){
  	const ntf = new kony.mvc.Navigation("frmMain");
  	const params = {};
  	params.from = "productList";
  	ntf.navigate(params);
  },
  /*
  * To go to a Product Details Screen
  * @Param row Number integer
  */
  onProductDetails: function(rowNumber){
    const ntf = new kony.mvc.Navigation("frmProductDetails");
  	const params = {};
  	params.sku = this.productList[rowNumber].sku;
  	ntf.navigate(params);
    kony.application.dismissLoadingScreen();
  }
 });