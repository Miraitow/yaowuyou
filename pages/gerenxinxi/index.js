Page({
  /**
   * 页面的初始数据
   */
  data: {
    show1:false,     //控制弹出层是否弹出的值
    show2:false,   
    show3:false,
    show4:false,      
    columns2: ['男','女'],   //选择器中的值
    columns3: ['仅震动','震动加响铃'],   //选择器中的值
    columns4: ['每天','自定义'],   //选择器中的值
    time:''   ,     //选择时间之后的值进行页面显示
    sex:'女' ,
    msg: "",
    way:'',
    roldId:''
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
  submit(){
    this.setData({
      show1:false,
      show2:false
    })
  },

  logout(){
    wx.navigateTo({
      url: '../login/index'
    })
  },
  onReady: function () {
      this.setData({
        roldId :wx.getStorageSync('roldId'),
        msg:wx.getStorageSync('roldId')==0?'p002':'admin'
      })

  },
})