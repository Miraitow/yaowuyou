import {USER_PAGE} from '../../config/common'
Page({
  data: {
    stepslist: [
      {
     text1: "8:00",
     test:[
       {text2:"102房 张先生（已完成）",text3:[{text:"艾普拉唑肠溶片 & 饭后 1粒"},{text:"阿司匹林胶囊 & 饭后 1粒"}]},
       {text2:"103房 张女士（已完成）",text3:[{text:"盐酸雷尼替丁胶囊 & 饭后 1粒"}]},]
      },{
        text1:"8:30",
        test:[
          {text2:"101房 王先生（已完成）",text3:[{text:"易顺缓释胶囊 & 饭后 2粒"}]},
          {text2:"101房 刘女士（已完成）",text3:[{text:"阿司匹林胶囊 & 饭后 1粒"}]},
          {text2:"103房 张女士（已完成）",text3:[{text:"解热镇痛抗炎药 & 饭后 2粒"},{text:"阿莫西林胶囊 & 饭后 1粒"}]}
        ]
      },{
        text1:"12:30",
        test:[
          {text2:"102房 张先生",text3:[{text:"枸橼酸莫沙必利片 & 饭前 2粒"}]}
        ]
      },{
        text1:"13:30",
        test:[
          {text2:"101房 王先生",text3:[{text:"艾普拉唑肠溶片 & 饭后 1粒"}]},
          {text2:"101房 刘女士",text3:[{text:"阿司匹林胶囊 & 饭后 1粒"}]}
        ]
      }
    ]
  },

  onclick() {
    wx.navigateTo({
      url: '../tixing/tixing',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
    let roldId = wx.getStorageSync('roldId');
    if(roldId == 0){
      this.getTabBar().setData({
        selected: 0,
        list:USER_PAGE.memberTabbarList
      })
    }else{
      this.getTabBar().setData({
        selected: 0,
        list:USER_PAGE.adminTabbarList
      })
    }
  }
  },
todo(){
  wx.navigateTo({
    url: '../todo/index'
  })
}

})