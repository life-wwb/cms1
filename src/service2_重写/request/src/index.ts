import axios from 'axios'
import { AxiosInstance } from 'axios'
import { WBAxiosRequestConfig } from '../type'

class WBRequest {
  instance: AxiosInstance
  constructor(config: WBAxiosRequestConfig) {
    this.instance = axios.create(config)
    this.instance?.interceptors.request.use(
      config.interceptors?.requestInterceptors,
      config.interceptors?.requextCatchInterceptors
    )
    this.instance?.interceptors.response.use(
      config.interceptors?.responseInterceptors,
      config.interceptors?.responseCatchInterceptors
    )

    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        if (res.data.returnCode === -1001) {
          console.log('响应错误')
        } else {
          return res.data
        }
      },
      (err) => {
        if (err.response.status === 404) {
          console.log('这是404的错误')
        }
        return err
      }
    )
  }

  request<T = any>(config: WBAxiosRequestConfig<T>): Promise<T> {
    if (config.interceptors?.requestInterceptors) {
      config = config.interceptors.requestInterceptors(config)
    }

    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
          return err
        })
    })
  }

  get<T = any>(config: WBAxiosRequestConfig<T>): Promise<T> {
    config.method = 'GET'
    return this.request<T>(config)
  }

  post<T = any>(config: WBAxiosRequestConfig<T>): Promise<T> {
    config.method = 'POST'
    return this.request<T>(config)
  }

  patch<T = any>(config: WBAxiosRequestConfig<T>): Promise<T> {
    config.method = 'PATCH'
    return this.request<T>(config)
  }

  delete<T = any>(config: WBAxiosRequestConfig<T>): Promise<T> {
    config.method = 'DELETE'
    return this.request<T>(config)
  }
}

export default WBRequest
