define("flxContainer", function() {
    return function(controller) {
        var flxContainer = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "220dp",
            "id": "flxContainer",
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
        flxContainer.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "height": "15%",
            "id": "lblTitle",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopydefLabel0h10b6ec7cae247",
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
        var lblAuthor = new kony.ui.Label({
            "height": "15%",
            "id": "lblAuthor",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopydefLabel0f918988d895846",
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
        var flxStars = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
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
        var lblComment = new kony.ui.Label({
            "height": "55%",
            "id": "lblComment",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopydefLabel0f423dabbface4b",
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
        flxContainer.add(lblTitle, lblAuthor, flxStars, lblComment);
        return flxContainer;
    }
})