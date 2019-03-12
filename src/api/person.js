export default {
  /**
   * 用户管理
   * */
  // 用户详情
  getPersonInfo: { method: 'GET', path: 'people/:person_uuid' },
  // 用户列表
  getPersonsList: { method: 'GET', path: 'people' },
  // 用户创建
  createPerson: { method: 'POST', path: 'people' },
  // 用户编辑
  setPersonInfo: { method: 'PUT', path: 'people/:person_uuid' },
  // 用户删除
  removePerson: { method: 'DELETE', path: 'people/:person_uuid' },
  // 用户上传特征图片
  addPersonImage: { method: 'POST', path: 'people/:person_uuid/add_image', options: { timeout: 60000 } },
  // 用户特征图片删除
  removePersonImage: { method: 'POST', path: 'people/:person_uuid/remove_image/:image_uuid' },
  // 用户特征图片清除
  removeAllPersonImage: { method: 'POST', path: 'people/:person_uuid/clear_image' },
}
