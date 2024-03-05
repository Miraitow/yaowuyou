import {USER_PAGE} from '../../config/common'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageHeight: 180,
    topHeight: 160,
    centerHeight: 108,
    show: true,
    inputFocus: '',
    name: '',//姓名
    employeeNumber: '',//工号
    password: '',//密码
    file: '',//人员照片
    role: 0,//0用户，1管理员
    myClassStyle1:"",
    myClassStyle0:""
  },



  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&  this.getTabBar()) {
      let roldId = wx.getStorageSync('roldId');
      if(roldId == 0){
        this.getTabBar().setData({
          selected:0,
          list: USER_PAGE.memberTabbarList
        })
      }else{
        this.getTabBar().setData({
          selected:0,
          list: USER_PAGE.adminTabbarList
        })
      }
    }
  },

  onLoad() {
    // let wx_token = uni.getStorageSync('wx_token')
    // if(wx_token){
    //   uni.reLaunch({
    //     url: "/pages/loginLogRecord/index"
    //   })
    // }
    this.setData({
      employeeNumber: 'p002',
      password: '70255403',
      myClassStyle0: ' background-color: #0ec69e; color: #fff;'
    })
  },

clickRole0(){
  this.setData({
    myClassStyle1: '',
    myClassStyle0: ' background-color: #0ec69e; color: #fff;',
    employeeNumber: '' ,
     password : '',
    employeeNumber: 'p002',
    password: '70255403',
    role: 0
  })
},
clickRole1(){
  this.setData({
    myClassStyle0:'',
    myClassStyle1: ' background-color: #0ec69e; color: #fff;',
    employeeNumber :'',
     password : '',
    employeeNumber: 'admin',
    password: '123456',
    role: 1
  })
},
handleshow(){
 this.data.show = !this.data.show
 this.setData({
   show: this.data.show
 })
},
clickRegister(){
  if(this.data.role==0){
    wx.navigateTo({
      url: '../register0/register0'
    })
  }
  else{
    wx.navigateTo({
      url: '../register1/register1'
    })
  }
},
 clickLogin() {
  if (this.data.employeeNumber == '' || this.data.password == '') {
    wx.showToast({
      title: '请输入手机号和密码',
      icon: 'error',
      duration: 2000
    })
  }
  // let apiUrl = '';
  // let params = {}
  if(this.data.role==0){
    // apiUrl = config.api_personLogin
    // params = {
    //   employeeNumber:this.data.employeeNumber,
    //   password:this.data.password ,
    // }
    wx.setStorageSync('roldId', 0);
    wx.reLaunch({
          url: '../zixun/index',
        })
  }else{
    // apiUrl = config.api_adminLogin
    // params = {
    //   account:this.data.employeeNumber,
    //   password:this.data.password,
    // }
    wx.setStorageSync('roldId', 1);
    wx.reLaunch({
          url: '../fuyao/index',
        })
  }
  // 登录
  // const res = await post(apiUrl, params);
  // if (res.ret == config.responseSuccessCode) {
  //   this.setWxtoken(res.data.wxToken)
  //   this.setRoleId(this.roleId)
  //   uni.showToast({
  //     title: "登录成功",
  //     icon: 'none'
  //   });
  //   setTimeout(()=>{
  //     uni.switchTab({
  //       url: `../loginLogRecord/index`
  //     })
  //   },200)
  // }else{
  //   uni.showToast({
  //     title: res.msg,
  //     icon: 'none'
  //   });
  // }
}

})


