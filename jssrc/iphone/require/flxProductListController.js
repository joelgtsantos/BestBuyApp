define("userflxProductListController", {
    //Type your controller code here 
});
define("flxProductListControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxProductListController", ["userflxProductListController", "flxProductListControllerActions"], function() {
    var controller = require("userflxProductListController");
    var controllerActions = ["flxProductListControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
