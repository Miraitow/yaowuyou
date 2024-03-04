// pages/tianjiayaopin/tianjiayaopin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  saoma(){
    wx.scanCode({
      success: function(res) {
          console.log('扫码获取的参数',res)
      }
  })
  },
  submit(){
    wx.showToast({
      title: '请完整填写信息',
      icon: 'error',
      duration: 2000
    })
  }
 
})