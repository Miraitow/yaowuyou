const {medicineBox} = require("../../http/index.js")
Page({
  data: {
    id:1,
    role:0,
    medicineBox:[],
  },

  getmedicineBox(){
    // this.setData({
    //   medicineBox :  [
    //     {
    //       "patientRoom": "101房",
    //       "medicineBoxName": "01药箱",
    //       "patientName": "王先生",
    //       "medicineBoxDetailList": [
    //         {
    //           "medicineName": "阿司匹林1",
    //           "dosage": 13
    //         },
    //         {
    //           "medicineName": "阿司匹林2",
    //           "dosage": 14
    //         },
    //         {
    //           "medicineName": "阿司匹林3",
    //           "dosage": 134
    //         }
    //       ]
    //     },
    //     {
    //       "patientRoom": "102房",
    //       "medicineBoxName": "02药箱",
    //       "patientName": "刘先生",
    //       "medicineBoxDetailList": [
    //         {
    //           "medicineName": "阿司匹林2",
    //           "dosage": 13
    //         },
    //         {
    //           "medicineName": "阿司匹林3",
    //           "dosage": 14
    //         },
    //         {
    //           "medicineName": "阿司匹林4",
    //           "dosage": 134
    //         }
    //       ]
    //     }
    //   ]
    // })
    const userId = wx.getStorageSync('user-id');
    const role = wx.getStorageSync('roldId')
    medicineBox(userId,role).then((res)=>{
      // console.log(res);
      this.setData({
        medicineBox:res.data.data
      })
    })
  },
  onLoad() {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

    this.getmedicineBox();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      role: wx.getStorageSync('roldId'),
    })
  },
})