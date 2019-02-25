import apiList from './api'
import http from './http'
function init(baseURL, TOKEN) {
  console.info('baseURL', baseURL)
  if ((typeof baseURL) != 'string') {
    throw new Error('解析服务器地址失败，请检查您的服务器地址')
  } else {
    orion.baseURL = baseURL.replace(/\/$/, '')
  }
  orion.TOKEN = TOKEN

  for (let key in apiList) {
    if (Object.hasOwnProperty.call(apiList, key)) {
      orion[key] = function (data, options) {
        var api = JSON.parse(JSON.stringify(apiList[key]))
        console.log(222, api, data)
        return http(api, data, options, {
          baseURL: orion.baseURL,
          TIMEOUT: orion.TIMEOUT || 10000,
          TOKEN: orion.TOKEN,
        })
      }
    }
  }
  orion.test = () => {
    console.log(orion)
  }
  return orion
}
var orion = {
  init: init,
}
export default orion