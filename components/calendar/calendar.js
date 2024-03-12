// components/calendar/calendar.js
const {
  medicineRecords
} = require("../../http/index.js")
Component({
    properties: {
      countdata:{
        type:Array,
        value:[
          {zhunshi:{
          type:Array,
          value:[]
        }},
        {loufu:{
          type:Array,
          value:[]
        }},
        {weifu:{
          type:Array,
          value:[]
        }}
      ]
    }
    },
    data: {
        // 本月指的是选择的当前月份
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        weeksArr: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        nowMonth: new Date().getMonth() + 1, //本月是几月
        nowDay: new Date().getDate(), //本月当天的日期
        lastMonthDays: [], //上一个月
        nowMonthDays: [], //本月 
        nextMonthDays: [], //下一个月
        value1:0,
        value2:0,
        value3:0,
    },
    methods: {
        //获取当月天数
        getThisMonthDays(year, month) {
            return new Date(year, month, 0).getDate();
        },
        /** 总方法 */
        //创建日期
        createDays(year, month) {
            this.getLastMonthDays(year, month)
            this.getNowMonthDays(year, month)
            this.getNextMonthDays(year, month)
        },
        /** 获取上个月日期 */
        getLastMonthDays(year, month) {
            let nowMonthFirstDays = new Date(year, month - 1, 1).getDay()
            let lastMonthDays = []
            if (nowMonthFirstDays) { //判断当月的第一天是不是星期天
                //上个月显示多少天
                let lastMonthNums = month - 1 < 0 ? this.getThisMonthDays(year - 1, 12) : this.getThisMonthDays(year, month - 1); //判断是否会跨年
                //上个月从几号开始显示
                for (let i = lastMonthNums - nowMonthFirstDays + 1; i <= lastMonthNums; i++) {
                    let time = new Date(year, month - 2, i).toLocaleDateString() //对应的时间
                    lastMonthDays.push({
                        date: i, //几号
                        week: this.data.weeksArr[new Date(year, month - 2, i).getDay()], //星期几
                        time,
                        isNowMonthDay: ''
                    });
                }
            }
            this.setData({
                lastMonthDays
            })
            // console.log(lastMonthDays);
        },
        /** 获取当月日期 */
        getNowMonthDays(year, month) {
            let {
                nowMonth,
                nowDay
            } = this.data
            let nowMonthDays = []
            let days = this.getThisMonthDays(year, month); //获取当月的天数
            for (let i = 1; i <= days; i++) {
                let d = new Date(year, month - 1, i)
                let years = d.getFullYear()
                let months = d.getMonth() + 1
                let day2 = d.getDate()
                let time = `${years+'/'+months +'/'+day2}` // 2022/3/3
                let timer = time.replace(/\//g, "-")
                let timer2 = timer.split('-')
                let newdate
                nowMonthDays.push({
                    date: i, //几号
                    week: this.data.weeksArr[new Date(year, month - 1, i).getDay()], //星期几
                    time,
                    color1: false,
                    color2: false,
                    color3: false,
                    day: newdate,
                    isNowMonthDay: (month == nowMonth && i == nowDay) ? "isNowMonthDay" : ""
                });
            }
           let cnt1 = 0
           let cnt2 = 0
           let cnt3 = 0
          
            this.data.countdata[0].zhunshi.forEach(ele => {
                ele = ele.replace(/\-/g, "/")
                nowMonthDays.forEach(item => {
                    if (ele == item.time) {
                      cnt1 = cnt1 + 1
                        // console.log(item);
                        item.color1 = true
                    }
                })
            })
            // console.log(cnt1)
            this.data.countdata[1].loufu.forEach(ele => {
              ele = ele.replace(/\-/g, "/")
              nowMonthDays.forEach(item => {
                  if (ele == item.time) {
                    cnt2 = cnt2 + 1
                      item.color2 = true
                  }
              })
          })
          this.data.countdata[2].weifu.forEach(ele => {
            ele = ele.replace(/\-/g, "/")
            nowMonthDays.forEach(item => {
                if (ele == item.time) {
                  cnt3 = cnt3 + 1
                    item.color3 = true
                }
            })
         })
         let len1 = cnt1
         let len2 = cnt2
         let len3 = cnt3
            this.setData({
                nowMonthDays,
                value1:((len1 / days)*100|0),
                value2:((len2 / days)*100|0),
                value3:100-((len1 / days)*100|0)-((len2 / days)*100|0)
            })

        },
        /** 获取下个月日期 */
        getNextMonthDays(year, month) {
            let {
                lastMonthDays,
                nowMonthDays,
            } = this.data
            let nextMonthDays = []
            let nextMonthNums = (lastMonthDays.length + nowMonthDays.length) > 35 ? 42 - (lastMonthDays.length + nowMonthDays.length) : 35 - (lastMonthDays.length + nowMonthDays.length) //下个月显示多少天
            let nowYear = (parseInt(month) + 1) > 12 ? year + 1 : year //下一个月的年份
            let nowMonth = (parseInt(month) + 1) > 12 ? 1 : parseInt(month) + 1 //下一个月的月份
            if (nextMonthNums) { //判断当前天数是否大于零
                for (let i = 1; i <= nextMonthNums; i++) {
                    let time = new Date(year, month - 1, i).toLocaleDateString()
                    nextMonthDays.push({
                        date: i, //几号
                        week: this.data.weeksArr[new Date(nowYear, nowMonth - 1, i).getDay()], //星期几
                        time,
                        isNowMonthDay: ''
                    });
                }
            }
            this.setData({
                nextMonthDays
            })
            // console.log(nextMonthDays)
        },
        /** 切换月份 */
        changeMonthFun(e){
            let {
                year,
                month
            } = this.data
            let type = e.currentTarget.dataset.type //类型
            if (type == 'prev') { //上一个月
                year = month - 1 > 0 ? year : year - 1
                month = month - 1 > 0 ? month - 1 : 12
            } else { //next 下个月
                year = (parseInt(month) + 1) > 12 ? year + 1 : year
                month = (parseInt(month) + 1) > 12 ? 1 : parseInt(month) + 1
            }
            this.setData({
                year,
                month,
            })
            this.createDays(year, month)
        },
        /** 选择日期触发 */
        selectDate(e){
            let type = e.currentTarget.dataset.type //选择的时间类型
            let index = e.currentTarget.dataset.index //选择的下标
            let date = e.currentTarget.dataset.item.time //选择的下标
            let selectDate = date.replace(/\//g, "-")
            // console.log("选择的时间", selectDate)
            // 自定义事件，父组件调用，回调 选择的时间selectDate
            this.triggerEvent('selectDate', selectDate)
             //将选择的时间类型的 isNowMonthDay 全改为''
             this.data[type]?.forEach(item => {
                item.isNowMonthDay = ''
            })
            this.data[type]?.forEach((item, idx) => {
                if (index == idx) {
                    item.isNowMonthDay = (item.time == new Date().toLocaleDateString() ? "isNowMonthDay" : "isNotNowMonthDay"); //判断当前选中的日期是否是当前时间
                } else {
                    item.isNowMonthDay = ''
                }
            })
            this.setData({
                [type]: this.data[type],
            })
        },
    },
    ready() {
        let {
            year,
            month
        } = this.data
        this.createDays(year, month)
    }
})