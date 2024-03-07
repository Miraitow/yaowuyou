const {request} = require('./request.js')
module.exports = {
  // 登录接口
  userlogin:(param)=>request('/v1/actions/login','POST',{param}),
}