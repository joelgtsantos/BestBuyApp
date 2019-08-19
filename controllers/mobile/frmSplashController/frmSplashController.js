define({ 
  onPostShow : function (){
    const ntf = new kony.mvc.Navigation("frmMain");
  	ntf.navigate();
    kony.application.dismissLoadingScreen();
  }
 });