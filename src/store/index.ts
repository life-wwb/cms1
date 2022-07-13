import { createStore, Store, useStore as vuexUseStore } from 'vuex'

import { rootState } from './type'

import loginStore from './login/login'
import systemStore from './main/system/src/main'
import dashboardStore from './dashboaed/dashboard'

import localCache from '@/utils/cache'
import { systemRequest } from '@/service/main/system/systemRequest'

import type { IStoreType } from './type'

const store = createStore<rootState>({
  state() {
    return {
      name: 'wwb',
      age: 21,
      departmentList: [],
      roleList: [],
      entireMenu: []
    }
  },
  mutations: {
    changeDepartmentList(state, list) {
      state.departmentList = list
    },
    changeRoleList(state, list) {
      state.roleList = list
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list
    }
  },
  actions: {
    async getInitDataAction({ commit }) {
      const departmentData = await systemRequest('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentData.data
      commit('changeDepartmentList', departmentList)
      const roleData = await systemRequest('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleData.data
      commit('changeRoleList', roleList)
      const menuData = await systemRequest('/menu/list', {
        offset: 0,
        size: 1000
      })
      const { list: menuList } = menuData.data
      commit('changeEntireMenu', menuList)
    }
  },
  modules: {
    loginStore,
    systemStore,
    dashboardStore
  }
})

export function setVuex() {
  const token = localCache.getCache('token')
  if (token) {
    store.dispatch('getInitDataAction', null, { root: true })
    store.commit('loginStore/setToken', token)
  }
  const userInfo = localCache.getCache('userInfo')
  if (userInfo) {
    store.commit('loginStore/setUserInfo', userInfo)
  }
  const userMenu = localCache.getCache('userMenu')
  if (userMenu) {
    store.commit('loginStore/setUserMenu', userMenu)
  }
  store.dispatch('getInitDataAction')
}

export function useStore(): Store<IStoreType> {
  return vuexUseStore()
}

export default store
