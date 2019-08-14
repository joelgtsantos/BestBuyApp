define("userfrmProductDetailsController", {
    productDetails: {},
    reviews: {},
    //Type your controller code here
    onNavigate: async function(params) {
        kony.application.showLoadingScreen(null, "Loading...", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {});
        if (params !== null && params !== undefined) {
            //if(params.from !== "productDetails"){
            this.productDetails = await syncProductDetails(params.sku);
            await this.setUpDetails(this.productDetails);
            this.reviews = await syncReviews(params.sku);
            await this.setUpReviews(this.reviews);
            //}
        }
    },
    /*
     * To get a product details base on its SKU
     * @Param SKU integer
     */
    setUpDetails: function(productDetails) {
        new Promise((resolve, reject) => {
            // Filling up the product information
            this.view.imgProduct.src = productDetails.image;
            this.view.lblProductName.text = productDetails.name;
            this.view.lblProductPrice.text = productDetails.regularPrice;
            this.view.lblAvgRating.text = productDetails.customerReviewAverage;
            this.view.lblDescription.text = productDetails.shortDescription;
            const rating = Math.trunc(productDetails.customerReviewAverage);
            // Setting stars based on rating
            for (let i = 0; i < 5; i++) {
                this.view[`imgStar${i}`].src = "konymp_pl_star_inactive.png";
            }
            for (let i = 0; i < rating; i++) {
                this.view[`imgStar${i}`].src = "konymp_pl_star_active.png";
            }
            resolve(true);
        });
    },
    /*
     * To set up the reviews section
     * @Param SKU integer
     */
    setUpReviews: function(reviews) {
        new Promise((resolve, reject) => {
            // Filling up the product information
            this.view.lblReviewsCount.text = "Number of Reviews: " + reviews.totalReviews;
            this.view.sgmReviews.setData(reviews.reviews);
            // Setting stars based on rating
            /*for(let i = 0; i < 5; i++){
              this.view[`imgStar${i}`].src = "konymp_pl_star_inactive.png";
            }
            for(let i = 0; i < rating; i++){
              this.view[`imgStar${i}`].src = "konymp_pl_star_active.png";
            }*/
            resolve(true);
        });
    },
    /*
     * To go back to Product List Form
     */
    onBtnBackClick: function onBtnBackClick() {
        const ntf = new kony.mvc.Navigation("frmProductsList");
        const params = {};
        params.from = "productDetails";
        ntf.navigate(params);
        kony.application.dismissLoadingScreen();
    }
});
define("frmProductDetailsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClickBtnBack defined for HeaderJoel **/
    AS_UWI_e011a332b7ae474a9e1eca91491c720f: function AS_UWI_e011a332b7ae474a9e1eca91491c720f(eventobject) {
        var self = this;
        this.onBtnBackClick();
    }
});
define("frmProductDetailsController", ["userfrmProductDetailsController", "frmProductDetailsControllerActions"], function() {
    var controller = require("userfrmProductDetailsController");
    var controllerActions = ["frmProductDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
