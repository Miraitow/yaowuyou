import {USER_PAGE} from '../../config/common'
Page({
  data: {
    countdata:[{zhunshi:['2024-3-8','2024-3-1','2024-3-2','2024-3-3','2024-3-5','2024-3-6','2024-3-7','2024-3-9','2024-3-10','2024-3-12','2024-3-13','2023-4-14','2023-4-8','2023-4-25','2023-4-26','2023-4-21','2023-4-22','2023-4-27','2023-4-15','2023-4-28','2023-4-29','2023-4-17','2023-4-19','2023-4-20','2023-4-30','2023-5-1','2023-5-2','2023-5-3','2023-5-4','2023-5-5','2023-9-1','2023-9-2','2023-9-3','2023-9-6','2023-9-7','2023-9-8','2023-9-9','2023-9-10','2023-9-11','2023-9-12','2023-9-13','2023-9-14','2023-9-15',]},
    {loufu:['2024-3-4','2024-3-11','2023-9-16',]},
    {weifu:['2023-9-5',]},]
  },
  onLoad() {
   
  },

  onShow: function () {
    if (typeof this.getTabBar === 'function' &&  this.getTabBar()) {
      let roldId = wx.getStorageSync('roldId');
      if(roldId == 0){
        this.getTabBar().setData({
          selected:1,
          list: USER_PAGE.memberTabbarList
        })
      }else{
        this.getTabBar().setData({
          selected:1,
          list: USER_PAGE.adminTabbarList
        })
      }
    }
  },
})
