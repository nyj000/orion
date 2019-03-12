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
  setGroupInfo: { method: 'PUT', path: 'groups/:group_uuid' },
  // 用户群组删除
  removeGroup: { method: 'DELETE', path: 'groups/:group_uuid' },
  // 用户群组用户类表
  getPeoplesListFromGroup: { method: 'GET', path: 'groups/:group_uuid/people' },
  // 用户群组添加用户
  addPeoplesToGroup: { method: 'POST', path: 'groups/:group_uuid/add_people' },
  // 用户群组添加全部用户
  addAllPeoplesToGroup: { method: 'POST', path: 'groups/:group_uuid/add_all_people' },
  // 用户群组删除用户
  removePeoplesFromGroup: { method: 'POST', path: 'groups/:group_uuid/remove_people' },
  // 用户群组清空用户
  removeAllPeoplesFromGroup: { method: 'POST', path: 'groups/:group_uuid/clear_people' },
  // 用户群组通过其他用户组添加用户
  addPeoplesToGroupFromOtherGroups: { method: 'POST', path: 'groups/:group_uuid/add_group' },
}
