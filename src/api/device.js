export default {
  /**
   * 设备管理
   * */
  // 设备列表
  getDevicesList: { method: 'GET', path: 'devices' },
  // 从GRPC同步设备
  syncDevices: { method: 'GET', path: 'devices_sync' },
  // 设备认领
  bindDevice: { method: 'POST', path: 'devices' },
  // 同步至银行
  syncDeviceToBank: { method: 'POST', path: 'devices/:device_uuid/sync_to_bank' },
  // 设备详情
  getDeviceInfo: { method: 'GET', path: 'devices/:device_uuid' },
  // 设备信息修改
  setDeviceInfo: { method: 'PUT', path: 'devices/:device_uuid' },
  // 设备切换模式
  setDeviceMode: { method: 'POST', path: 'devices/:device_uuid/set_mode' },
  // // 获取设备在线识别的用户组信息
  // getDeviceOnlineGroupsInfo: { method: 'GET', path: 'devices/:device_uuid/online_groups' },
  // 设备删除
  unbindDevice: { method: 'DELETE', path: 'devices/:device_uuid' },

  // 设备用户列表
  getPeoplesListFromDevice: { method: 'GET', path: 'devices/:device_uuid/offline_people' },
  // 设备添加批量用户
  addPeoplesToDevice: { method: 'POST', path: 'devices/:device_uuid/add_people', options: { timeout: 60000 } },
  // 设备移除批量用户
  removePeoplesFromDevice: { method: 'POST', path: 'devices/:device_uuid/remove_people', options: { timeout: 60000 } },
  // 设备清空用户
  removeAllPeoplesFromDevice: {method: 'POST', path: 'devices/:device_uuid/clear'},
  // 设备添加所有用户
  addAllPeoplesToDevice: { method: 'POST', path: 'devices/:device_uuid/add_all_people', options: { timeout: 60000 } },
  // 设备添加用户组
  addDevicePeopleByGroups: { method: 'POST', path: 'devices/:device_uuid/add_groups', options: { timeout: 60000 } },
  // 设备重设用户组
  resetDevicePeopleByGroups: { method: 'POST', path: 'devices/:device_uuid/replace_groups', options: { timeout: 60000 } },
  // 设备移除用户组
  removeDevicePeopleByGroups: { method: 'POST', path: 'devices/:device_uuid/remove_groups', options: { timeout: 60000 } },
  // 批量设备添加用户
  addPersonToDevices: { method: 'POST', path: 'devices_sync_person/:person_uuid/add_to_devices', options: { timeout: 60000 } },
  // 批量设备移除用户
  removePersonFromDevices: { method: 'POST', path: 'devices_sync_person/:person_uuid/remove_from_devices', options: { timeout: 60000 } },
  // 批量设备重设用户特征
  resentPersonToDevices: { method: 'POST', path: 'devices_sync_person/:person_uuid/reset_to_devices', options: { timeout: 60000 } },

  // 设备识别记录
  getDevicesIdentifyRecord: { method: 'GET', path: 'device_logs/identify_list' },
  // 设备状态日志
  getDevicesStatusRecord: { method: 'GET', path: 'device_logs/status_list' },
  // 设备上传抓拍照片
  captureUploadImage: { method: 'POST', path: 'device_logs/:mac_address/capture_image' },
  // 设备重设用户特征
  syncDevicesPersonsImages: { method: 'POST', path: 'devices/:person_uuid' },

  // // 模式切换
  recogMode: { method: 'POST', path: 'iots_switch_mode' },
  // 远程控制
  deviceRemoteCtrl: { method: 'POST', path: 'iots/:device_uuid/remote_ctrl' },
}
