Page({

  data: {
    message:'',
  },
  onLoad(options){
    let obj = JSON.parse(options.obj)
    console.log(obj);
    this.setData({message:obj})
  },
  calling(){
    wx.makePhoneCall({
      phoneNumber: '15197294235', //此号码并非真实电话号码，仅用于测试
      success(){
        console.log("拨打电话成功！")
      },
      fail(){
        console.log("拨打电话失败！")
      }
    })
  }

})