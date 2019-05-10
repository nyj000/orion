export default {
  /**
   * 管理员登录登出
   * */
  // 登陆
  login: { method: 'POST', path: 'sign_in' },
  // 登出
  logout: { method: 'POST', path: 'sign_out' },
  // 个人资料
  getUserInfo: { method: 'GET', path: 'user/profile' },
  // 修改用户信息
  setUserInfo: { method: 'PUT', path: 'user/profile' },
  // 修改用户授权信息
  setUserGateAuth: { method: 'PUT', path: 'user/gate_auth' },
  // 重置账号Secret,同时授权token 会更新
  refreshSecret: { method: 'POST', path: 'user/refresh_token' },

  // 查看最新版本
  // check_upgrade: { method: 'GET', path: 'services/check_upgrade' },
  // 设备列表、全部
  getAllDevicesList: { method: 'GET', path: 'all_devices' },
  // 设备删除
  devicesDelete: { method: 'POST', path: 'devices/:device_uuid/full_delete' },
  // 设置日志追踪状态
  switchLogTrace: { method: 'POST', path: 'devices/:device_uuid/switch_log_trace' },
  // 重新同步特征
  syncFeatures: { method: 'POST', path: 'services/sync_feature', options: { timeout: 600000 } },
  /**
   * 获取gRPC进程状态
   * */
  getServiceStatus: { method: 'GET', path: 'services/status' },
  /**
   * 设备配置
   * */
  // 设备配置列表
  getDeviceProfilesList: { method: 'GET', path: 'device_profiles' },
  // 获取设备配置详情
  getDeviceProfilesInfo: { method: 'GET', path: 'device_profiles/:mac_address' },
  // 更新设备配置
  setDeviceProfilesInfo: { method: 'PUT', path: 'device_profiles/:mac_address' },
  // 设置设备配置模板
  setDeviceProfilesTemp: { method: 'PUT', path: 'device_profiles/:mac_address/set_temp' },
  // 批量应用模板
  applyDeviceProfilesTemp: { method: 'POST', path: 'device_profiles/:mac_address/apply_to' },
  /**
   * 设备升级管理
   * */
  // 设备升级列表
  getDeviceUpgradesList: { method: 'GET', path: 'device_upgrades' },
  // 新增设备升级
  createDeviceUpgrade: { method: 'POST', path: 'device_upgrades', options: { timeout: 600000 } },
  // 获取设备升级详情
  getDeviceUpgradeInfo: { method: 'GET', path: 'device_upgrades/:upgrade_uuid' },
  // 升级指令再次下发
  resendDeviceUpgrade: { method: 'POST', path: 'device_upgrades/:upgrade_uuid/send' },
}
