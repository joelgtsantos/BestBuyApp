define("flxCategory", function() {
    return function(controller) {
        var flxCategory = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxCategory",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {
            "retainFlowHorizontalAlignment": false
        }, {});
        flxCategory.setDefaultUnit(kony.flex.DP);
        var lblCategoryName = new kony.ui.Label({
            "id": "lblCategoryName",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknCategoryName",
            "textStyle": {},
            "top": "21dp",
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
        flxCategory.add(lblCategoryName);
        return flxCategory;
    }
})