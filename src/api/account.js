export default {
  /**
   * 账号管理
   * */

  // 账号详情
  getAccountInfo: { method: 'GET', path: 'users/:user_uuid' },
  // 账号列表
  getAccountsList: { method: 'GET', path: 'users' },
  // 账号创建
  createAccount: { method: 'POST', path: 'users' },
  // 账号编辑
  setAccountInfo: { method: 'PUT', path: 'users/:user_uuid' },
  // 账号删除
  removeAccount: { method: 'DELETE', path: 'users/:user_uuid' },
}
