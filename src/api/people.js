export default {
  /**
   * 用户管理
   * */
  // 用户详情
  getPeopleInfo: { method: 'GET', path: 'people/:person_uuid' },
  // 用户列表
  getPeoplesList: { method: 'GET', path: 'people' },
  // 用户创建
  createPeople: { method: 'POST', path: 'people' },
  // 用户编辑
  putPeopleInfo: { method: 'PUT', path: 'people/:person_uuid' },
  // 用户删除
  removePeople: { method: 'DELETE', path: 'people/:person_uuid' },
  // 用户上传特征图片
  addPeopleImage: { method: 'POST', path: 'people/:person_uuid/add_image', options: { timeout: 60000 } },
  // 用户特征图片删除
  removePeopleImage: { method: 'POST', path: 'people/:person_uuid/remove_image/:image_uuid' },
  // 用户特征图片清除
  removeAllPeopleImage: { method: 'POST', path: 'people/:person_uuid/clear_image' },
  // 设备重设用户特征
  syncPeopleDevicesImages: { method: 'POST', path: 'devices_sync_person/:person_uuid' },
}
