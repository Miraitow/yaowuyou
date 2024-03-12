const { baseUrl } = require('./env.js').dev

module.exports = {
  request(url,method="GET",data={}){
    console.log(data);
    let fullUrl = `${baseUrl}${url}`;
    wx.showLoading({
      title: '玩命加载中',
    })
    return new Promise((resolve,reject)=>{
      wx.request({
        url: fullUrl,
        method,
        data,
        header:{
          'Content-type':'application/json'
        },
        success(res){
            resolve(res)
            wx.hideLoading()
        },
        fail(error){
          wx.showToast({
            title: '数据接口有问题',
            icon: 'error',
          })
          reject('数据接口有问题')
        }
      })
    })
  }
}