define({ 
  //Local variables
  categoriesNav: [],
  currentCategories: [],
  HOME_CATEGORY_ID: "cat00000",
  currentIndex : 0,
  txtNavHistory: "Home",
  //Local Methods
  onNavigate : async function (params){
  	let skipFirstLoad = false;
  
  	//For skyping first load
  	if(params !== null && params !== undefined){
  		if(params.from === "productList"){
  			skipFirstLoad = true;
		}
	}
       
    if(skipFirstLoad === false){
      this.currentCategories  = await setupSync("cat00000");
      this.view.sgmCategories.setData(this.currentCategories);
      this.categoriesNav.push(this.currentCategories);
	}
  },
  /*
  * To get information about a specific category whenever a user clicks on it
  * @Param row Number integer
  */
  onCategoryClick : async  function onCategoryClick(indexCat){
    
  	//Get subcategory list by id
  	const tmpCategories  = await setupSync(this.currentCategories[indexCat].id);
  	if(tmpCategories.length > 0){
      this.view.sgmCategories.removeAll();
      this.view.sgmCategories.setData(tmpCategories);
      this.categoriesNav.push(tmpCategories);
      this.view.lblNavHistory.text += `-> ${this.currentCategories[indexCat].lblCategoryName}`;
      this.currentCategories = tmpCategories;
    }else{
      const ntf = new kony.mvc.Navigation("frmProductsList");
      const params = {};
      params.categoryId = this.currentCategories[indexCat].id;
      params.categoryName = this.currentCategories[indexCat].lblCategoryName;
      ntf.navigate(params);
      kony.application.dismissLoadingScreen();
    }
  	
  	//Enable back button
  	if(this.categoriesNav.length > 1){
      this.view.HeaderJoel.isVisibleBtnBack = true;
    }
  },
  /*
  * To go back to a previous Product List within the same form
  */
  onBtnBackClick: function onBtnBackClick(){
    //Remove last subcategory list
    this.categoriesNav.pop();
    
    let txtNav = "";
    
    //Disable back button
    if(this.categoriesNav.length <= 1){
      this.view.HeaderJoel.isVisibleBtnBack = false;
    }
    
    //Remove last nav text
    let navHistory = this.view.lblNavHistory.text;
    navHistory = navHistory.slice(0, navHistory.lastIndexOf("->"));
    this.view.lblNavHistory.text = navHistory;
    
    //Get Previous subcategory list
    this.currentCategories  =  this.categoriesNav[this.categoriesNav.length - 1];
    this.view.sgmCategories.removeAll();
  	this.view.sgmCategories.setData(this.currentCategories);
  },
  /*
  * To go back to a previous Product List within the same form
  */
  onClickBtnSearch: function onClickBtnSearch(){
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
  onClickBtnClose: function onClickBtnClose(){
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
  onClickBtnSearchP: function onClickBtnSearchP(){
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
  moveSegmentAnimation: function moveSegmentAnimation(){
    let transformObj1 = kony.ui.makeAffineTransform();
    transformObj1.translate(250, 0);
    let transformObj2 = kony.ui.makeAffineTransform();
    transformObj2.translate(0, 0); 

    let animationObject = kony.ui.createAnimation(
      {"0":{"transform":transformObj1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
       "100":{"transform":transformObj2,"stepConfig":{"timingFunction":kony.anim.LINEAR}}});
    
    let animationConfig = {
      duration: 1,
      fillMode: kony.anim.FILL_MODE_FORWARDS
    };
    let animationDefObject={definition:animationObject,config:animationConfig};
    this.view.sgmCategories.setAnimations({visible:animationDefObject});
  }
 });