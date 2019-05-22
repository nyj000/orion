export default {
  /**
   * 七牛云
   * */
  // 获取TOKEN
  getQiniuToken: { method: 'GET', path: 'services/uptoken', },
  // 用户上传特征图片
  uploadImageToQiniu: { method: 'POST', path: '', fullUrl: 'https://up.qbox.me', options: { timeout: 60000 } },
}
