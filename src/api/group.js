export default {

  /**
   * 用户群组
   * */
  // 用户群组详情
  getGroupInfo: { method: 'GET', path: 'groups/:group_uuid' },
  // 用户群组列表
  getGroupsList: { method: 'GET', path: 'groups' },
  // 用户群组创建
  createGroup: { method: 'POST', path: 'groups' },
  // 用户群组编辑
  putGroupInfo: { method: 'PUT', path: 'groups/:group_uuid' },
  // 用户群组删除
  removeGroup: { method: 'DELETE', path: 'groups/:group_uuid' },
  // 用户群组添加用户
  addGroupsPeoples: { method: 'POST', path: 'groups/:group_uuid/add_people' },
  // 用户群组删除用户
  removeGroupsPeoples: { method: 'POST', path: 'groups/:group_uuid/remove_people' },
  // 用户群组清空用户
  removeAllGroupPeoples: { method: 'POST', path: 'groups/:group_uuid/clear_people' },
}
