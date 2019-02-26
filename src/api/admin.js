export default {
  /**
   * 管理员登录登出
   * */
  // 登陆
  login: { method: 'POST', path: 'sign_in' },
  // 登出
  // logout: { method: 'POST', path: 'sign_out' },
  // 查看最新版本
  // check_upgrade: { method: 'GET', path: 'services/check_upgrade' },
  // 设备列表、全部
  // devices_list_all: { method: 'GET', path: 'all_devices' },
  // 修改用户授权信息
  putUserAuth: { method: 'PUT', path: 'user/gate_auth' },
  // 重置账号Secret,同时授权token 会更新
  refreshSecret: { method: 'POST', path: 'user/refresh_token' },
  // 重新同步特征
  syncFeatures: { method: 'POST', path: 'services/sync_feature' },
  /**
   * 获取gRPC进程状态
   * */
  getGrpcStatus: { method: 'GET', path: 'grpc/status' },
  /**
   * 设备配置
   * */
  // 设备配置列表
  // device_profiles_list: { method: 'GET', path: 'device_profiles' },
  // 获取设备配置详情
  // device_profiles_info: { method: 'GET', path: 'device_profiles/:mac_address' },
  // 更新设备配置
  // device_profiles_modify: { method: 'PUT', path: 'device_profiles/:mac_address' },
  /**
   * 设备升级管理
   * */
  // 设备升级列表
  // device_upgrades_list: { method: 'GET', path: 'device_upgrades' },
  // 新增设备升级
  // device_upgrades_add: { method: 'POST', path: 'device_upgrades', options: { timeout: 600000, 'Content-Type': 'multipart/form-data' } },
  // 获取设备升级详情
  // device_upgrades_info: { method: 'GET', path: 'device_upgrades/:upgrade_uuid' },
  // 升级指令再次下发
  // device_upgrades_resend: { method: 'POST', path: 'device_upgrades/:upgrade_uuid/send' },
}
