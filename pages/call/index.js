// pages/call/index.js
import {USER_PAGE} from '../../config/common'
const {usercall} = require("../../http/index.js")
Page({
  data: {
    contactlist:[],
    // contactlist:[
    //   {
    //     "avator": "ut",
    //     "name": "量论思么文身",
    //     "patientRoom": "nisi labore exercitation nulla in",
    //     "patientName": "她即改",
    //     "patientGuardianRelation": "amet ut",
    //     "cellphone": "13743489781",
    //     "address": "海南省枣庄市东至县",
    //     "description": "况场车界场值农始斗西前观青自体。果动才深火动水党切张其支内。第证边值始至低证王级大制最日快效属。方队带油应上活根相上收先应电。院织离争提华会个元热住图千花。族给使增八同问往把眼进口满究政构别。"
    //   },
    //   {
    //     "avator": "ut",
    //     "name": "量论思么文身",
    //     "patientRoom": "nisi labore exercitation nulla in",
    //     "patientName": "她即改",
    //     "patientGuardianRelation": "amet ut",
    //     "cellphone": "13743489781",
    //     "address": "海南省枣庄市东至县",
    //     "description": "况场车界场值农始斗西前观青自体。果动才深火动水党切张其支内。第证边值始至低证王级大制最日快效属。方队带油应上活根相上收先应电。院织离争提华会个元热住图千花。族给使增八同问往把眼进口满究政构别。"
    //   }
    // ]
  },

  onLoad(options) {
    this.getUserInfo();
  },


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

  getUserInfo(){
    const userId = wx.getStorageSync('user-id');
    usercall(userId).then((res)=>{
      console.log(res);
      this.setData({
        contactlist:res.data.data
      })
    })
  },

  detail(e){
    const index = e.currentTarget.dataset.index;
    let obj = JSON.stringify(this.data.contactlist[index])
    console.log(obj);
    wx.navigateTo({
      url: '../call-detail/call-detail?obj=' + obj,
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