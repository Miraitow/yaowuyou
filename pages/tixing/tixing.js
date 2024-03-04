Page({
  /**
   * 页面的初始数据
   */
  data: {
    show1:false,     //控制弹出层是否弹出的值
    show2:false,   
    show3:false,
    show4:false,      
    columns1: ['7:00','7:30','8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30'],   //选择器中的值
    columns2: ['1粒','2粒','3粒','4粒','5粒','6粒'],   //选择器中的值
    columns3: ['仅震动','震动加响铃'],   //选择器中的值
    columns4: ['每天','自定义'],   //选择器中的值
    time:''   ,     //选择时间之后的值进行页面显示
    num:'' ,
    count:'',
    way:''
  },
  showPopup1(e){      //点击选择时间，打开弹出层（选择器）
       this.setData({show1:true})
     },
     showPopup2(e){      //点击选择剂量，打开弹出层（选择器）
      this.setData({show2:true})
    },
    showPopup3(e){      //点击提醒方式，打开弹出层（选择器）
      this.setData({show3:true})
    },
    showPopup4(e){      //点击选择重复次数，打开弹出层（选择器）
      this.setData({show4:true})
    },
  onClose1() {     //点击空白处开闭弹出层（选择器）及选择器左上角的取消
     this.setData({ show1: false });
   },
   onClose2() {     
    this.setData({ show2: false });
  },
  onClose3() {   
    this.setData({ show3: false });
  },
  onClose4() {     
    this.setData({ show4: false });
  },
  onConfirm1(e){    //选择器右上角的确定，点击确定获取值
    this.setData({
      time:e.detail.value,
      show1:false
    })
  },
  onConfirm2(e){    //选择器右上角的确定，点击确定获取值
    this.setData({
      num:e.detail.value,
      show2:false
    })
  },
  onConfirm3(e){    //选择器右上角的确定，点击确定获取值
    this.setData({
      way:e.detail.value,
      show3:false
    })
  },
  onConfirm4(e){    //选择器右上角的确定，点击确定获取值
    this.setData({
      count:e.detail.value,
      show4:false
    })
  },
 submitNewStuInfo(e){
   //表单输入框提交的内容包含在e参数中
   console.log(e.detail.value);
   if(e.detail.value.time == ''||e.detail.value.name == ''||e.detail.value.medicine == ''||e.detail.value.num == ''||e.detail.value.count == ''||e.detail.value.way == ''){
    wx.showToast({
      title: '请完整填写信息',
      icon: 'error',
      duration: 2000
    })
   }
   else{
    wx.showToast({
      title: '保存成功',
      icon: 'success',
      duration: 2000
    })
   }
   
 },

})