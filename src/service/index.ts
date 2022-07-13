import WBRequest from './request'
import { TIME_OUT, BASE_URL } from './request/config'

import localCache from '@/utils/cache'
const wbRequest = new WBRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  //自定义拦截器
  interceptors: {
    requestInterceptors: (config) => {
      const token = localCache.getCache('token')
      // store.dispatch('getInitDataAction', null, { root: true })
      // console.log(token)
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }

      return config
    },
    requestInterceptorsCatch: (err) => {
      return err
    },
    responseInterceptors: (res) => {
      return res
    },
    responseInterceptorsCatch: (err) => {
      return err
    }
  }
})

export default wbRequest
