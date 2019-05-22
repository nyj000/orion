(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Orion = factory());
}(this, function () { 'use strict';

  var admin = {
    /**
     * 管理员登录登出
     * */
    // 登陆
    login: { method: 'POST', path: 'sign_in' },
    // 登出
    logout: { method: 'POST', path: 'sign_out' },
    // 个人资料
    getUserInfo: { method: 'GET', path: 'user/profile' },
    // 修改用户信息
    setUserInfo: { method: 'PUT', path: 'user/profile' },
    // 修改用户授权信息
    setUserGateAuth: { method: 'PUT', path: 'user/gate_auth' },
    // 重置账号Secret,同时授权token 会更新
    refreshSecret: { method: 'POST', path: 'user/refresh_token' },

    // 查看最新版本
    // check_upgrade: { method: 'GET', path: 'services/check_upgrade' },
    // 设备列表、全部
    getAllDevicesList: { method: 'GET', path: 'all_devices' },
    // 设备删除
    devicesDelete: { method: 'POST', path: 'devices/:device_uuid/full_delete' },
    // 设置日志追踪状态
    switchLogTrace: { method: 'POST', path: 'devices/:device_uuid/switch_log_trace' },
    // 重新同步特征
    syncFeatures: { method: 'POST', path: 'services/sync_feature', options: { timeout: 600000 } },
    /**
     * 获取gRPC进程状态
     * */
    getServiceStatus: { method: 'GET', path: 'services/status' },
    /**
     * 设备配置
     * */
    // 设备配置列表
    getDeviceProfilesList: { method: 'GET', path: 'device_profiles' },
    // 获取设备配置详情
    getDeviceProfilesInfo: { method: 'GET', path: 'device_profiles/:mac_address' },
    // 更新设备配置
    setDeviceProfilesInfo: { method: 'PUT', path: 'device_profiles/:mac_address' },
    // 设置设备配置模板
    setDeviceProfilesTemp: { method: 'PUT', path: 'device_profiles/:mac_address/set_temp' },
    // 批量应用模板
    applyDeviceProfilesTemp: { method: 'POST', path: 'device_profiles/:mac_address/apply_to' },
    /**
     * 设备升级管理
     * */
    // 设备升级列表
    getDeviceUpgradesList: { method: 'GET', path: 'device_upgrades' },
    // 新增设备升级
    createDeviceUpgrade: { method: 'POST', path: 'device_upgrades', options: { timeout: 600000 } },
    // 获取设备升级详情
    getDeviceUpgradeInfo: { method: 'GET', path: 'device_upgrades/:upgrade_uuid' },
    // 升级指令再次下发
    resendDeviceUpgrade: { method: 'POST', path: 'device_upgrades/:upgrade_uuid/send' }
  };

  var account = {
    /**
     * 账号管理
     * */

    // 账号详情
    getAccountInfo: { method: 'GET', path: 'users/:user_uuid' },
    // 账号列表
    getAccountsList: { method: 'GET', path: 'users' },
    // 账号创建
    createAccount: { method: 'POST', path: 'users' },
    // 账号编辑
    setAccountInfo: { method: 'PUT', path: 'users/:user_uuid' },
    // 账号删除
    removeAccount: { method: 'DELETE', path: 'users/:user_uuid' }
  };

  var device = {
    /**
     * 设备管理
     * */
    // 设备列表
    getDevicesList: { method: 'GET', path: 'devices' },
    // 从GRPC同步设备
    syncDevices: { method: 'GET', path: 'devices_sync' },
    // 设备认领
    bindDevice: { method: 'POST', path: 'devices' },
    // 设备删除
    unbindDevice: { method: 'DELETE', path: 'devices/:device_uuid' },
    // 设备重启
    rebootOrionApp: { method: 'POST', path: 'devices/:device_uuid/reboot_app' },
    // 同步至银行
    syncDeviceToBank: { method: 'POST', path: 'devices/:device_uuid/sync_to_bank' },
    // 设备详情
    getDeviceInfo: { method: 'GET', path: 'devices/:device_uuid' },
    // 设备信息修改
    setDeviceInfo: { method: 'PUT', path: 'devices/:device_uuid' },
    // 设备切换模式
    setDeviceMode: { method: 'POST', path: 'devices/:device_uuid/set_mode' },
    // 清除设备记录
    clearDeviceLogs: { method: 'POST', path: 'devices/:device_uuid/clear_logs' },
    // // 获取设备在线识别的用户组信息
    // getDeviceOnlineGroupsInfo: { method: 'GET', path: 'devices/:device_uuid/online_groups' },
    // 设置设备推流状态
    setDevicePushFliwStatus: { method: 'POST', path: 'devices/:device_uuid/switch_push_flow' },

    // 设备用户列表
    getPeoplesListFromDevice: { method: 'GET', path: 'devices/:device_uuid/offline_people' },
    // 设备添加批量用户
    addPeoplesToDevice: { method: 'POST', path: 'devices/:device_uuid/add_people', options: { timeout: 60000 } },
    // 设备移除批量用户
    removePeoplesFromDevice: { method: 'POST', path: 'devices/:device_uuid/remove_people', options: { timeout: 60000 } },
    // 设备清空用户
    removeAllPeoplesFromDevice: { method: 'POST', path: 'devices/:device_uuid/clear' },
    // 设备添加所有用户
    addAllPeoplesToDevice: { method: 'POST', path: 'devices/:device_uuid/add_all_people', options: { timeout: 60000 } },
    // 设备添加用户组
    addDevicePeopleByGroups: { method: 'POST', path: 'devices/:device_uuid/add_groups', options: { timeout: 60000 } },
    // 设备重设用户组
    resetDevicePeopleByGroups: { method: 'POST', path: 'devices/:device_uuid/replace_groups', options: { timeout: 60000 } },
    // 设备移除用户组
    removeDevicePeopleByGroups: { method: 'POST', path: 'devices/:device_uuid/remove_groups', options: { timeout: 60000 } },
    // 批量设备添加用户
    addPersonToDevices: { method: 'POST', path: 'devices_sync_person/:person_uuid/add_to_devices', options: { timeout: 60000 } },
    // 批量设备移除用户
    removePersonFromDevices: { method: 'POST', path: 'devices_sync_person/:person_uuid/remove_from_devices', options: { timeout: 60000 } },
    // 批量设备重设用户特征
    resentPersonToDevices: { method: 'POST', path: 'devices_sync_person/:person_uuid/reset_to_devices', options: { timeout: 60000 } },

    // 特征下发重试列表
    getDeviceBufferList: { method: 'GET', path: 'devices/:device_uuid/buffer_list' },
    // 特征下发重试删除
    removeDeviceBuffer: { method: 'DELETE', path: 'device_buffers/:buffer_uuid' },
    // 特征下发重试清空
    clearDeviceBuffer: { method: 'POST', path: 'devices/:device_uuid/buffer_clear' },

    // 设备识别记录
    getDevicesIdentifyRecord: { method: 'GET', path: 'device_logs/identify_list' },
    // 设备状态日志
    getDevicesStatusRecord: { method: 'GET', path: 'device_logs/status_list' },
    // 设备上传抓拍照片
    captureUploadImage: { method: 'POST', path: 'device_logs/:mac_address/capture_image' },
    // 设备重设用户特征
    syncDevicesPersonsImages: { method: 'POST', path: 'devices/:person_uuid' },

    // // 模式切换
    recogMode: { method: 'POST', path: 'iots_switch_mode' },
    // 远程控制
    deviceRemoteCtrl: { method: 'POST', path: 'iots/:device_uuid/remote_ctrl' }
  };

  var group = {

    /**
     * 用户群组
     * */
    // 用户群组详情
    getGroupInfo: { method: 'GET', path: 'groups/:group_uuid' },
    // 用户群组列表
    getGroupsList: { method: 'GET', path: 'groups' },
    // 用户群组创建
    createGroup: { method: 'POST', path: 'groups' },
    // 用户群组编辑
    setGroupInfo: { method: 'PUT', path: 'groups/:group_uuid' },
    // 用户群组删除
    removeGroup: { method: 'DELETE', path: 'groups/:group_uuid' },
    // 用户群组用户类表
    getPeoplesListFromGroup: { method: 'GET', path: 'groups/:group_uuid/people' },
    // 用户群组添加用户
    addPeoplesToGroup: { method: 'POST', path: 'groups/:group_uuid/add_people' },
    // 用户群组添加全部用户
    addAllPeoplesToGroup: { method: 'POST', path: 'groups/:group_uuid/add_all_people' },
    // 用户群组删除用户
    removePeoplesFromGroup: { method: 'POST', path: 'groups/:group_uuid/remove_people' },
    // 用户群组清空用户
    removeAllPeoplesFromGroup: { method: 'POST', path: 'groups/:group_uuid/clear_people' },
    // 用户群组通过其他用户组添加用户
    addPeoplesToGroupFromOtherGroups: { method: 'POST', path: 'groups/:group_uuid/add_group' }
  };

  var person = {
    /**
     * 用户管理
     * */
    // 用户详情
    getPersonInfo: { method: 'GET', path: 'people/:person_uuid' },
    // 用户列表
    getPersonsList: { method: 'GET', path: 'people' },
    // 用户创建
    createPerson: { method: 'POST', path: 'people' },
    // 用户编辑
    setPersonInfo: { method: 'PUT', path: 'people/:person_uuid' },
    // 用户删除
    removePerson: { method: 'DELETE', path: 'people/:person_uuid' },
    // 用户上传特征图片
    addImageToPerson: { method: 'POST', path: 'people/:person_uuid/add_image', options: { timeout: 60000 } },
    // 用户特征图片删除
    removeImageFromPeople: { method: 'POST', path: 'people/:person_uuid/remove_image/:image_uuid' },
    // 用户特征图片清除
    removeAllImageFromPerson: { method: 'POST', path: 'people/:person_uuid/clear_image' }
  };

  var face = {
    /**
     * 人脸特征识别
     * */
    // 人脸、活体检测
    getFaceDetection: { method: 'POST', path: 'faces/detection', options: { timeout: 60000 } },
    // 人脸比对
    faceVerification: { method: 'POST', path: 'faces/verification', options: { timeout: 60000 } },
    // 人脸识别
    faceIdentification: { method: 'POST', path: 'faces/identification', options: { timeout: 60000 } },
    // 人脸图片识别
    faceImageIdentification: { method: 'POST', path: 'faces/image_identification', options: { timeout: 60000 } },
    // 识别日志(抓拍日志)
    faceIdentifyLogs: { method: 'GET', path: 'online_identify_logs' },

    /**
     * 根据face_uuid获取详情
     * */
    getFaceInfo: { method: 'GET', path: 'faces/:face_uuid' }
  };

  var qiniu = {
    /**
     * 七牛云
     * */
    // 获取TOKEN
    getQiniuToken: { method: 'GET', path: 'services/uptoken' },
    // 用户上传特征图片
    uploadImageToQiniu: { method: 'POST', path: '', fullUrl: 'https://up.qbox.me', options: { timeout: 60000 } }
  };

  var apiList = Object.assign(admin, account, device, group, person, face, qiniu);

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var VERSON = 'v1'; // 后台版本
  var IS_WX = (typeof wx === 'undefined' ? 'undefined' : _typeof(wx)) === 'object' && typeof wx.request === 'function'; // eslint-disable-line
  // @params 接口名 数据对象 动态参数(可选)
  var http = function http(apiConfig, datas, options, defaultOptions) {
    var axios = defaultOptions.axios;

    return new Promise(function (resolve, reject) {
      var data = Object.assign({}, datas);
      // 去掉空值
      for (var key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          var val = data[key];
          if (val === null || val === '') {
            delete data[key];
          }
        }
      }
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
        // console.log('config', config)
        // 避免headers冲突
      };if (option) {
        config.headers = Object.assign(config.headers, option.headers);
        delete option.headers;
      }
      // console.log('data', datas)
      var configs = Object.assign({}, config, option);
      // 添加請求來源信息
      data.request_channel = 'javascript_sdk';
      var SERVER_URL = defaultOptions.baseURL;
      configs.url = apiConfig.fullUrl || SERVER_URL + '/' + VERSON + '/api/' + apiConfig.path;
      // 非登录接口设置TOKEN
      if (apiConfig.path !== 'sign_in') {
        var TOKEN = defaultOptions.TOKEN,
            AppKey = defaultOptions.AppKey,
            AppSecret = defaultOptions.AppSecret;

        if (TOKEN) {
          configs.headers.Authorization = 'Bearer ' + TOKEN;
        } else if (AppKey) {
          configs.headers.AppKey = AppKey;
          configs.headers.AppSecret = AppSecret;
        } else {
          throw new Error('读取身份信息失败, 请先配置您的AppKey/AppSecret');
        }
      }
      // 兼容小程序环境
      if (IS_WX) {
        configs.header = Object.assign({}, configs.headers);
        delete configs.headers;
        Object.assign(configs, {
          dataType: 'json',
          success: function success(res) {
            var headers = res.header;
            // 带分页的数据从响应头获取分页信息
            var total = headers['x-total-count'];
            if (!isNaN(total - 0)) {
              res.data.total = headers['x-total-count'] - 0;
              res.data.page = headers['x-current-page'] - 0;
              res.data.per_page = headers['x-per-page'] - 0;
            }
            resolve(res);
          },
          fail: reject
        });
        if (configs.method === 'POST' && data.image) {
          configs.filePath = data.image;
          delete data.image;
          configs.name = 'image';
          configs.formData = data;
          wx.uploadFile(configs); // eslint-disable-line
        } else {
          configs.data = data;
          wx.request(configs); // eslint-disable-line
        }
        return;
      }
      if (/post|put/i.test(apiConfig.method)) {
        (function () {
          // 全部使用form表单的格式提交
          configs['Content-Type'] = 'multipart/form-data';
          var nodeEnv = void 0;
          var formData = void 0;
          if (typeof FormData === 'undefined') {
            var __FormData = require('form-data');
            nodeEnv = true;
            formData = new __FormData();
          } else {
            formData = new FormData();
          }

          var _loop = function _loop(_key2) {
            if (Object.hasOwnProperty.call(data, _key2)) {
              if (/_uuids/.test(_key2)) {
                // 包含 uuids的提交格式特殊
                var values = data[_key2];
                if (Array.isArray(values)) {
                  values.forEach(function (val) {
                    return formData.append(_key2 + '[]', val);
                  });
                } else {
                  formData.append(_key2 + '[]', values);
                }
              } else {
                formData.append(_key2, data[_key2]);
              }
            }
          };

          for (var _key2 in data) {
            _loop(_key2);
          }
          configs.data = formData;
          if (nodeEnv) {
            try {
              config.headers = Object.assign(config.headers, formData.getHeaders());
            } catch (e) {}
          }
        })();
      } else if (/get|delete/i.test(apiConfig.method)) {
        // 添加請求來源信息
        configs.params = data;
      }
      axios(configs).then(resolve).catch(reject);
    });
  };

  var IS_WX$1 = (typeof wx === 'undefined' ? 'undefined' : _typeof(wx)) === 'object' && typeof wx.request === 'function'; // eslint-disable-line
  var _axios = void 0;

  var Orion = function () {
    function Orion(option) {
      classCallCheck(this, Orion);

      var options = Object.assign({}, option);
      var baseUrl = options.baseUrl,
          token = options.token,
          AppKey = options.AppKey,
          AppSecret = options.AppSecret;

      if (!IS_WX$1) {
        _axios = options._axios || require('./http/axios.config').default;
      }
      // console.info('baseUrl', baseUrl)
      if (baseUrl && typeof baseUrl !== 'string') {
        throw new Error('解析服务器地址失败，请检查您的服务器地址');
      } else {
        baseUrl = baseUrl || 'https://orion.readsense.cn';
        this.baseUrl = baseUrl.replace(/\/$/, '');
      }
      this.TOKEN = token;
      this.AppKey = AppKey;
      this.AppSecret = AppSecret;
    }

    createClass(Orion, [{
      key: 'setToken',
      value: function setToken(token) {
        if (token && typeof token !== 'string') {
          throw new Error('解析token失败');
        } else {
          this.TOKEN = token;
        }
      }
    }, {
      key: 'setBaseUrl',
      value: function setBaseUrl(baseUrl) {
        if (baseUrl && typeof baseUrl !== 'string') {
          throw new Error('解析服务器地址失败，请检查您的服务器地址');
        } else {
          baseUrl = baseUrl || 'https://orion.readsense.cn';
          this.baseUrl = baseUrl.replace(/\/$/, '');
        }
      }
    }]);
    return Orion;
  }();

  var _loop = function _loop(key) {
    if (Object.hasOwnProperty.call(apiList, key)) {
      Object.defineProperty(Orion.prototype, key, {
        value: function value(data, options) {
          var api = JSON.parse(JSON.stringify(apiList[key]));
          // console.log(222, api, data)
          return http(api, data, options, {
            axios: _axios,
            baseURL: this.baseUrl,
            TIMEOUT: this.TIMEOUT || 10000,
            TOKEN: this.TOKEN,
            AppKey: this.AppKey,
            AppSecret: this.AppSecret
          });
        }
      });
    }
  };

  for (var key in apiList) {
    _loop(key);
  }

  return Orion;

}));
