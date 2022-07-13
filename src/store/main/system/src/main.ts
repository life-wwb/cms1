import { rootState } from '@/store/type'
import { Module } from 'vuex'
import { ISystemState } from '../type'
import { systemRequest } from '@/service/main/system/systemRequest'
import { deleteDataRequest } from '@/service/main/system/systemRequest'
import { createDataRequest } from '@/service/main/system/systemRequest'
import { editDataReuquest } from '@/service/main/system/systemRequest'

const systemStore: Module<ISystemState, rootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCounter: 0,
      roleList: [],
      roleCounter: 0,
      goodsList: [],
      goodsCounter: 0,
      menuList: [],
      menuCounter: 0,
      departmentList: [],
      departmentCounter: 0,
      categoryList: [],
      categoryCounter: 0,
      formValue: {},
      pageInfo: {}
    }
  },
  getters: {
    getPageList(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
        // switch (pageName) {
        //   case 'users':
        //     return state.usersList
        //   case 'role':
        //     return state.roleList
        // }
      }
    },
    getDataCounter(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Counter`]
      }
    }
  },
  mutations: {
    changeUsersList(state, list) {
      state.usersList = list
    },
    changeUsersCounter(state, totalCount) {
      state.usersCounter = totalCount
    },
    changeRoleList(state, list) {
      state.roleList = list
    },
    changeRoleCounter(state, totalCount) {
      state.roleCounter = totalCount
    },
    changeGoodsList(state, list) {
      state.goodsList = list
    },
    changeGoodsCounter(state, totalCount) {
      state.goodsCounter = totalCount
    },
    changeMenuList(state, list) {
      state.menuList = list
    },
    changeMenuCounter(state, totalCount) {
      state.menuCounter = totalCount
    },
    changeDepartmentList(state, list) {
      state.departmentList = list
    },
    changeDepartmenCounter(state, totalCount) {
      state.departmentCounter = totalCount
    },
    changeCategoryList(state, list) {
      state.categoryList = list
    },
    changeCategoryCounter(state, totalCount) {
      state.categoryCounter = totalCount
    },
    changeFormValue(state, searchData) {
      state.formValue = searchData
    },
    changePageInfo(state, pageInfo) {
      state.pageInfo = pageInfo
    }
  },
  actions: {
    //获取数据
    async getUserList({ commit }, payload: any) {
      const pageName = payload.name
      const pageUrl = `/${pageName}/list`

      // let pageUrl = ''
      // switch (payload.name) {
      //   case 'users':
      //     pageUrl = '/users/list'
      //     break
      //   case 'role':
      //     pageUrl = '/role/list'
      //     break
      // }
      const pageUserList = await systemRequest(pageUrl, payload.data)
      const { list, totalCount } = pageUserList.data

      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)

      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Counter`, totalCount)
      // switch (payload.name) {
      //   case 'users':
      //     commit('changeUsersList', list)
      //     commit('changeCounter', totalCount)
      //     break
      //   case 'role':
      //     commit('changeRoleList', list)
      //     commit('changeRoleCounter', totalCount)
      //     break
      // }
    },

    //删除数据
    async deleteDataAction(context, payload: any) {
      //拿到请求需要的数据
      const { pageName, id } = payload

      //拼接请求的url，并发送请求
      const url = `/${pageName}/${id}`
      await deleteDataRequest(url)
    },

    //编辑数据
    async editDataAction(context, payload: any) {
      const { pageName, data, id } = payload
      const url = `/${pageName}/${id}`
      await editDataReuquest(url, data)
    },

    //新建数据
    async createDataAction(context, payload: any) {
      const { pageName, data } = payload
      const url = `/${pageName}`
      await createDataRequest(url, data)
    }
  }
}

export default systemStore
