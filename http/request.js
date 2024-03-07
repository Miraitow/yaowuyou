const { baseUrl } = require('./env.js').dev

module.exports = {
  request:function(url,method="GET",data={}){
    console.log(data);
    let fullUrl = `${baseUrl}/${url}`;
    wx.showLoading({
      title: '玩命加载中',
    })
    return new Promise((resolve,reject)=>{
      wx.request({
        url: 'fullUrl',
        method,
        data,
        header:{
          'Content-type':'application/x-www-form-urlencoded'
        },
        success(res){
          if(res.data.code===0){
            resolve(res.data)
            wx.hideLoading()
          }
          else{
            wx.showToast({
              title: '接口有问题，请检查',
            })
            reject('接口有问题，请检查')
          }
        },
        fail(error){
          wx.showToast({
            title: '数据接口有问题',
          })
          reject('数据接口有问题')
        }
      })
    })
  }
}