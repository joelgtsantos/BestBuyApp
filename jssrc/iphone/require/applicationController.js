define({
    appInit: function(params) {
        skinsInit();
        kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
        kony.application.setDefaultTextboxPadding(false);
        kony.application.setRespectImageSizeForImageWidgetAlignment(true);
        kony.mvc.registry.add("com.cognits.joel.HeaderJoel", "HeaderJoel", "HeaderJoelController");
        kony.application.registerMaster({
            "namespace": "com.cognits.joel",
            "classname": "HeaderJoel",
            "name": "com.cognits.joel.HeaderJoel"
        });
        kony.mvc.registry.add("flxCategory", "flxCategory", "flxCategoryController");
        kony.mvc.registry.add("flxProductList", "flxProductList", "flxProductListController");
        kony.mvc.registry.add("flxContainer", "flxContainer", "flxContainerController");
        kony.mvc.registry.add("frmMain", "frmMain", "frmMainController");
        kony.mvc.registry.add("frmProductDetails", "frmProductDetails", "frmProductDetailsController");
        kony.mvc.registry.add("frmProductsList", "frmProductsList", "frmProductsListController");
        kony.mvc.registry.add("frmSplash", "frmSplash", "frmSplashController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmSplash").navigate();
    }
});