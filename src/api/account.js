export default {
  /**
   * 账号管理
   * */
  // 修改用户授权信息
  setUserGateAuth: { method: 'PUT', path: 'user/gate_auth' },
  // 重置账号Secret,同时授权token 会更新
  refreshSecret: { method: 'POST', path: 'user/refresh_token' },
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
