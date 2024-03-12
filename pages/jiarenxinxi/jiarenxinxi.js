const {patients} = require("../../http/index.js")
Page({
  data: {
    id:1,
    role:0,
    patients:[],
  },

  getpatients(){
    // this.setData({
    //  patients : [
  //       {
  //         "patientName": "张三",
  //         "patientAge": "69岁",
  //         "patientRoom": "001",
  //         "guardianName": "张三",
  //         "guardianPhone": "123456",
  //         "medicineBoxName": "01药箱",
  //         "birthday": "1955-02-03",
  //         "personalIntro": "asd"
  //     },
  //     {
  //         "patientName": "李四",
  //         "patientAge": "69岁",
  //         "patientRoom": "002",
  //         "guardianName": "张三",
  //         "guardianPhone": "123456",
  //         "medicineBoxName": "02药箱",
  //         "birthday": "1955-02-04",
  //         "personalIntro": "asdads"
  //     },
  //     {
  //         "patientName": "王五",
  //         "patientAge": "69岁",
  //         "patientRoom": "003",
  //         "guardianName": "张三",
  //         "guardianPhone": "123456",
  //         "medicineBoxName": "03药箱",
  //         "birthday": "1955-02-03",
  //         "personalIntro": "asd"
  //     },
  //     {
  //         "patientName": "老刘",
  //         "patientAge": "69岁",
  //         "patientRoom": "004",
  //         "guardianName": "张三",
  //         "guardianPhone": "123456",
  //         "medicineBoxName": "04药箱",
  //         "birthday": "1955-02-04",
  //         "personalIntro": "asdads"
  //     }
  // ]
    // })
    const userId = wx.getStorageSync('user-id');
    const role = wx.getStorageSync('roldId');
    patients(userId,role).then((res)=>{
      // console.log(res);
      this.setData({
        patients:res.data.data
      })
    })
  },
  onLoad() {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

    this.getpatients();
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