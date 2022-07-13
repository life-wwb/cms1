import axios from 'axios'

axios.request({
  method: 'GET',
  url: ''
})

axios
  .get('http://httpbin.org/get', {
    params: {
      name: 'wwblife',
      age: 21
    }
  })
  .then((res) => {
    console.log(res.data)
  })

axios.post('http://httpbin.org/post').then((res) => {
  console.log(res.data)
})

//axios 基本配置
//default 默认所有的axios都会配置的信息
axios.defaults.baseURL = 'http://httpbin.org'
// axios.defaults.timeout = 1000 //默认过了多久就超时

axios
  .get('/get', {
    params: {
      name: 'wwblife',
      age: 21
    }
  })
  .then((res) => {
    console.log(res.data)
  })

axios.post('/post').then((res) => {
  console.log(res.data)
})

//axios.all
axios.all([axios.get('/get'), axios.post('/post')]).then((res) => {
  console.log(res[0].data)
  console.log(res[1].data)
})

//拦截axios
//拦截请求 fn1 请求发送成功执行，fn2 请求发送失败执行
axios.interceptors.request.use(
  (res) => {
    console.log('请求发送成功')
    return res
  },
  (eer) => {
    console.log('请求发送错误')
    return eer
  }
)

//拦截响应
// axios.interceptors.response.use
