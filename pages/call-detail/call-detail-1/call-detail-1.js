// pages/call-detail/call-detail-1/call-detail-1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  calling(){
    wx.makePhoneCall({
      phoneNumber: '15197294235', //此号码并非真实电话号码，仅用于测试
      success:function(){
        console.log("拨打电话成功！")
      },
      fail:function(){
        console.log("拨打电话失败！")
      }
    })
  }

})