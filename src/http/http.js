const VERSON = 'v1' // 后台版本
const IS_WX = (typeof wx === 'object' && typeof wx.request === 'function') // eslint-disable-line
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
    // console.log('config', config)
    // 避免headers冲突
    if (option) {
      config.headers = Object.assign(config.headers, option.headers)
      delete option.headers
    }
    // console.log('data', datas)
    let configs = Object.assign({}, config, option)
    // 添加請求來源信息
    data.request_channel = 'javascript_sdk'
    let SERVER_URL = defaultOptions.baseURL
    configs.url = apiConfig.fullUrl || (SERVER_URL + '/' + VERSON + '/api/' + apiConfig.path)
    // 非登录接口设置TOKEN
    if (apiConfig.path !== 'sign_in') {
      let {TOKEN, AppKey, AppSecret} = defaultOptions
      if (TOKEN) {
        configs.headers.Authorization = `Bearer ${TOKEN}`
      } else if (AppKey) {
        configs.headers.AppKey = AppKey
        configs.headers.AppSecret = AppSecret
      } else {
        throw new Error('读取身份信息失败, 请先配置您的AppKey/AppSecret')
      }
    }
    // 兼容小程序环境
    if (IS_WX) {
      configs.header = Object.assign({}, configs.headers)
      delete configs.headers
      Object.assign(configs, {
        dataType: 'json',
        success: function (res) {
          let headers = res.header
          // 带分页的数据从响应头获取分页信息
          let total = headers['X-Total-Count']
          if (!isNaN(total - 0)) {
            res.data.total = headers['X-Total-Count'] - 0
            res.data.page = headers['X-Current-Page'] - 0
            res.data.per_page = headers['X-Per-Page'] - 0
          }
          resolve(res)
        },
        fail: reject,
      })
      if (configs.method === 'POST' && data.image) {
        configs.filePath = data.image
        delete data.image
        configs.name = 'image'
        configs.formData = data
        wx.uploadFile(configs) // eslint-disable-line
      } else {
        configs.data = data
        wx.request(configs) // eslint-disable-line
      }
      return
    }
    if (/post|put/i.test(apiConfig.method)) {
      // 全部使用form表单的格式提交
      configs['Content-Type'] = 'multipart/form-data'
      let nodeEnv
      let formData
      if (typeof FormData === 'undefined') {
        let __FormData = require('form-data')
        nodeEnv = true
        formData = new __FormData()
      } else {
        formData = new FormData()
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
      configs.data = formData
      if (nodeEnv) {
        try {
          config.headers = Object.assign(config.headers, formData.getHeaders())
        } catch (e) {
        }
      }
    } else if (/get|delete/i.test(apiConfig.method)) {
      // 添加請求來源信息
      configs.params = data
    }
    axios(configs).then(resolve).catch(reject)
  })
}
// module.exports = http
export default http
