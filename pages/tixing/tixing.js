const {
  patientInfo
} = require("../../http/index.js")
const {
  medicines
} = require("../../http/index.js")
const {
  addReminds
} = require("../../http/index.js")

Page({
  data: {
    show2: false,
    show3: false,
    show4: false,
    show5: false,

    columns2: ['1', '2', '3', '4', '5', '6', '7', '8'],
    columns3: ['仅震动', '震动加响铃'],
    columns4: ['每天', '每周', '每月'],

    remindTime: '',
    medicineDosage: '',
    patientId: '',
    patient: '',
    medicineId: '',
    medicine: '',
    patientIds: [],
    patientNames: [],
    medicineIds: [],
    medicineNames: [],
    repetitionRate: '',
    repetitionRateid: '',
    repetitionRateids: ['1', '2', '3'],
    remindMethod: '',
    remindMethodid: '',
    remindMethodids: ['1', '2', ],
    description: '',
  },

  onLoad() {
    const userId = wx.getStorageSync('user-id');
    patientInfo(userId).then((res) => {
      let patientlist = res.data.data
      this.setData({
        patientIds: patientlist.map(item => item.patientId),
        patientNames: patientlist.map(item => item.patientName),
      })
    })
  },

  showPopup2(e) { //点击选择剂量
    this.setData({
      show2: true
    })
  },
  showPopup3(e) { //点击提醒方式
    this.setData({
      show3: true
    })
  },
  showPopup4(e) { //点击选择重复次数
    this.setData({
      show4: true
    })
  },
  showPopup5(e) {
    this.setData({
      show5: true
    })
  },
  showPopup6(e) {
    this.setData({
      show6: true
    })
  },

  onClose2() {
    this.setData({
      show2: false
    });
  },
  onClose3() {
    this.setData({
      show3: false
    });
  },
  onClose4() {
    this.setData({
      show4: false
    });
  },
  onClose5() {
    this.setData({
      show5: false
    });
  },
  onClose6() {
    this.setData({
      show6: false
    });
  },

  onConfirm2(e) {
    this.setData({
      medicineDosage: e.detail.value,
      show2: false
    })
  },
  onConfirm3(e) {
    const idx = e.detail.index;
    this.setData({
      remindMethod: e.detail.value,
      remindMethodid: this.data.remindMethodids[idx],
      show3: false
    })
  },
  onConfirm4(e) {
    const idx = e.detail.index;
    this.setData({
      repetitionRate: e.detail.value,
      repetitionRateid: this.data.repetitionRateids[idx],
      show4: false
    })
  },
  onConfirm5(e) {
    const idx = e.detail.index;
    this.setData({
      patientId: e.detail.value,
      patient: this.data.patientIds[idx],
      show5: false
    })
    medicines(this.data.patientIds[idx]).then((res) => {
      let medicinelist = res.data.data
      console.log(medicinelist);
      this.setData({
        medicineIds: medicinelist.map(item => item.medicineId),
        medicineNames: medicinelist.map(item => item.medicineName),
      })
    })
  },
  onConfirm6(e) {
    const idx = e.detail.index;
    this.setData({
      medicineId: e.detail.value,
      medicine: this.data.medicineIds[idx],
      show6: false
    })
  },
  submitNewStuInfo(e) {
    //表单输入框提交的内容包含在e参数中
    console.log(e.detail.value);
    if (e.detail.value.remindTime == '' || e.detail.value.patientId == '' || e.detail.value.medicineId == '' || e.detail.value.medicineDosage == '' || e.detail.value.remindMethod == '' || e.detail.value.repetitionRate == '') {
      wx.showToast({
        title: '请完整填写信息',
        icon: 'error',
        duration: 2000
      })
    } else {
      const obj = {
        remindTime: this.data.remindTime,
        patientId: this.data.patient,
        medicineId: this.data.medicine,
        medicineDosage: this.data.medicineDosage,
        repetitionRate: this.data.repetitionRateid,
        remindMethod: this.data.remindMethodid,
        description: this.data.description
      }
      //  console.log(obj);
      addReminds(obj).then((res) => {
        if (res.data.code === 200) {
          this.setData({
            remindTime: '',
            medicineDosage: '',
            description: '',
          })
          wx.showToast({
            title: '保存成功',
            icon: 'success',
            duration: 2000
          })
        }
      })
    }
  },
})