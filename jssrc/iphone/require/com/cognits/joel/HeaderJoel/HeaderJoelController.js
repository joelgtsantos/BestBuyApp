define("com/cognits/joel/HeaderJoel/userHeaderJoelController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            //this.view.btnBack.onTouchStart = this.clickBtnBack;
            //this.view.btnSearch.onTouchStart = this.clickBtnSearch;
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        clickBtnBack: function() {
            alert("back");
        },
        clickBtnSearch: function() {
            alert("search");
        }
    };
});
define("com/cognits/joel/HeaderJoel/HeaderJoelControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/cognits/joel/HeaderJoel/HeaderJoelController", ["com/cognits/joel/HeaderJoel/userHeaderJoelController", "com/cognits/joel/HeaderJoel/HeaderJoelControllerActions"], function() {
    var controller = require("com/cognits/joel/HeaderJoel/userHeaderJoelController");
    var actions = require("com/cognits/joel/HeaderJoel/HeaderJoelControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "isVisibleBtnBack", function(val) {
            this.view.btnBack.isVisible = val;
        });
        defineGetter(this, "isVisibleBtnBack", function() {
            return this.view.btnBack.isVisible;
        });
        defineSetter(this, "isVisibleBtnSearch", function(val) {
            this.view.btnSearch.isVisible = val;
        });
        defineGetter(this, "isVisibleBtnSearch", function() {
            return this.view.btnSearch.isVisible;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_onClickBtnBack_d44e2cf05e894d328618834a60b5d12a = function() {
        if (this.onClickBtnBack) {
            this.onClickBtnBack.apply(this, arguments);
        }
    }
    controller.AS_onClickBtnSearch_a76e84e9838c452aac0352e1b396e0dd = function() {
        if (this.onClickBtnSearch) {
            this.onClickBtnSearch.apply(this, arguments);
        }
    }
    return controller;
});
