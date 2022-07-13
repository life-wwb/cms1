import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface WBInterceptors<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  responseInterceptors?: (res: T) => T
  responseInterceptorsCatch?: (err: any) => any
}

export interface WBAxiosRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: WBInterceptors<T>
  isShowLoading?: boolean
}
