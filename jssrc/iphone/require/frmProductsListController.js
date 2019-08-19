define("userfrmProductsListController", {
    productList: [],
    //Local Methods
    onNavigate: async function(params) {
        kony.application.showLoadingScreen(null, "Loading...", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {});
        this.view.flxEmptyResult.isVisible = false;
        this.view.flxMain.isVisible = true;
        this.view.lblNavHistory.text = "";
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
    },
    moveSegmentAnimation: function moveSegmentAnimation() {
        let transformObj1 = kony.ui.makeAffineTransform();
        transformObj1.scale(0, 0);
        let transformObj2 = kony.ui.makeAffineTransform();
        transformObj2.scale(1, 1);
        let animationObject = kony.ui.createAnimation({
            "0": {
                "transform": transformObj1,
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            },
            "100": {
                "transform": transformObj2,
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            }
        });
        let animationConfig = {
            duration: 1,
            fillMode: kony.anim.FILL_MODE_FORWARDS
        };
        let animationDefObject = {
            definition: animationObject,
            config: animationConfig
        };
        this.view.sgmProducts.setAnimations({
            visible: animationDefObject
        });
    }
});
define("frmProductsListControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onRowClick defined for sgmProducts **/
    AS_Segment_babbdfa6ca7d4050a3627c51653b2735: function AS_Segment_babbdfa6ca7d4050a3627c51653b2735(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onProductDetails(rowNumber);
    },
    /** postShow defined for frmProductsList **/
    AS_Form_f2e23776e2bc45dd9251f2790ef446f7: function AS_Form_f2e23776e2bc45dd9251f2790ef446f7(eventobject) {
        var self = this;
        this.moveSegmentAnimation();
    },
    /** onClickBtnBack defined for HeaderJoel **/
    AS_UWI_i0384a5d76f244d5abf9810f1b869bbd: function AS_UWI_i0384a5d76f244d5abf9810f1b869bbd(eventobject) {
        var self = this;
        this.onBtnBackClick();
    }
});
define("frmProductsListController", ["userfrmProductsListController", "frmProductsListControllerActions"], function() {
    var controller = require("userfrmProductsListController");
    var controllerActions = ["frmProductsListControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
