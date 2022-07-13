import { Module } from 'vuex'
import { rootState } from '../type'
import { loginState } from './type'
import {
  accountLoginReq,
  userInfoReq,
  userMenuReq
} from '@/service/login/loginRequest'
import localCache from '@/utils/cache'
import router from '@/router'
import { createRoutes } from '@/utils/createRoutes'

import { getUserPermission } from '@/utils/getUserPermission'
import store from '..'

const loginStore: Module<loginState, rootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      useInfo: '',
      userMenu: '',
      userPermission: []
    }
  },
  getters: {},
  mutations: {
    //!!!注意修改state只能是在mutation中进行，不能在actions里执行
    setToken(state, token) {
      state.token = token
    },
    setUserInfo(state, userInfo) {
      state.useInfo = userInfo
    },
    setUserMenu(state, userMenu: Array<any>) {
      // for (const menuOne in userMenu) {
      //   (menuOne as any).icon = (menuOne as any).icon.split('-')[2]
      // }
      userMenu.forEach((item) => {
        item.icon = item.icon.split('-')[2]
      })
      state.userMenu = userMenu
      const useRoutes = createRoutes(userMenu)
      useRoutes.forEach((route) => {
        router.addRoute('main', route)
      })

      const permissions = getUserPermission(userMenu)
      state.userPermission = permissions
    }
  },
  actions: {
    async useLoginAction(context, payload: any) {
      //1用户登录
      const accountLoginResult = await accountLoginReq(payload)
      const { id, token } = accountLoginResult.data
      context.commit('setToken', token)
      localCache.setCache('token', token)
      store.dispatch('getInitDataAction', null, { root: true })
      // console.log(accountLoginResult.data)

      //2获取用户的信息
      const userInfoResult = await userInfoReq(id)
      const userInfo = userInfoResult.data
      console.log(userInfo)
      context.commit('setUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      //3获取用户菜单
      const userMenuResult = await userMenuReq(userInfo.role.id)
      const userMenu = userMenuResult.data
      console.log(userMenu)
      context.commit('setUserMenu', userMenu)
      localCache.setCache('userMenu', userMenu)

      //4跳转到首页
      router.push('/main/system/user')
    },
    phoneLoginAction(context, payload: any) {
      console.log(payload)
    }
  }
}

export default loginStore
