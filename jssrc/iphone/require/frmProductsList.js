define("frmProductsList", function() {
    return function(controller) {
        function addWidgetsfrmProductsList() {
            this.setDefaultUnit(kony.flex.DP);
            var HeaderJoel = new com.cognits.joel.HeaderJoel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "HeaderJoel",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "btnBack": {
                        "isVisible": true
                    },
                    "btnSearch": {
                        "isVisible": false
                    },
                    "HeaderJoel": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "retainFlowHorizontalAlignment": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            HeaderJoel.onClickBtnBack = controller.AS_UWI_f9898d5af727447598f26d36083201ba;
            var flxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90%",
                "id": "flxContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxContainer.setDefaultUnit(kony.flex.DP);
            var flxNavigation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxNavigation",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxNavigation.setDefaultUnit(kony.flex.DP);
            var lblNavHistory = new kony.ui.Label({
                "id": "lblNavHistory",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopydefLabel0be7e5898ac064a",
                "text": "Home",
                "textStyle": {},
                "top": "9dp",
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
            flxNavigation.add(lblNavHistory);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            kony.mvc.registry.add('ProductList', 'ProductList', 'ProductListController');
            var sgmProducts = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "imgProduct": "imagedrag.png",
                    "lblAvgRating": "Label",
                    "lblCurrency": "$",
                    "lblProductName": "Label",
                    "lblProductPrice": "Label",
                    "lblRating": "Avg User Rating:",
                    "lblSale": "!!!ON SALE!!!"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "sgmProducts",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_babbdfa6ca7d4050a3627c51653b2735,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxProductList",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxContainer": "flxContainer",
                    "flxImage": "flxImage",
                    "flxPrice": "flxPrice",
                    "flxProductList": "flxProductList",
                    "flxRating": "flxRating",
                    "flxSale": "flxSale",
                    "flxWrapper": "flxWrapper",
                    "imgProduct": "imgProduct",
                    "lblAvgRating": "lblAvgRating",
                    "lblCurrency": "lblCurrency",
                    "lblProductName": "lblProductName",
                    "lblProductPrice": "lblProductPrice",
                    "lblRating": "lblRating",
                    "lblSale": "lblSale"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_ROW_SELECT,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            flxMain.add(sgmProducts);
            var flxEmptyResult = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxEmptyResult",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxEmptyResult.setDefaultUnit(kony.flex.DP);
            var lblRsFound = new kony.ui.Label({
                "id": "lblRsFound",
                "isVisible": true,
                "left": "0%",
                "skin": "defLabel",
                "text": "No results found",
                "textStyle": {},
                "top": "20%",
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
            var lblTry = new kony.ui.Label({
                "id": "lblTry",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0d136a08ca36348",
                "text": "Try different keywords",
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
            flxEmptyResult.add(lblRsFound, lblTry);
            flxContainer.add(flxNavigation, flxMain, flxEmptyResult);
            this.add(HeaderJoel, flxContainer);
        };
        return [{
            "addWidgets": addWidgetsfrmProductsList,
            "enabledForIdleTimeout": false,
            "id": "frmProductsList",
            "layoutType": kony.flex.FLOW_VERTICAL,
            "needAppMenu": false,
            "skin": "slForm",
            "info": {
                "kuid": "gd982034bb564b06a3c4e8b327c8d95a"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});