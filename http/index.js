const {request} = require('./request.js')
module.exports = {
  // 登录接口
  userlogin:(param)=>request('/v1/actions/login','POST',param),
  // 获取护工所有老人的监护人信息
  usercall:(nurseId)=>request('/v1/patient-relatives','GET',{'nurse-id':nurseId}),
  // 添加服药提醒
  remind:(param)=>request('/v1/reminds','POST',param),
  // 获取该监护人/护工所有老人的信息
  patients:(id,role)=>request('/v1/patients','GET',{'user-id':id,'role':role}),
  // 获取该监护人/护工所有老人药箱的信息
  medicineBox:(id,role)=>request('/v1/medicine-box','GET',{'user-id':id,'role':role}),
  // 获取该监护人/护工所有老人的每月体检状况
  medicalExam:(id,role)=>request('/v1/medical-exam','GET',{'user-id':id,'role':role}),
  // 获取当月体检报告详情
  medicalExamInfo:(id)=>request('/v1/medical-exam-info','GET',{'medical-exam-info-id':id}),
  // 获取某月的服药情况
  medicineRecords:(data,id)=>request('/v1/medicine-records','GET',{'data':data,'guardian-id':id}),
  // 获取该护工管理病人今天的服药提醒
  medicineReminds:(id,date)=>request('/v1/reminds','GET',{'nurse-id':id,'date':date}),
  // 护工确认后添加服药记录
  confirmRecords:(records)=>request('/v1/medicine-records','POST',records),
  // 获取该护工管理的病人列表
  patientInfo:(id)=>request('/v1/patient-info','GET',{'nurse-id':id}),
  // 获取病人药箱的药品列表
  medicines:(id)=>request('/v1/medicines','GET',{'patient-id':id}),
  // 添加服药提醒
  addReminds:(records)=>request('/v1/reminds','POST',records),
 
}