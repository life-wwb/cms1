import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { WBAxiosRequestConfig } from './type'
import { ElLoading } from 'element-plus'

const DEFAULT_SHOW = true

class WBRequest {
  instance: AxiosInstance
  elLoading?: any
  isShowLoading: boolean
  constructor(config: WBAxiosRequestConfig) {
    this.isShowLoading = config.isShowLoading ?? DEFAULT_SHOW
    this.instance = axios.create(config)

    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptors,
      config.interceptors?.requestInterceptorsCatch
    )

    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptors,
      config.interceptors?.responseInterceptorsCatch
    )

    this.instance.interceptors.request.use(
      (config) => {
        if (this.isShowLoading) {
          this.elLoading = ElLoading.service({
            fullscreen: true,
            lock: true,
            text: '正在请求数据',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        this.elLoading?.close()
        if (res.data.returnCode === -1001) {
          console.log('响应错误')
        } else {
          return res.data
        }
      },
      (err) => {
        this.elLoading?.close()
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

    if (config.isShowLoading === false) {
      this.isShowLoading = false
    }

    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }
          this.isShowLoading === DEFAULT_SHOW
          resolve(res)
        })
        .catch((err) => {
          this.isShowLoading === DEFAULT_SHOW
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

  delete<T = any>(config: WBAxiosRequestConfig<T>): Promise<T> {
    config.method = 'DELETE'
    return this.request<T>(config)
  }

  patch<T = any>(config: WBAxiosRequestConfig<T>): Promise<T> {
    config.method = 'PATCH'
    return this.request<T>(config)
  }
}

export default WBRequest
