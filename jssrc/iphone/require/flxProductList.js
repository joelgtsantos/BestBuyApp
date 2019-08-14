define("flxProductList", function() {
    return function(controller) {
        var flxProductList = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "150dp",
            "id": "flxProductList",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {
            "retainFlowHorizontalAlignment": false
        }, {});
        flxProductList.setDefaultUnit(kony.flex.DP);
        var flxSale = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flxSale",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "retainFlowHorizontalAlignment": false
        }, {});
        flxSale.setDefaultUnit(kony.flex.DP);
        var lblSale = new kony.ui.Label({
            "id": "lblSale",
            "isVisible": false,
            "left": "0dp",
            "skin": "CopydefLabel0f324dcc5e7d84c",
            "text": "!!!ON SALE!!!",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxSale.add(lblSale);
        var flxWrapper = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, {
            "retainFlowHorizontalAlignment": false
        }, {});
        flxWrapper.setDefaultUnit(kony.flex.DP);
        var flxImage = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "50%",
            "zIndex": 1
        }, {
            "retainFlowHorizontalAlignment": false
        }, {});
        flxImage.setDefaultUnit(kony.flex.DP);
        var imgProduct = new kony.ui.Image2({
            "height": "100%",
            "id": "imgProduct",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImage.add(imgProduct);
        var flxContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "50%",
            "zIndex": 1
        }, {
            "retainFlowHorizontalAlignment": false
        }, {});
        flxContainer.setDefaultUnit(kony.flex.DP);
        var lblProductName = new kony.ui.Label({
            "height": "50%",
            "id": "lblProductName",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopydefLabel0j59ce0a1bda840",
            "text": "Label",
            "textStyle": {},
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxPrice = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20%",
            "id": "flxPrice",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "retainFlowHorizontalAlignment": false
        }, {});
        flxPrice.setDefaultUnit(kony.flex.DP);
        var lblCurrency = new kony.ui.Label({
            "height": "100%",
            "id": "lblCurrency",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopydefLabel0e36612002cbe47",
            "text": "$",
            "textStyle": {},
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblProductPrice = new kony.ui.Label({
            "height": "100%",
            "id": "lblProductPrice",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopydefLabel0hdd31a70519149",
            "text": "Label",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxPrice.add(lblCurrency, lblProductPrice);
        var flxRating = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20%",
            "id": "flxRating",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "retainFlowHorizontalAlignment": false
        }, {});
        flxRating.setDefaultUnit(kony.flex.DP);
        var lblRating = new kony.ui.Label({
            "height": "100%",
            "id": "lblRating",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopydefLabel0e36612002cbe47",
            "text": "Avg User Rating:",
            "textStyle": {},
            "top": "0dp",
            "width": "120dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblAvgRating = new kony.ui.Label({
            "height": "100%",
            "id": "lblAvgRating",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopydefLabel0hdd31a70519149",
            "text": "Label",
            "textStyle": {},
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxRating.add(lblRating, lblAvgRating);
        flxContainer.add(lblProductName, flxPrice, flxRating);
        flxWrapper.add(flxImage, flxContainer);
        flxProductList.add(flxSale, flxWrapper);
        return flxProductList;
    }
})