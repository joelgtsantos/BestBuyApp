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
    },
    /*
     * To go back to a previous Product List within the same form
     */
    onClickBtnSearch: function onClickBtnSearch() {
        try {
            this.view.flxHMenu.animate(kony.ui.createAnimation({
                "100": {
                    "top": "0%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.7
            }, {
                "animationEnd": function() {}
            });
        } catch (e) {}
    },
    /*
     * To go back to a previous Product List within the same form
     */
    onClickBtnClose: function onClickBtnClose() {
        try {
            this.view.flxHMenu.animate(kony.ui.createAnimation({
                "100": {
                    "top": "-100%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.7
            }, {
                "animationEnd": function() {}
            });
        } catch (e) {}
    },
    /*
     * To go back to a previous Product List within the same form
     */
    onClickBtnSearchP: function onClickBtnSearchP() {
        const searchText = this.view.txtSearch.text;
        const ntf = new kony.mvc.Navigation("frmProductsList");
        const params = {};
        params.from = "search";
        params.searchText = searchText;
        ntf.navigate(params);
        kony.application.dismissLoadingScreen();
    },
    /*
     * Animates the scroll
     */
    moveSegmentAnimation: function moveSegmentAnimation() {
        let transformObj1 = kony.ui.makeAffineTransform();
        transformObj1.translate(250, 0);
        let transformObj2 = kony.ui.makeAffineTransform();
        transformObj2.translate(0, 0);
        let animationObject = kony.ui.createAnimation({
            "0": {
                "transform": transformObj1,
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            },
            "100": {
                "transform": transformObj2,
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            }
        });
        let animationConfig = {
            duration: 1,
            fillMode: kony.anim.FILL_MODE_FORWARDS
        };
        let animationDefObject = {
            definition: animationObject,
            config: animationConfig
        };
        this.view.sgmCategories.setAnimations({
            visible: animationDefObject
        });
    }
});
define("frmMainControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onRowClick defined for sgmCategories **/
    AS_Segment_e216b94e64b140a0b33d3495915c6005: function AS_Segment_e216b94e64b140a0b33d3495915c6005(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onCategoryClick(rowNumber);
    },
    /** onTouchStart defined for imgReturn **/
    AS_Image_f95c257016484171b47c03c2f035d9a0: function AS_Image_f95c257016484171b47c03c2f035d9a0(eventobject, x, y) {
        var self = this;
        this.onClickBtnClose();
    },
    /** onTouchStart defined for btnSearch **/
    AS_Button_a9914bca47c64c99990bb086d18ffb1d: function AS_Button_a9914bca47c64c99990bb086d18ffb1d(eventobject, x, y) {
        var self = this;
        this.onClickBtnSearchP();
    },
    /** postShow defined for frmMain **/
    AS_Form_dda301d161704c0594d8f54dc594af84: function AS_Form_dda301d161704c0594d8f54dc594af84(eventobject) {
        var self = this;
        this.moveSegmentAnimation();
    },
    /** onClickBtnBack defined for HeaderJoel **/
    AS_UWI_g705f89ccccf4d8ca6bf0b005c9b2501: function AS_UWI_g705f89ccccf4d8ca6bf0b005c9b2501(eventobject) {
        var self = this;
        this.onBtnBackClick();
    },
    /** onClickBtnSearch defined for HeaderJoel **/
    AS_UWI_a1289c20276d4b4ab5e22e65a85101ff: function AS_UWI_a1289c20276d4b4ab5e22e65a85101ff(eventobject) {
        var self = this;
        this.onClickBtnSearch();
    }
});
define("frmMainController", ["userfrmMainController", "frmMainControllerActions"], function() {
    var controller = require("userfrmMainController");
    var controllerActions = ["frmMainControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
