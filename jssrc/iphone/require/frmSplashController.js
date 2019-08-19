define("userfrmSplashController", {
    onPostShow: function() {
        const ntf = new kony.mvc.Navigation("frmMain");
        ntf.navigate();
        kony.application.dismissLoadingScreen();
    }
});
define("frmSplashControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** postShow defined for frmSplash **/
    AS_Form_fb47eec1faff4ea19f4dd9cdd556cc40: function AS_Form_fb47eec1faff4ea19f4dd9cdd556cc40(eventobject) {
        var self = this;
        this.onPostShow();
    }
});
define("frmSplashController", ["userfrmSplashController", "frmSplashControllerActions"], function() {
    var controller = require("userfrmSplashController");
    var controllerActions = ["frmSplashControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
