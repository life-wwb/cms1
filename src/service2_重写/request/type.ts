import { AxiosRequestConfig, AxiosResponse } from 'axios'

interface interceptors<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requextCatchInterceptors?: (err: any) => any
  responseInterceptors?: (res: T) => T
  responseCatchInterceptors?: (err: any) => any
}

export interface WBAxiosRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: interceptors<T>
}
