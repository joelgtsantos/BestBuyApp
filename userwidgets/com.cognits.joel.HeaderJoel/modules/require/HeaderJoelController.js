define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
			//this.view.btnBack.onTouchStart = this.clickBtnBack;
      		//this.view.btnSearch.onTouchStart = this.clickBtnSearch;
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
        clickBtnBack: function(){
          alert("back");
        },
      	clickBtnSearch: function(){
          alert("search");
        }
	};
});