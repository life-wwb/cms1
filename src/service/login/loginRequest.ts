import wbRequest from '../index'
import { IAccount } from './type'
import { IAccountLoginResult } from '../type'
import { ILoginData } from './type'
type ILoginMenu = Array<any>

enum loginAPI {
  login = '/login',
  userInfo = '/users/',
  userMenu = '/role/'
}

export function accountLoginReq(account: IAccount) {
  return wbRequest.post<IAccountLoginResult<ILoginData>>({
    url: loginAPI.login,
    data: account
  })
}

export function userInfoReq(id: number) {
  return wbRequest.get<IAccountLoginResult>({
    url: loginAPI.userInfo + id
  })
}

export function userMenuReq(id: number) {
  return wbRequest.get<IAccountLoginResult<ILoginMenu>>({
    url: loginAPI.userMenu + id + '/menu'
  })
}
