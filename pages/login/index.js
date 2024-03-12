const {userlogin} = require("../../http/index.js")
Page({
  data: {
    imageHeight: 180,
    topHeight: 160,
    centerHeight: 108,
    show: true,
    inputFocus: '',
    cellphone: '',
    password: '',
    role: 0,//0监护人，1护工
    myClassStyle1:"",
    myClassStyle0:"",
  },

  getUserProfile(e) {
    wx.getUserProfile({
      desc: '用于完善会员资料', 
      success: (res) => {
        wx.setStorage({
          key:"userInfo",
          data:res.userInfo
        })
      }
    })
  },

  onLoad() {
    this.setData({
      myClassStyle0: ' background-color: #0ec69e; color: #fff;'
    })
  },

clickRole0(){
  this.setData({
    myClassStyle1: '',
    myClassStyle0: ' background-color: #0ec69e; color: #fff;',
    role: 0
  })
},
clickRole1(){
  this.setData({
    myClassStyle0:'',
    myClassStyle1: ' background-color: #0ec69e; color: #fff;',
    role: 1
  })
},

handleshow(){
 this.data.show = !this.data.show
 this.setData({
   show: this.data.show
 })
},
cellphoneChange(e){
this.setData({
  cellphone:e.detail.value
})
},
passwordChange(e){
  this.setData({
    password:e.detail.value
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
handlelogin(param){
  userlogin(param).then((res)=>{
    if(res.data.code === 200){
      wx.setStorageSync('user-id', res.data.data.userId);
      if(this.data.role == 0){
        wx.reLaunch({
          url: '../zixun/index',
        })
      }
      else{
        wx.reLaunch({
          url: '../fuyao/index',
        })
      }
    }
    else if(res.data.code === 201){
      wx.showToast({
        title: '该用户未注册',
        icon:'error'
      })
    }
    else{
      wx.showToast({
        title: '密码错误',
        icon: 'error',
      })
    }
  })
},
 clickLogin() {
  if (this.data.cellphone === ''|| this.data.password === '') {
    wx.showToast({
      title: '请输入',
      icon: 'error',
      duration: 1000
    })
  }
  else{
    const form = {
      cellphone:this.data.cellphone,
      password:this.data.password,
      status:this.data.role
    }
    if(this.data.role==0){
      wx.setStorageSync('roldId', 0);
      this.handlelogin(form);
    }else{
      wx.setStorageSync('roldId', 1);
      this.handlelogin(form)
    }
    if(!wx.getStorageSync('userInfo')){
      this.getUserProfile();
     }
  }
}
})