const orion = require('../lib/orion')
console.log(orion)

var api = orion.init('http://114.80.100.145:3030')
console.log(api)
api.test()
var data = {account: 'test', password: 12345678}
// console.log(1111111111111, formData.getHeaders())
api.login(data).then((res) => {
  console.log('-------- 成功了')
  console.log(res.data)
  api.groupsList({}).then(function(res) {
    console.log('-------- 成功了')
  console.log(res.data)
  }).catch((err) => {
    try {
      console.error(err.response.data, err.config.data)
    } catch {
      console.error(err)
    }
  })
}).catch((err) => {
  try {
    console.error(err.response.data, err.config.data)
  } catch {
    console.error(err)
  }
})