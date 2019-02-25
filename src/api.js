const api = {
  /**
 * 管理员登录登出
 * */
// 登陆
login: { method: 'POST', path: 'api/sign_in' },
// 登出
logout: { method: 'POST', path: 'api/sign_out' },
// 获取gRPC进程状态
getGrpcStatus: { method: 'GET', path: 'api/grpc/status' },
// 重新同步特征
updateSyncFeature: { method: 'POST', path: 'api/services/sync_feature' },
}
export default api
