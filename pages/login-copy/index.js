Page({
  data: {
    phone:0
  },
  getPhoneNumber: function (e) {
    wx.login({
      success: res => {
        console.log(res);
      }
    })
  }
})
