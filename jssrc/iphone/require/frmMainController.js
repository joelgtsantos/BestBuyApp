define("userfrmMainController", {
    //Local variables
    categoriesNav: [],
    currentCategories: [],
    HOME_CATEGORY_ID: "cat00000",
    currentIndex: 0,
    txtNavHistory: "Home",
    //Local Methods
    onNavigate: async function(params) {
        let skipFirstLoad = false;
        //For skyping first load
        if (params !== null && params !== undefined) {
            if (params.from === "productList") {
                skipFirstLoad = true;
            }
        }
        if (skipFirstLoad === false) {
            this.currentCategories = await setupSync("cat00000");
            this.view.sgmCategories.setData(this.currentCategories);
            this.categoriesNav.push(this.currentCategories);
        }
    },
    /*
     * To get information about a specific category whenever a user clicks on it
     * @Param row Number integer
     */
    onCategoryClick: async function onCategoryClick(indexCat) {
        //Get subcategory list by id
        const tmpCategories = await setupSync(this.currentCategories[indexCat].id);
        if (tmpCategories.length > 0) {
            this.view.sgmCategories.removeAll();
            this.view.sgmCategories.setData(tmpCategories);
            this.categoriesNav.push(tmpCategories);
            this.view.lblNavHistory.text += `-> ${this.currentCategories[indexCat].lblCategoryName}`;
            this.currentCategories = tmpCategories;
        } else {
            const ntf = new kony.mvc.Navigation("frmProductsList");
            const params = {};
            params.categoryId = this.currentCategories[indexCat].id;
            params.categoryName = this.currentCategories[indexCat].lblCategoryName;
            ntf.navigate(params);
            kony.application.dismissLoadingScreen();
        }
        //Enable back button
        if (this.categoriesNav.length > 1) {
            this.view.HeaderJoel.isVisibleBtnBack = true;
        }
    },
    /*
     * To go back to a previous Product List within the same form
     */
    onBtnBackClick: function onBtnBackClick() {
        //Remove last subcategory list
        this.categoriesNav.pop();
        let txtNav = "";
        //Disable back button
        if (this.categoriesNav.length <= 1) {
            this.view.HeaderJoel.isVisibleBtnBack = false;
        }
        //Remove last nav text
        let navHistory = this.view.lblNavHistory.text;
        navHistory = navHistory.slice(0, navHistory.lastIndexOf("->"));
        this.view.lblNavHistory.text = navHistory;
        //Get Previous subcategory list
        this.currentCategories = this.categoriesNav[this.categoriesNav.length - 1];
        this.view.sgmCategories.removeAll();
        this.view.sgmCategories.setData(this.currentCategories);
    }
});
define("frmMainControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClickBtnBack defined for HeaderJoel **/
    AS_UWI_e011a332b7ae474a9e1eca91491c720f: function AS_UWI_e011a332b7ae474a9e1eca91491c720f(eventobject) {
        this.onBtnBackClick();
    },
    /** onRowClick defined for sgmCategories **/
    AS_Segment_e216b94e64b140a0b33d3495915c6005: function AS_Segment_e216b94e64b140a0b33d3495915c6005(eventobject, sectionNumber, rowNumber) {
        this.onCategoryClick(rowNumber);
    }
});
define("frmMainController", ["userfrmMainController", "frmMainControllerActions"], function() {
    var controller = require("userfrmMainController");
    var controllerActions = ["frmMainControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
