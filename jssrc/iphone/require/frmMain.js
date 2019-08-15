define("frmMain", function() {
    return function(controller) {
        function addWidgetsfrmMain() {
            this.setDefaultUnit(kony.flex.DP);
            var flxWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxWrapper",
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
            flxWrapper.setDefaultUnit(kony.flex.DP);
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
            HeaderJoel.onClickBtnBack = controller.AS_UWI_e011a332b7ae474a9e1eca91491c720f;
            HeaderJoel.onClickBtnSearch = controller.AS_UWI_d4fb4673379b49b386e3a28216a4898e;
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
            flxMain.setDefaultUnit(kony.flex.DP);
            kony.mvc.registry.add('Categories', 'Categories', 'CategoriesController');
            var sgmCategories = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "lblCategoryName": ""
                }, {
                    "lblCategoryName": ""
                }, {
                    "lblCategoryName": ""
                }],
                "groupCells": false,
                "height": "100%",
                "id": "sgmCategories",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_e216b94e64b140a0b33d3495915c6005,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxCategory",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "9dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxCategory": "flxCategory",
                    "lblCategoryName": "lblCategoryName"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [5, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_ROW_SELECT,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            flxMain.add(sgmCategories);
            flxContainer.add(flxNavigation, flxMain);
            flxWrapper.add(HeaderJoel, flxContainer);
            var flxHMenu = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHMenu",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "-100%",
                "skin": "CopyslFbox0a179a81bbf514a",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxHMenu.setDefaultUnit(kony.flex.DP);
            var flxSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxSearch",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxSearch.setDefaultUnit(kony.flex.DP);
            var imgReturn = new kony.ui.Image2({
                "height": "30dp",
                "id": "imgReturn",
                "isVisible": true,
                "left": "0dp",
                "onTouchStart": controller.AS_Image_f95c257016484171b47c03c2f035d9a0,
                "skin": "slImage",
                "src": "back_button.png",
                "top": "12dp",
                "width": "50dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtSearch = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "txtSearch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_EMAIL,
                "left": "10dp",
                "placeholder": "Type product",
                "secureTextEntry": false,
                "skin": "txtSkinSearch",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "7dp",
                "width": "60%",
                "zIndex": 100
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "defTextBoxPlaceholder",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var btnSearch = new kony.ui.Button({
                "focusSkin": "CopydefBtnFocus0a74c94d2d71a43",
                "height": "40dp",
                "id": "btnSearch",
                "isVisible": true,
                "left": 10,
                "onTouchStart": controller.AS_Button_a9914bca47c64c99990bb086d18ffb1d,
                "right": 50,
                "skin": "CopydefBtnNormal0h6fc2330b8ff4f",
                "text": "Search",
                "top": "7dp",
                "width": "60dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxSearch.add(imgReturn, txtSearch, btnSearch);
            flxHMenu.add(flxSearch);
            this.add(flxWrapper, flxHMenu);
        };
        return [{
            "addWidgets": addWidgetsfrmMain,
            "enabledForIdleTimeout": false,
            "id": "frmMain",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "info": {
                "kuid": "b185dbf691a64e2fbc3568cad0aa1a7d"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
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