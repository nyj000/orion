import admin from './admin' // 管理员登录登出
import account from './account' // 账号管理
import device from './device' // 设备管理
import group from './group' // 群组管理
import person from './person' // 用户管理
import face from './face' // 人脸特征识别

import qiniu from './qiniu' // 人脸特征识别

const apiList = Object.assign(
  admin,
  account,
  device,
  group,
  person,
  face,

  qiniu,
)
export default apiList
