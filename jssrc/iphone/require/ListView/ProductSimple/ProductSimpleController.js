define("ListView/ProductSimple/userProductSimpleController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {}
    };
});
define("ListView/ProductSimple/ProductSimpleControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("ListView/ProductSimple/ProductSimpleController", ["ListView/ProductSimple/userProductSimpleController", "ListView/ProductSimple/ProductSimpleControllerActions"], function() {
    var controller = require("ListView/ProductSimple/userProductSimpleController");
    var actions = require("ListView/ProductSimple/ProductSimpleControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
