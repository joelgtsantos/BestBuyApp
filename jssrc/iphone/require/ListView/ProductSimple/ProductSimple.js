define(function() {
    return function(controller) {
        var ProductSimple = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "ProductSimple",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox3",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "ProductSimple"), extendConfig({}, controller.args[1], "ProductSimple"), extendConfig({}, controller.args[2], "ProductSimple"));
        ProductSimple.setDefaultUnit(kony.flex.DP);
        var segTemp = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "groupCells": false,
            "height": "100%",
            "id": "segTemp",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "Copyseg04e93bcaf53d242",
            "rowSkin": "Copyseg0cddf1f7e9db24a",
            "scrollingEvents": {},
            "sectionHeaderSkin": "CopyCopysliPhoneSegmentHeader5",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "c8c7cc00",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {},
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segTemp"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segTemp"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segTemp"));
        ProductSimple.add(segTemp);
        return ProductSimple;
    }
})