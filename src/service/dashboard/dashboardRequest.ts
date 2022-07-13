import wbRequest from '../index'

enum dashboaedAPI {
  amountList = '/goods/amount/list',
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getAmountListRes() {
  return wbRequest.get({
    url: dashboaedAPI.amountList
  })
}

export function getGoodsCountRes() {
  return wbRequest.get({
    url: dashboaedAPI.categoryGoodsCount
  })
}

export function getGoodsSaleRes() {
  return wbRequest.get({
    url: dashboaedAPI.categoryGoodsSale
  })
}

export function getGoodsFavorRes() {
  return wbRequest.get({
    url: dashboaedAPI.categoryGoodsFavor
  })
}

export function getGoodsAddressSaleRes() {
  return wbRequest.get({
    url: dashboaedAPI.addressGoodsSale
  })
}
