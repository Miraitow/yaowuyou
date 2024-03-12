import {USER_PAGE} from '../../config/common'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    roldId: '',
    userInfo:'',
    // todolist:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      roldId :wx.getStorageSync('roldId'),
      userInfo:wx.getStorageSync('userInfo'),
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&  this.getTabBar()) {
      let roldId = wx.getStorageSync('roldId');
      if(roldId == 0){
        this.getTabBar().setData({
          selected:2,
          list: USER_PAGE.memberTabbarList
        })
      }else{
        this.getTabBar().setData({
          selected:2,
          list: USER_PAGE.adminTabbarList
        })
      }
    }
  },

  gerenxinxi(){
    wx.navigateTo({
      url: '../gerenxinxi/index'
    })
  },
  jiarenxinxi(){
    wx.navigateTo({
      url: '../jiarenxinxi/jiarenxinxi'
    })
  },
  yaohe(){
    wx.navigateTo({
      url: '../yaohe/yaohe'
    })
  },
  tijian(){
    wx.navigateTo({
      url: '../tijian/tijian'
    })
  },
  help(){
    wx.navigateTo({
      url: './help'
    })
  },
  shop(){
    wx.navigateTo({
      url: '../cuowu/cuowu'
    })
  },
  online(){
    wx.navigateTo({
      url: './online'
    })
  },
  todo(){
    wx.navigateTo({
      url: '../todo/index'
    })
  }
})