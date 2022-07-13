//根据不同的环境设置不同的变量： 开发，生产，测试
//process.env.NODE_ENV => 不同的环境会返回不同的值
let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://httpwwb.org/pro'
} else {
  BASE_URL = 'http://httpwwb.org/text'
}

export { TIME_OUT, BASE_URL }
