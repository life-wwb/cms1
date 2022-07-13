import { loginState } from './login/type'
import { ISystemState } from './main/system/type'
import { IdashboardState } from './dashboaed/type'

export interface rootState {
  name: string
  age: number
  departmentList: any[]
  roleList: any[]
  entireMenu: any[]
}

interface IrootWithModules {
  loginStore: loginState
  systemStore: ISystemState
  dashboardStore: IdashboardState
}

export type IStoreType = rootState & IrootWithModules
