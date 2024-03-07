Page({
  /**
   * 页面的初始数据
   */
  data: { 
    userInfo:""
  },
 
  logout(){
    wx.navigateTo({
      url: '../login/index'
    })
  },
  onReady: function () {
    this.setData({
      userInfo:wx.getStorageSync('userInfo'),
    })
  },
})