import wbRequest from '@/service'
import { IAccountLoginResult } from '../../type'

export function systemRequest(url: string, data: any) {
  return wbRequest.post<IAccountLoginResult>({
    url: url,
    data: data
  })
}

export function deleteDataRequest(url: string) {
  return wbRequest.delete<IAccountLoginResult>({
    url: url
  })
}

export function createDataRequest(url: string, data: any) {
  return wbRequest.post<IAccountLoginResult>({
    url: url,
    data: data
  })
}

export function editDataReuquest(url: string, data: any) {
  return wbRequest.patch<IAccountLoginResult>({
    url: url,
    data: data
  })
}
