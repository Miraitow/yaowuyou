// import { request } from '../../request/index.js'
import {USER_PAGE} from '../../config/common'
Page({
  data: {
    tabs: [
      {
        id: 0,
        value: '推荐',
        isActive: true
      },
      {
        id: 1,
        value: '糖尿病',
        isActive: false
      },
      {
        id: 2,
        value: '母婴',
        isActive: false
      },
      {
        id: 3,
        value: '康复',
        isActive: false
      },
      {
        id: 4,
        value: '风湿',
        isActive: false
      }
    ],
    // todoList: [
    //   {
    //     thing: '今天上午去养老院看望老爸',
    //     completed: true
    //   },
    //   {
    //     thing: '记得给老爸买阿莫西林胶囊',
    //     completed: true
    //   },
    //   {
    //     thing: '下午联系护工',
    //     completed: false
    //   }
    // ],
    todoThing: "",
    currentIndex: 0,
  },
  gotodetail1(){
    wx.navigateTo({
      url: '../details/detail1/index'
    })
  },
  // todoClick(e) {
  //   let index = e.currentTarget.dataset.index;
  //   this.setData({
  //     [`todoList[${index}].completed`]: !this.data.todoList[index].completed
  //   })
  // },
  // todoThingInput(e) {
  //   this.setData({ todoThing: e.detail.value })
  // },
  // addClick() {
  //   this.setData({
  //     [`todoList[${this.data.todoList.length}]`]: {
  //       thing: this.data.todoThing,
  //       completed: false
  //     },
  //     todoThing: ''
  //   })
  // },
  // deleteClick(e) {
  //   let index = e.currentTarget.dataset.index;
  //   this.data.todoList.splice(index, 1)
  //   this.setData({
  //     todoList: this.data.todoList
  //   })
  // },
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
  gotodetail(){
    wx.navigateTo({
      url: '../details/detail/index'
    })
  },
  gotodetail2(){
    wx.navigateTo({
      url: '../details/detail2/index'
    })
  },
  gotodetail3(){
    wx.navigateTo({
      url: '../details/detail3/index'
    })
  },
  gotodetail4(){
    wx.navigateTo({
      url: '../details/detail4/index'
    })
  },
  async handleTabsItemChange(e) {
    //tabs下标
    // console.log(e.detail.index);
    this.data.currentIndex = e.detail.index
    let tabs = this.data.tabs
    tabs.forEach((v, i) => i == this.data.currentIndex ? v.isActive = true : v.isActive = false)
    //修改后的tabs重新赋值
    this.setData({ tabs })
  },
})