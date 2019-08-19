define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClickBtnBack defined for HeaderJoel **/
    AS_UWI_i0384a5d76f244d5abf9810f1b869bbd: function AS_UWI_i0384a5d76f244d5abf9810f1b869bbd(eventobject) {
        var self = this;
        this.onBtnBackClick();
    },
    /** onRowClick defined for sgmProducts **/
    AS_Segment_babbdfa6ca7d4050a3627c51653b2735: function AS_Segment_babbdfa6ca7d4050a3627c51653b2735(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onProductDetails(rowNumber);
    },
    /** postShow defined for frmProductsList **/
    AS_Form_f2e23776e2bc45dd9251f2790ef446f7: function AS_Form_f2e23776e2bc45dd9251f2790ef446f7(eventobject) {
        var self = this;
        this.moveSegmentAnimation();
    }
});