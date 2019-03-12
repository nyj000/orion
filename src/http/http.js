const VERSON = 'v1' // 后台版本
let LOGIN_TOKEN

// @params 接口名 数据对象 动态参数(可选)
const http = function(apiConfig, datas, options, defaultOptions) {
  let { axios } = defaultOptions
  return new Promise((resolve, reject) => {
    let data = Object.assign({}, datas)
    // 去掉空值
    for (let key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        let val = data[key]
        if (val === null || val === '') {
          delete data[key]
        }
      }
    }
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
          if (/_uuids/.test(key)) {
            // 包含 uuids的提交格式特殊
            let values = data[key]
            if (Array.isArray(values)) {
              values.forEach(val => formData.append(`${key}[]`, val))
            } else {
              formData.append(`${key}[]`, values)
            }
          } else {
            formData.append(key, data[key])
          }
        }
      }
      // 添加請求來源信息
      formData.append('request_channel', 'javascript_sdk')
      configs.data = formData
      if (nodeEnv) {
        config.headers = Object.assign(config.headers, formData.getHeaders())
      }
    } else if (/get|delete/i.test(apiConfig.method)) {
      // 添加請求來源信息
      data.request_channel = 'javascript_sdk'
      configs.params = data
    }
    let SERVER_URL = defaultOptions.baseURL
    configs.url = SERVER_URL + '/' + VERSON + '/api/' + apiConfig.path
    // 登录不需要TOKEN
    if (apiConfig.path === 'sign_in') {
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
      let {AppKey, AppSecret} = defaultOptions
      if (TOKEN) {
        configs.headers.Authorization = `Bearer ${TOKEN}`
      } else if (AppKey) {
        configs.headers.AppKey = AppKey
        configs.headers.AppSecret = AppSecret
      } else {
        throw new Error('读取身份信息失败, 请先登录或配置您的appKey/appSecret')
      }
      axios(configs).then(resolve).catch(reject)

    }
  })
}
// module.exports = http
export default http
