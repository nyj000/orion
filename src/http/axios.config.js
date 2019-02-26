import axios from 'axios'
axios.interceptors.response.use(function (response) {
  let headers = response.headers
  // 带分页的数据从响应头获取分页信息
  if (headers['x-total-count']) {
    try {
      response.data.total = headers['x-total-count'] - 0
      response.data.page = headers['x-current-page'] - 0
      response.data.per_page = headers['x-per-page'] - 0
    } catch (e) {}
  }
  return response
}, function (err) {
  return Promise.reject(err)
})

export default axios
