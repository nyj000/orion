####  功能概要 
  libOrionPortal，本系统为阅面科技猎户系统api的封装。专注人脸库管理和特征下发到设备，客户可根据自己固有场景，基于libOrionPortal接口自由拓展自己的业务。主要功能为：
* 系统管理
* 用户组管理
* 用户管理（含人脸注册）
* 设备管理
* 设备特征库（含特征下发）
* 人脸识别

* ** [demo](https://nyj000.github.io/orion/examples/example-web.html "demo") **
* ** [详细文档](https://www.showdoc.cc/279122901705252?page_id=1589818278369113 "详细文档") **
* ** [身份验证方式](https://www.showdoc.cc/279122901705252?page_id=1593441887821782 "身份验证方式") **

####  使用示例:
##### npm:

    # 安装
    npm install -S lib-orion-portal
    # 初始化
    const Orion = require('lib-orion-portal')
    var api = new Orion({
    	baseUrl: 'https://orion.readsense.cn', # 默认为猎户服务器地址，可更改为自己部署的服务器地址
    	AppKey: '20d0fbcf66a7419a',
    	AppSecret: 'd7f6e30828654151',
		// token: '9d4272ebe39b451196f39dc0112e35', // token和AppKey、AppSecret任选其一
		// AppKey、AppSecret请联系管理员获取，测试账号仅供测试
    })
    # 使用示例
    var params = {
    	name: 'test',
    }
    api.createPerson(params).then({data} => {
    	console.log(data)
    	if (/^ok$/i.test(data.status)) {
    		// do something
    	}
    }).catch((err) => {
    	console.error(err)
    })
##### javaScript:
    # 引入 
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://unpkg.com/lib-orion-portal/dist/orion.min.js"></script>
    # 初始化
    var api = new Orion({
    	baseUrl: 'https://orion.readsense.cn',  // 默认为猎户服务器地址，可更改为自己部署的服务器地址
    	AppKey: '20d0fbcf66a7419a',
    	AppSecret: 'd7f6e30828654151',
		// token: '9d4272ebe39b451196f39dc0112e35', // token和AppKey、AppSecret任选其一
		// AppKey、AppSecret请联系管理员获取，测试账号仅供测试
    })
   	# 使用示例
   
     var params = {
    	name: 'test',
    }
    api.createPerson(params).then(({data}) => {
    	console.log(data)
    	if (/^ok$/i.test(data.status)) {
    		// do something
    	}
    }).catch((err) => {
    	console.error(err)
    })
	// 调用方法会返回一个Promise对象
<<<<<<< HEAD

####  接口数据返回格式
所有的接口返回的数据都是`json`格式，返回数据中都包含`status`字段，表示请求状态:
- 当`status='ok'` 时，表示无异常，此时还会返回data(内容体)，例如：

      {
			"data": {
				"name": "readsense"
			}
			"status": "ok"
	  }

- 当`status='error'`时, 表示有异常，此时还会返回 errors对象 数组，例如：

=======

####  接口数据返回格式
所有的接口返回的数据都是`json`格式，返回数据中都包含`status`字段，表示请求状态:
- 当`status='ok'` 时，表示无异常，此时还会返回data(内容体)，例如：

      {
			"data": {
				"name": "readsense"
			}
			"status": "ok"
	  }

- 当`status='error'`时, 表示有异常，此时还会返回 errors对象 数组，例如：

>>>>>>> master
 		{
			"errors": [
				{
					"code": 1004,
					"title": "Invalid params",
					"detail": "multipart: NextPart: EOF"
				}
			],
			"status": "error"
	  }
	
