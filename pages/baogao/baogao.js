// pages/baogao/baogao.js
const {
  medicalExamInfo
} = require("../../http/index.js")
Page({
  data: {
    message:{},
  },

  onLoad(options){
    let id = options.id;
    medicalExamInfo(id).then((res)=>{
      this.setData({message:res.data.data})
    })
  },
})