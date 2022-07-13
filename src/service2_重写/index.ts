import WBRequest from './request/src'
import { TIME_OUT, BASE_URL } from './request/config'

const wbRequest = new WBRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors: (config) => {
      const token = window.localStorage.getItem('token')
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    }
  }
})

export default wbRequest
