define("frmProductDetails", function() {
    return function(controller) {
        function addWidgetsfrmProductDetails() {
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
                "height": "11.23%",
                "id": "HeaderJoel",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0f3e5773cb44346",
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
            HeaderJoel.onClickBtnBack = controller.AS_UWI_ja05c1394ca943718f1e7d5686159f9a;
            var flxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90%",
                "id": "flxContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 0,
                "width": "100%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxContainer.setDefaultUnit(kony.flex.DP);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
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
            var flxProductDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "35%",
                "id": "flxProductDetails",
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
            flxProductDetails.setDefaultUnit(kony.flex.DP);
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
                "skin": "regularFontSkin",
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
            var flxProductWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "flxProductWrapper",
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
            flxProductWrapper.setDefaultUnit(kony.flex.DP);
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
            var flxProductContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxProductContainer",
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
            flxProductContainer.setDefaultUnit(kony.flex.DP);
            var lblProductName = new kony.ui.Label({
                "height": "40%",
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
            var flxStars = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20%",
                "id": "flxStars",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxStars.setDefaultUnit(kony.flex.DP);
            var imgStar0 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgStar0",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "konymp_pl_star_inactive.png",
                "top": "0dp",
                "width": "15%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgStar1 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgStar1",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "konymp_pl_star_inactive.png",
                "top": "0dp",
                "width": "15%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgStar2 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgStar2",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "konymp_pl_star_inactive.png",
                "top": "0dp",
                "width": "15%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgStar3 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgStar3",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "konymp_pl_star_inactive.png",
                "top": "0dp",
                "width": "15%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgStar4 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgStar4",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "konymp_pl_star_inactive.png",
                "top": "0dp",
                "width": "15%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxStars.add(imgStar0, imgStar1, imgStar2, imgStar3, imgStar4);
            flxProductContainer.add(lblProductName, flxPrice, flxRating, flxStars);
            flxProductWrapper.add(flxImage, flxProductContainer);
            var flxDescription = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30%",
                "id": "flxDescription",
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
            flxDescription.setDefaultUnit(kony.flex.DP);
            var lblDescription = new kony.ui.Label({
                "height": "100%",
                "id": "lblDescription",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0b6bf4fccddc847",
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
            flxDescription.add(lblDescription);
            flxProductDetails.add(flxSale, flxProductWrapper, flxDescription);
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0h0f8633129284f",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            var flxReviewsContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxReviewsContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "1%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "98%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxReviewsContainer.setDefaultUnit(kony.flex.DP);
            var flxReviewsCount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5%",
                "id": "flxReviewsCount",
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
            flxReviewsCount.setDefaultUnit(kony.flex.DP);
            var lblReviewsCount = new kony.ui.Label({
                "id": "lblReviewsCount",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0cc1728bca4bf44",
                "text": "Label",
                "textStyle": {},
                "top": "3dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxReviewsCount.add(lblReviewsCount);
            var CopyflxSeparator0c47fcddbb7ca4c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeparator0c47fcddbb7ca4c",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0h0f8633129284f",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            CopyflxSeparator0c47fcddbb7ca4c.setDefaultUnit(kony.flex.DP);
            CopyflxSeparator0c47fcddbb7ca4c.add();
            kony.mvc.registry.add('Reviews', 'Reviews', 'ReviewsController');
            var sgmReviews = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "imgStar0": "konymp_pl_star_inactive.png",
                    "imgStar1": "konymp_pl_star_inactive.png",
                    "imgStar2": "konymp_pl_star_inactive.png",
                    "imgStar3": "konymp_pl_star_inactive.png",
                    "imgStar4": "konymp_pl_star_inactive.png",
                    "lblAuthor": "Label",
                    "lblComment": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgStar0": "konymp_pl_star_inactive.png",
                    "imgStar1": "konymp_pl_star_inactive.png",
                    "imgStar2": "konymp_pl_star_inactive.png",
                    "imgStar3": "konymp_pl_star_inactive.png",
                    "imgStar4": "konymp_pl_star_inactive.png",
                    "lblAuthor": "Label",
                    "lblComment": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgStar0": "konymp_pl_star_inactive.png",
                    "imgStar1": "konymp_pl_star_inactive.png",
                    "imgStar2": "konymp_pl_star_inactive.png",
                    "imgStar3": "konymp_pl_star_inactive.png",
                    "imgStar4": "konymp_pl_star_inactive.png",
                    "lblAuthor": "Label",
                    "lblComment": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgStar0": "konymp_pl_star_inactive.png",
                    "imgStar1": "konymp_pl_star_inactive.png",
                    "imgStar2": "konymp_pl_star_inactive.png",
                    "imgStar3": "konymp_pl_star_inactive.png",
                    "imgStar4": "konymp_pl_star_inactive.png",
                    "lblAuthor": "Label",
                    "lblComment": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgStar0": "konymp_pl_star_inactive.png",
                    "imgStar1": "konymp_pl_star_inactive.png",
                    "imgStar2": "konymp_pl_star_inactive.png",
                    "imgStar3": "konymp_pl_star_inactive.png",
                    "imgStar4": "konymp_pl_star_inactive.png",
                    "lblAuthor": "Label",
                    "lblComment": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgStar0": "konymp_pl_star_inactive.png",
                    "imgStar1": "konymp_pl_star_inactive.png",
                    "imgStar2": "konymp_pl_star_inactive.png",
                    "imgStar3": "konymp_pl_star_inactive.png",
                    "imgStar4": "konymp_pl_star_inactive.png",
                    "lblAuthor": "Label",
                    "lblComment": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgStar0": "konymp_pl_star_inactive.png",
                    "imgStar1": "konymp_pl_star_inactive.png",
                    "imgStar2": "konymp_pl_star_inactive.png",
                    "imgStar3": "konymp_pl_star_inactive.png",
                    "imgStar4": "konymp_pl_star_inactive.png",
                    "lblAuthor": "Label",
                    "lblComment": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgStar0": "konymp_pl_star_inactive.png",
                    "imgStar1": "konymp_pl_star_inactive.png",
                    "imgStar2": "konymp_pl_star_inactive.png",
                    "imgStar3": "konymp_pl_star_inactive.png",
                    "imgStar4": "konymp_pl_star_inactive.png",
                    "lblAuthor": "Label",
                    "lblComment": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgStar0": "konymp_pl_star_inactive.png",
                    "imgStar1": "konymp_pl_star_inactive.png",
                    "imgStar2": "konymp_pl_star_inactive.png",
                    "imgStar3": "konymp_pl_star_inactive.png",
                    "imgStar4": "konymp_pl_star_inactive.png",
                    "lblAuthor": "Label",
                    "lblComment": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgStar0": "konymp_pl_star_inactive.png",
                    "imgStar1": "konymp_pl_star_inactive.png",
                    "imgStar2": "konymp_pl_star_inactive.png",
                    "imgStar3": "konymp_pl_star_inactive.png",
                    "imgStar4": "konymp_pl_star_inactive.png",
                    "lblAuthor": "Label",
                    "lblComment": "Label",
                    "lblTitle": "Label"
                }],
                "groupCells": false,
                "height": "60%",
                "id": "sgmReviews",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxContainer",
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
                    "flxStars": "flxStars",
                    "imgStar0": "imgStar0",
                    "imgStar1": "imgStar1",
                    "imgStar2": "imgStar2",
                    "imgStar3": "imgStar3",
                    "imgStar4": "imgStar4",
                    "lblAuthor": "lblAuthor",
                    "lblComment": "lblComment",
                    "lblTitle": "lblTitle"
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
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            flxReviewsContainer.add(flxReviewsCount, CopyflxSeparator0c47fcddbb7ca4c, sgmReviews);
            flxMain.add(flxProductDetails, flxSeparator, flxReviewsContainer);
            flxContainer.add(flxMain);
            flxWrapper.add(HeaderJoel, flxContainer);
            this.add(flxWrapper);
        };
        return [{
            "addWidgets": addWidgetsfrmProductDetails,
            "enabledForIdleTimeout": false,
            "id": "frmProductDetails",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "info": {
                "kuid": "e9954b555c984cd38a26d2c7080def23"
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