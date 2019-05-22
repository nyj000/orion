let _axios
if (typeof window !== 'undefined' && window.axios) {
  _axios = window.axios
} else {
  _axios = require('axios')
}
_axios.interceptors.response.use(function (response) {
  let headers = response.headers
  // 带分页的数据从响应头获取分页信息
  let total = headers['x-total-count']
  if (!isNaN(total - 0)) {
    response.data.total = headers['x-total-count'] - 0
    response.data.page = headers['x-current-page'] - 0
    response.data.per_page = headers['x-per-page'] - 0
  }
  return response
}, function (err) {
  return Promise.reject(err)
})

export default _axios
