define(function() {
    return function(controller) {
        var HeaderJoel = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "11.23%",
            "id": "HeaderJoel",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0f3e5773cb44346",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "HeaderJoel"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "HeaderJoel"), extendConfig({}, controller.args[2], "HeaderJoel"));
        HeaderJoel.setDefaultUnit(kony.flex.DP);
        var btnBack = new kony.ui.Image2(extendConfig({
            "height": "27dp",
            "id": "btnBack",
            "isVisible": false,
            "left": "2%",
            "onTouchStart": controller.AS_onClickBtnBack_d44e2cf05e894d328618834a60b5d12a,
            "skin": "CopyslImage0d2c6050fecc24b",
            "src": "back_button.png",
            "top": "20dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnBack"), extendConfig({}, controller.args[2], "btnBack"));
        var imgLogo = new kony.ui.Image2(extendConfig({
            "height": "40dp",
            "id": "imgLogo",
            "isVisible": true,
            "left": "38%",
            "skin": "slImage",
            "src": "best_buy_logo.png",
            "top": "10dp",
            "width": "90dp",
            "zIndex": 1
        }, controller.args[0], "imgLogo"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLogo"), extendConfig({}, controller.args[2], "imgLogo"));
        var btnSearch = new kony.ui.Image2(extendConfig({
            "height": "27dp",
            "id": "btnSearch",
            "isVisible": true,
            "onTouchStart": controller.AS_onClickBtnSearch_a76e84e9838c452aac0352e1b396e0dd,
            "right": "2%",
            "skin": "slImage",
            "src": "search_button.png",
            "top": "20dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnSearch"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSearch"), extendConfig({}, controller.args[2], "btnSearch"));
        HeaderJoel.add(btnBack, imgLogo, btnSearch);
        return HeaderJoel;
    }
})