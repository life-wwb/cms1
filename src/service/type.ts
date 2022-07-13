//自定义post请求接收的结果的类型
export interface IAccountLoginResult<T = any> {
  code: number
  data: T
}
