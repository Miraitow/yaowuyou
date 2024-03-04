// pages/call/index.js
import {USER_PAGE} from '../../config/common'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
    let roldId = wx.getStorageSync('roldId');
    if(roldId == 0){
      this.getTabBar().setData({
        selected: 2,
        list:USER_PAGE.memberTabbarList
      })
    }else{
      this.getTabBar().setData({
        selected: 1,
        list:USER_PAGE.adminTabbarList
      })
    }
  }
  },

  touch(){
    wx.navigateTo({
      url: '../cuowu/cuowu'
    })
  },
  detail(){
    wx.navigateTo({
      url: '../call-detail/call-detail-1/call-detail-1'
    })
  },
  onClose(event) {
    const { position, instance } = event.detail;
    switch (position) {
      case 'left':
      case 'cell':
        instance.close();
        break;
      case 'right':
        wx.showModal({
          title: '提示',
          content: '确认删除吗？',
          success (res) {
            if (res.confirm) {
              //确定绑定的操作
            } else if (res.cancel) {
              //取消绑定的操作
            }
          }
        })
        
        break;
    }
  },
})