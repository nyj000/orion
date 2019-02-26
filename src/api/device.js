export default {
  /**
   * 设备管理
   * */

  // // 模式切换
  // recog_mode: { method: 'POST', path: 'iots_switch_mode' },
  // // 远程控制
  // remote_ctrl: { method: 'POST', path: 'iots/:device_uuid/remote_ctrl' },

  // 设备列表
  getDevicesList: { method: 'GET', path: 'devices' },
  // 从GRPC同步设备
  syncDevices: { method: 'GET', path: 'devices_sync' },
  // 设备认领
  createDevice: { method: 'POST', path: 'devices' },
  // 同步至银行
  syncDeviceToBank: { method: 'POST', path: 'devices/:device_uuid/sync_to_bank' },
  // 设备详情
  getDeviceInfo: { method: 'GET', path: 'devices/:device_uuid' },
  // 设备信息修改
  putDeviceInfo: { method: 'PUT', path: 'devices/:device_uuid' },
  // 设备切换识别模式
  setDeviceRecogMode: { method: 'POST', path: 'devices/:device_uuid/set_recog_mode' },
  // 获取设备在线识别的用户组信息
  getDeviceOnlineGroupsInfo: { method: 'GET', path: 'devices/:device_uuid/online_groups' },
  // 设备删除
  removeDevice: { method: 'DELETE', path: 'devices/:device_uuid' },
  // 设备添加用户
  createDevicePeoples: { method: 'POST', path: 'devices/:device_uuid/add_people' },
  // 设备移除用户
  removeDevicePeoples: { method: 'POST', path: 'devices/:device_uuid/remove_people' },
  // 设备清空用户
  removeAllDevicePeoples: {method: 'POST', path: 'devices/:device_uuid/clear'},
  // 设备添加用户组
  createDeviceGroup: { method: 'POST', path: 'devices/:device_uuid/add_groups' },
  // 设备重设用户组
  // device_groups_modify: { method: 'POST', path: 'devices/:device_uuid/replace_groups' },
  // 设备移除用户组
  removeDeviceGroup: { method: 'POST', path: 'devices/:device_uuid/remove_groups' },
  // 设备清空用户组
  removeAllDeviceGroup: { method: 'POST', path: 'devices/:device_uuid/clear_groups' },
  // 设备识别记录
  getDevicesIdentifyRecord: { method: 'GET', path: 'device_logs/identify_list' },
  // 设备状态日志
  getDevicesStatusRecord: { method: 'GET', path: 'device_logs/status_list' },
}
