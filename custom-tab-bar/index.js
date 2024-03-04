import {USER_PAGE} from "../config/common"
Component({
  data: {
    selected: 0,
    color: "#6d6d6d",
    selectedColor: "#00c399",
    "list": []
  },
  attached() {
    let roldId = wx.getStorageSync('roldId');
    // 0 表示监护人 1表示护工
    if(roldId == 0){
      this.setData({
        list: USER_PAGE.memberTabbarList
      })
    }else if(roldId == 1){
      this.setData({
        list: USER_PAGE.adminTabbarList
      })
    }else{
      this.setData({
        list: USER_PAGE.memberTabbarList
      })
    }
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      // 注释掉官方demo的这段代码
      // this.setData({
      //   selected: data.index
      // })
    }
  }
})