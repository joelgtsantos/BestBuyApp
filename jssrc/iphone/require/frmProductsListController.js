define("userfrmProductsListController", {
    productList: [],
    //Local Methods
    onNavigate: async function(params) {
        kony.application.showLoadingScreen(null, "Loading...", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {});
        this.view.flxEmptyResult.isVisible = false;
        this.view.flxMain.isVisible = true;
        if (params !== null && params !== undefined) {
            if (params.from !== "productDetails") {
                this.view.sgmProducts.removeAll();
                //Navigating from search and trough categories
                if (params.from === "search") {
                    this.view.lblNavHistory.text = `Search: ${params.searchText}`;
                    this.productList = await syncProductsBySearch(params.searchText);
                    if (this.productList.length > 1) {
                        this.view.sgmProducts.setData(this.productList);
                    } else if (this.productList.length < 1) {
                        this.view.flxEmptyResult.isVisible = true;
                        this.view.flxMain.isVisible = false;
                    } else {
                        const ntf = new kony.mvc.Navigation("frmProductDetails");
                        const outParms = {};
                        outParms.sku = this.productList[0].sku;
                        outParms.navigate(params);
                        kony.application.dismissLoadingScreen();
                    }
                } else {
                    this.view.lblNavHistory.text = `Category: ${params.categoryName}`;
                    this.productList = await syncProductsByCategory(params.categoryId);
                    this.view.sgmProducts.setData(this.productList);
                }
            }
        }
    },
    /*
     * To go back to List of categories
     */
    onBtnBackClick: function onBtnBackClick() {
        const ntf = new kony.mvc.Navigation("frmMain");
        const params = {};
        params.from = "productList";
        ntf.navigate(params);
    },
    /*
     * To go to a Product Details Screen
     * @Param row Number integer
     */
    onProductDetails: function(rowNumber) {
        const ntf = new kony.mvc.Navigation("frmProductDetails");
        const params = {};
        params.sku = this.productList[rowNumber].sku;
        ntf.navigate(params);
        kony.application.dismissLoadingScreen();
    }
});
define("frmProductsListControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClickBtnBack defined for HeaderJoel **/
    AS_UWI_f9898d5af727447598f26d36083201ba: function AS_UWI_f9898d5af727447598f26d36083201ba(eventobject) {
        var self = this;
        this.onBtnBackClick();
    },
    /** onRowClick defined for sgmProducts **/
    AS_Segment_babbdfa6ca7d4050a3627c51653b2735: function AS_Segment_babbdfa6ca7d4050a3627c51653b2735(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onProductDetails(rowNumber);
    }
});
define("frmProductsListController", ["userfrmProductsListController", "frmProductsListControllerActions"], function() {
    var controller = require("userfrmProductsListController");
    var controllerActions = ["frmProductsListControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
