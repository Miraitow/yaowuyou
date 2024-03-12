import {USER_PAGE} from '../../config/common'
const {medicineReminds} = require("../../http/index.js")
const {confirmRecords} = require("../../http/index.js")

Page({
  data: {
    remindList:[],
    // remindList: [
    //   {
    //     "remindTime": "2016-06-14 17:50:45",
    //     "patientList": [
    //       {
    //         "patientId": 1,
    //         "patientName": "老王",
    //         "patientRoom": "101房",
    //         "medicineList": [
    //           {
    //             "remindId": 1,
    //             "medicineId": 2,
    //             "medicineName": "感冒灵",
    //             "medicineDosage": 2,
    //             "medicineUnit": "袋"
    //           },
    //           {
    //             "remindId": 3,
    //             "medicineId": 3,
    //             "medicineName": "阿莫西林",
    //             "medicineDosage": 2,
    //             "medicineUnit": "粒"
    //           }
    //         ]
    //       },
    //       {
    //         "patientId": 2,
    //         "patientName": "老张",
    //         "patientRoom": "103房",
    //         "medicineList": [
    //           {
    //             "remindId": 2,
    //             "medicineId": 3,
    //             "medicineName": "感冒灵",
    //             "medicineDosage": 2,
    //             "medicineUnit": "袋"
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     "remindTime": "2013-03-14 17:50:45",
    //     "patientList": [
    //       {
    //         "patientId": 1,
    //         "patientName": "老王",
    //         "patientRoom": "101房",
    //         "medicineList": [
    //           {
    //             "remindId": 4,
    //             "medicineId": 1,
    //             "medicineName": "阿莫西林",
    //             "medicineDosage": 2,
    //             "medicineUnit": "粒"
    //           },
    //           {
    //             "remindId": 5,
    //             "medicineId": 1,
    //             "medicineName": "阿莫西林",
    //             "medicineDosage": 2,
    //             "medicineUnit": "粒"
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // ]
  },

  checkconfirm(e){
     // 获取点击的确认按钮的数据
     const remindId = e.currentTarget.dataset.remindId;
     const medicineId = e.currentTarget.dataset.medicineId;
     const patientId = e.currentTarget.dataset.patientId;
    let remindList = this.data.remindList.map(remind => {
      if (remind.patientList) {
        remind.patientList = remind.patientList.map(patient => {
          if (patient.patientId === patientId) {
            patient.medicineList = patient.medicineList.map(medicine => {
              if (medicine.remindId === remindId) {
                // 添加一个字段来标记药品已经确认
                medicine.confirmed = true;
              }
              return medicine;
            });
          }
          return patient;
        });
      }
      return remind;
    });

    // 更新data中的remindList
    this.setData({
      remindList: remindList
    });


    const medicineTime = new Date().toJSON().substring(0, 10) + ' ' + new Date().toTimeString().substring(0,8);
    let records = e.currentTarget.dataset;
    records['medicineTime'] = medicineTime;
    confirmRecords(records).then((res)=>{
      //  console.log(res);
      if(res.data.code === 200){
        wx.showToast({
          title: '确认成功',
          icon:'success',
        })
      }
    })
  },

  onclick() {
    wx.navigateTo({
      url: '../tixing/tixing',
    })
  },

  onLoad: function (options) {
    const userId = wx.getStorageSync('user-id');
    const medicinedate = new Date().toJSON().substring(0, 10);
    medicineReminds(userId,medicinedate).then((res)=>{
      // console.log(res);
      this.setData({
        remindList:res.data.data
      })
    })
  },

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
})