(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('axios')) :
  typeof define === 'function' && define.amd ? define(['axios'], factory) :
  (global = global || self, global.orion = factory(global.axios));
}(this, function (axios) { 'use strict';

  axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;

  var admin = {
    /**
     * 管理员登录登出
     * */
    // 登陆
    login: { method: 'POST', path: 'sign_in' },
    // 登出
    // logout: { method: 'POST', path: 'sign_out' },
    // 查看最新版本
    // check_upgrade: { method: 'GET', path: 'services/check_upgrade' },
    // 设备列表、全部
    // devices_list_all: { method: 'GET', path: 'all_devices' },
    // 修改用户授权信息
    putUserAuth: { method: 'PUT', path: 'user/gate_auth' },
    // 重置账号Secret,同时授权token 会更新
    refreshSecret: { method: 'POST', path: 'user/refresh_token' },
    // 重新同步特征
    syncFeatures: { method: 'POST', path: 'services/sync_feature' },
    /**
     * 获取gRPC进程状态
     * */
    getGrpcStatus: { method: 'GET', path: 'grpc/status' }
    /**
     * 设备配置
     * */
    // 设备配置列表
    // device_profiles_list: { method: 'GET', path: 'device_profiles' },
    // 获取设备配置详情
    // device_profiles_info: { method: 'GET', path: 'device_profiles/:mac_address' },
    // 更新设备配置
    // device_profiles_modify: { method: 'PUT', path: 'device_profiles/:mac_address' },
    /**
     * 设备升级管理
     * */
    // 设备升级列表
    // device_upgrades_list: { method: 'GET', path: 'device_upgrades' },
    // 新增设备升级
    // device_upgrades_add: { method: 'POST', path: 'device_upgrades', options: { timeout: 600000, 'Content-Type': 'multipart/form-data' } },
    // 获取设备升级详情
    // device_upgrades_info: { method: 'GET', path: 'device_upgrades/:upgrade_uuid' },
    // 升级指令再次下发
    // device_upgrades_resend: { method: 'POST', path: 'device_upgrades/:upgrade_uuid/send' },
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
    putAccountInfo: { method: 'PUT', path: 'users/:user_uuid' },
    // 账号删除
    removeAccount: { method: 'DELETE', path: 'users/:user_uuid' }
  };

  var device = {
    /**
     * 设备管理
     * */

    // // 模式切换
    // recog_mode: { method: 'POST', path: 'iots_switch_mode' },
    // // 远程控制
    // remote_ctrl: { method: 'POST', path: 'iots/:device_uuid/remote_ctrl' },

    // 设备列表
    getDevicesList: { method: 'GET', path: 'devices' },
    // 从GRPC同步设备
    syncDevices: { method: 'GET', path: 'devices_sync' },
    // 设备认领
    createDevice: { method: 'POST', path: 'devices' },
    // 同步至银行
    syncDeviceToBank: { method: 'POST', path: 'devices/:device_uuid/sync_to_bank' },
    // 设备详情
    getDeviceInfo: { method: 'GET', path: 'devices/:device_uuid' },
    // 设备信息修改
    putDeviceInfo: { method: 'PUT', path: 'devices/:device_uuid' },
    // 设备切换识别模式
    setDeviceRecogMode: { method: 'POST', path: 'devices/:device_uuid/set_recog_mode' },
    // 获取设备在线识别的用户组信息
    getDeviceOnlineGroupsInfo: { method: 'GET', path: 'devices/:device_uuid/online_groups' },
    // 设备删除
    removeDevice: { method: 'DELETE', path: 'devices/:device_uuid' },
    // 设备添加用户
    createDevicePeoples: { method: 'POST', path: 'devices/:device_uuid/add_people' },
    // 设备移除用户
    removeDevicePeoples: { method: 'POST', path: 'devices/:device_uuid/remove_people' },
    // 设备清空用户
    removeAllDevicePeoples: { method: 'POST', path: 'devices/:device_uuid/clear' },
    // 设备添加用户组
    createDeviceGroup: { method: 'POST', path: 'devices/:device_uuid/add_groups' },
    // 设备重设用户组
    // device_groups_modify: { method: 'POST', path: 'devices/:device_uuid/replace_groups' },
    // 设备移除用户组
    removeDeviceGroup: { method: 'POST', path: 'devices/:device_uuid/remove_groups' },
    // 设备清空用户组
    removeAllDeviceGroup: { method: 'POST', path: 'devices/:device_uuid/clear_groups' },
    // 设备识别记录
    getDevicesIdentifyRecord: { method: 'GET', path: 'device_logs/identify_list' },
    // 设备状态日志
    getDevicesStatusRecord: { method: 'GET', path: 'device_logs/status_list' }
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
    putGroupInfo: { method: 'PUT', path: 'groups/:group_uuid' },
    // 用户群组删除
    removeGroup: { method: 'DELETE', path: 'groups/:group_uuid' },
    // 用户群组添加用户
    addGroupsPeoples: { method: 'POST', path: 'groups/:group_uuid/add_people' },
    // 用户群组删除用户
    removeGroupsPeoples: { method: 'POST', path: 'groups/:group_uuid/remove_people' },
    // 用户群组清空用户
    removeAllGroupPeoples: { method: 'POST', path: 'groups/:group_uuid/clear_people' }
  };

  var people = {
    /**
     * 用户管理
     * */
    // 用户详情
    getPeopleInfo: { method: 'GET', path: 'people/:person_uuid' },
    // 用户列表
    getPeoplesList: { method: 'GET', path: 'people' },
    // 用户创建
    createPeople: { method: 'POST', path: 'people' },
    // 用户编辑
    putPeopleInfo: { method: 'PUT', path: 'people/:person_uuid' },
    // 用户删除
    removePeople: { method: 'DELETE', path: 'people/:person_uuid' },
    // 用户上传特征图片
    addPeopleImage: { method: 'POST', path: 'people/:person_uuid/add_image', options: { timeout: 60000 } },
    // 用户特征图片删除
    removePeopleImage: { method: 'POST', path: 'people/:person_uuid/remove_image/:image_uuid' },
    // 用户特征图片清除
    removeAllPeopleImage: { method: 'POST', path: 'people/:person_uuid/clear_image' },
    // 设备重设用户特征
    syncPeopleDevicesImages: { method: 'POST', path: 'devices_sync_person/:person_uuid' }
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

  var apiList = Object.assign({
    admin: admin,
    account: account,
    device: device,
    group: group,
    people: people,
    face: face
  });

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
      configs.url = SERVER_URL + '/' + VERSON + '/api/' + apiConfig.path;
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
      if (Object.hasOwnProperty.call(apiList, key)) {
        orion[key] = function (data, options) {
          var api = JSON.parse(JSON.stringify(apiList[key]));
          console.log(222, api, data);
          return http(api, data, options, {
            baseURL: orion.baseURL,
            TIMEOUT: orion.TIMEOUT || 10000,
            TOKEN: orion.TOKEN
          });
        };
      }
    };

    for (var key in apiList) {
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

  return orion;

}));
