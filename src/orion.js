import apiList from './api/index'
import axios from './http/axios.config'
import http from './http/http'
let _axios
class Orion {
  constructor(option) {
    let options = Object.assign({}, option)
    let { baseUrl, token, AppKey, appSecret } = options
    _axios = axios || options._axios
    // console.info('baseUrl', baseUrl)
    if (baseUrl && ((typeof baseUrl) !== 'string')) {
      throw new Error('解析服务器地址失败，请检查您的服务器地址')
    } else {
      baseUrl = baseUrl || 'https://orion.readsense.cn'
      this.baseUrl = baseUrl.replace(/\/$/, '')
    }
    this.TOKEN = token
    this.AppKey = AppKey
    this.appSecret = appSecret
  }
  setToken(token) {
    if (token && ((typeof token) !== 'string')) {
      throw new Error('解析token失败')
    } else {
      this.TOKEN = token
    }
  }
  setBaseUrl(baseUrl) {
    if (baseUrl && ((typeof baseUrl) !== 'string')) {
      throw new Error('解析服务器地址失败，请检查您的服务器地址')
    } else {
      baseUrl = baseUrl || 'https://orion.readsense.cn'
      this.baseUrl = baseUrl.replace(/\/$/, '')
    }
  }
}

for (let key in apiList) {
  if (Object.hasOwnProperty.call(apiList, key)) {
    Object.defineProperty(Orion.prototype, key, {
      value(data, options) {
        var api = JSON.parse(JSON.stringify(apiList[key]))
        // console.log(222, api, data)
        return http(api, data, options, {
          axios: _axios,
          baseURL: this.baseUrl,
          TIMEOUT: this.TIMEOUT || 10000,
          TOKEN: this.TOKEN,
          AppKey: this.AppKey,
          appSecret: this.appSecret,
        })
      }
    })
  }
}
export default Orion
