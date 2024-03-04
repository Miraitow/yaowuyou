const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    arrdata: [
      {
        id: 1,
        name: "智能药盒死机怎么办",
        content:"智能药盒死机未小概率事件，通常表现为操作药盒没有任何反应。解决办法：长按开机键确定药盒关闭，再短按开机键开机。",
        isTrue: false
      },
      {
        id: 2,
        name:"无法蓝牙连接已绑定的药盒",
        content:"1、无法蓝牙连接已绑定的药盒？可以尝试用一下步骤解决：第一步，检查药盒是否正常待机请您给药盒进行充电，看是否有绿光，先长按药盒后方电源键保证药盒关机，再短按该按钮确认开机。第二步：打开药盒蓝牙 短按右键，进入设置界面，选择蓝牙，长按右键，确认蓝牙开启。第三步：重启药无忧小程序 完全关闭药无忧小程序后，重新打开药无忧小程序。 第四步：重新校准手机蓝牙请您关闭，并重新打开手机蓝牙。 注意：请不要在此处（系统蓝牙设置界面）搜索或者配对药盒 第五步：重新尝试连接药盒 完成前四步后，将药盒放置在手机附近。通过个人中心>我的设备>蓝牙连接，点击最上方的蓝牙连接按钮后等待。", isTrue: false
      },
      {
        id: 3,
        name: "为什么商品加入购物车了，购物车页面却看不到商品",
        content:"商品加入购物车了，购物车页面却看不到商品，可能商品点击的时候未触发按钮，导致购物车页面却看不到商品，请重新进行一次下单操作",
        isTrue: false
      },
      {
        id: 4,
        name: "何时会同步服药记录",
        content:"判定被管理者已服药或者未服药时，均会及时同步服药记录； 没有同步记录，说明服药记录未知，请被管理者检查药盒电量，同时将药盒置于网络信号良好的地带",
        isTrue: false
      }
    ],
  },
  onOpen(e) {
    this.selectedIndex = e.currentTarget.dataset.index;
    this.data.arrdata[this.selectedIndex].isTrue = !this.data.arrdata[this.selectedIndex].isTrue;
    this.setData({
      arrdata:this.data.arrdata
    })
  },
})
