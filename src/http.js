
import axios from 'axios'
const VERSON = 'v1' // 后台版本
let LOGIN_TOKEN

axios.interceptors.response.use(function (response) {
  // Do something with response data
  let headers = response.headers
  // 带分页的数据从响应头获取分页信息
  let total = headers['x-total-count']
  if (total) {
    response.data.total = total - 0
    response.data.page = headers['x-current-page'] - 0
    response.data.per_page = headers['x-per-page'] - 0
  }
  return response
}, function (err) {
  return Promise.reject(err)
})
// @params 接口名 数据对象 动态参数(可选)
const http = function(apiConfig, datas, options, defaultOptions) {
  return new Promise((resolve, reject) => {
    let data = Object.assign({}, datas)
    let match = apiConfig.path.match(/:[^/]+/g)
    let option = options || {}
    if (match) {
      // 获取并设置动态url值
      match.forEach(item => {
        var _key = item.replace(':', '')
        var path = apiConfig.path
        if (option[_key]) {
          path = path.replace(item, option[_key])
          apiConfig.path = path
        } else if (data[_key]) {
          path = path.replace(item, data[_key])
          apiConfig.path = path
          delete data[_key]
        } else {
          throw new Error('参数 ' + _key + ' 不能为空')
        }
      })
    }
    let config = {
      method: apiConfig.method,
      timeout: apiConfig.TIMEOUT,
      headers: {
      },
    }
    // 避免headers冲突
    if (option) {
      config.headers = Object.assign(config.headers, option.headers)
      delete option.headers
    }
    // console.log('data', datas)
    let configs = Object.assign(config, option)
    if (/post|put/i.test(apiConfig.method)) {
      // 全部使用form表单的格式提交
      configs['Content-Type'] = 'multipart/form-data'
      let formData
      let nodeEnv
      if (typeof window === 'undefined') {
        let __FormData = require('form-data')
        nodeEnv = true
        formData = new __FormData()
      } else {
        formData = new window.FormData()
      }
      for (let key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          formData.append(key, data[key])
        }
      }
      configs.data = formData
      if (nodeEnv) {
        config.headers = Object.assign(config.headers, formData.getHeaders())
      }
    } else if (/get|delete/i.test(apiConfig.method)) {
      configs.params = data
    }
    let SERVER_URL = defaultOptions.baseURL
    configs.url = SERVER_URL + '/' + VERSON + '/' + apiConfig.path
    // 登录不需要TOKEN
    if (apiConfig.path === 'api/sign_in') {
      // console.log(configs.data.get('account'))
      axios(configs).then(function(e) {
        let data = e.data
        if (/^ok$/i.test(data.status)) {
          // 保存token
          LOGIN_TOKEN = data.data.user.token
        }
        resolve(e)
      }).catch(reject)
    } else {
      let TOKEN = defaultOptions.TOKEN || LOGIN_TOKEN
      if (!TOKEN) {
        throw new Error('读取TOKEN信息失败，请先调用登录接口或设置您的TOKEN')
      }
      configs.headers.Authorization = `Bearer ${TOKEN}`
      axios(configs).then(resolve).catch(reject)
    }
  })
}
// module.exports = http
export default http
