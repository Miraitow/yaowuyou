const {
  medicalExam
} = require("../../http/index.js")

Page({
  data: {
    id: 1,
    role: 0,
    medicalExam: [],
  },

  getmedicalExam() {
    // this.setData({
    //   medicalExam: [{
    //       "patientRoom": "101房",
    //       "patientName": "张三",
    //       "medicalExamInfoId": 11
    //     },
    //     {
    //       "patientRoom": "102房",
    //       "patientName": "李四",
    //       "medicalExamInfoId": 12
    //     },
    //     {
    //       "patientRoom": "103房",
    //       "patientName": "王五",
    //       "medicalExamInfoId": null
    //     }
    //   ]
    // })
    const userId = wx.getStorageSync('user-id');
    const role = wx.getStorageSync('roldId')
    medicalExam(userId,role).then((res)=>{
      this.setData({
        medicalExam:res.data.data
      })
    })
  },

  baogao(e) {
    console.log(e.currentTarget.dataset.id);
    const id = e.currentTarget.dataset.id;
    if(id){
      wx.navigateTo({
        url: '../baogao/baogao?id='+id
      })
    }
  },

  onReady() {
    this.getmedicalExam();
  },

  onShow() {
    this.setData({
      role: wx.getStorageSync('roldId'),
    })
  },
})