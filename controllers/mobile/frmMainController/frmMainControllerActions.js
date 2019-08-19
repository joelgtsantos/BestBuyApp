define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClickBtnBack defined for HeaderJoel **/
    AS_UWI_g705f89ccccf4d8ca6bf0b005c9b2501: function AS_UWI_g705f89ccccf4d8ca6bf0b005c9b2501(eventobject) {
        var self = this;
        this.onBtnBackClick();
    },
    /** onClickBtnSearch defined for HeaderJoel **/
    AS_UWI_a1289c20276d4b4ab5e22e65a85101ff: function AS_UWI_a1289c20276d4b4ab5e22e65a85101ff(eventobject) {
        var self = this;
        this.onClickBtnSearch();
    },
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
    }
});