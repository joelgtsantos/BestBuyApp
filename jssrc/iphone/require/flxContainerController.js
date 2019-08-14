define("userflxContainerController", {
    //Type your controller code here 
});
define("flxContainerControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxContainerController", ["userflxContainerController", "flxContainerControllerActions"], function() {
    var controller = require("userflxContainerController");
    var controllerActions = ["flxContainerControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
