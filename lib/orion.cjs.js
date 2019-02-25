'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var axios = _interopDefault(require('axios'));

var api = {
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
  updateSyncFeature: { method: 'POST', path: 'api/services/sync_feature' }
};

var VERSON = 'v1'; // 后台版本
var LOGIN_TOKEN = void 0;

axios.interceptors.response.use(function (response) {
  // Do something with response data
  var headers = response.headers;
  // 带分页的数据从响应头获取分页信息
  var total = headers['x-total-count'];
  if (total) {
    response.data.total = total - 0;
    response.data.page = headers['x-current-page'] - 0;
    response.data.per_page = headers['x-per-page'] - 0;
  }
  return response;
}, function (err) {
  return Promise.reject(err);
});
// @params 接口名 数据对象 动态参数(可选)
var http = function http(apiConfig, datas, options, defaultOptions) {
  return new Promise(function (resolve, reject) {
    var data = Object.assign({}, datas);
    var match = apiConfig.path.match(/:[^/]+/g);
    var option = options || {};
    if (match) {
      // 获取并设置动态url值
      match.forEach(function (item) {
        var _key = item.replace(':', '');
        var path = apiConfig.path;
        if (option[_key]) {
          path = path.replace(item, option[_key]);
          apiConfig.path = path;
        } else if (data[_key]) {
          path = path.replace(item, data[_key]);
          apiConfig.path = path;
          delete data[_key];
        } else {
          throw new Error('参数 ' + _key + ' 不能为空');
        }
      });
    }
    var config = {
      method: apiConfig.method,
      timeout: apiConfig.TIMEOUT,
      headers: {}
      // 避免headers冲突
    };if (option) {
      config.headers = Object.assign(config.headers, option.headers);
      delete option.headers;
    }
    // console.log('data', datas)
    var configs = Object.assign(config, option);
    if (/post|put/i.test(apiConfig.method)) {
      // 全部使用form表单的格式提交
      configs['Content-Type'] = 'multipart/form-data';
      var formData = void 0;
      var nodeEnv = void 0;
      if (typeof window === 'undefined') {
        var __FormData = require('form-data');
        nodeEnv = true;
        formData = new __FormData();
      } else {
        formData = new window.FormData();
      }
      for (var key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          formData.append(key, data[key]);
        }
      }
      configs.data = formData;
      if (nodeEnv) {
        config.headers = Object.assign(config.headers, formData.getHeaders());
      }
    } else if (/get|delete/i.test(apiConfig.method)) {
      configs.params = data;
    }
    var SERVER_URL = defaultOptions.baseURL;
    configs.url = SERVER_URL + '/' + VERSON + '/' + apiConfig.path;
    // 登录不需要TOKEN
    if (apiConfig.path === 'api/sign_in') {
      // console.log(configs.data.get('account'))
      axios(configs).then(function (e) {
        var data = e.data;
        if (/^ok$/i.test(data.status)) {
          // 保存token
          LOGIN_TOKEN = data.data.user.token;
        }
        resolve(e);
      }).catch(reject);
    } else {
      var TOKEN = defaultOptions.TOKEN || LOGIN_TOKEN;
      if (!TOKEN) {
        throw new Error('读取TOKEN信息失败，请先调用登录接口或设置您的TOKEN');
      }
      configs.headers.Authorization = 'Bearer ' + TOKEN;
      axios(configs).then(resolve).catch(reject);
    }
  });
};

function init(baseURL, TOKEN) {
  console.info('baseURL', baseURL);
  if (typeof baseURL != 'string') {
    throw new Error('解析服务器地址失败，请检查您的服务器地址');
  } else {
    orion.baseURL = baseURL.replace(/\/$/, '');
  }
  orion.TOKEN = TOKEN;

  var _loop = function _loop(key) {
    if (Object.hasOwnProperty.call(api, key)) {
      orion[key] = function (data, options) {
        var api$1 = JSON.parse(JSON.stringify(api[key]));
        console.log(222, api$1, data);
        return http(api$1, data, options, {
          baseURL: orion.baseURL,
          TIMEOUT: orion.TIMEOUT || 10000,
          TOKEN: orion.TOKEN
        });
      };
    }
  };

  for (var key in api) {
    _loop(key);
  }
  orion.test = function () {
    console.log(orion);
  };
  return orion;
}
var orion = {
  init: init
};

module.exports = orion;
