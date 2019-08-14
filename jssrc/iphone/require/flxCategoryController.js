define("userflxCategoryController", {
    //Type your controller code here 
});
define("flxCategoryControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxCategoryController", ["userflxCategoryController", "flxCategoryControllerActions"], function() {
    var controller = require("userflxCategoryController");
    var controllerActions = ["flxCategoryControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
