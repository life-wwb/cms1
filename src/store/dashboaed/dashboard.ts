import { Module } from 'vuex'
import { IdashboardState } from './type'
import { rootState } from '../type'

import {
  getAmountListRes,
  getGoodsCountRes,
  getGoodsSaleRes,
  getGoodsFavorRes,
  getGoodsAddressSaleRes
} from '@/service/dashboard/dashboardRequest'

const dashboardStore: Module<IdashboardState, rootState> = {
  namespaced: true,
  state() {
    return {
      amountList: [],
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeAmmountList(state, list) {
      state.amountList = list
    },
    changeGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getGoodsCount({ commit }) {
      const goodsCount = await getGoodsCountRes()
      commit('changeGoodsCount', goodsCount.data)
      const goodsSale = await getGoodsSaleRes()
      commit('changeGoodsSale', goodsSale.data)
      const goodsFavor = await getGoodsFavorRes()
      commit('changeGoodsFavor', goodsFavor.data)
      const addressSale = await getGoodsAddressSaleRes()
      commit('changeAddressSale', addressSale.data)
      const amountCount = await getAmountListRes()
      commit('changeAmmountList', amountCount.data)
    }
  }
}

export default dashboardStore
