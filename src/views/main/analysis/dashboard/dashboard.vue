<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in amountCountList" :key="item.amount">
        <el-col :span="6">
          <page-count
            :count="item.number2"
            :title="item.title"
            :tipTitle="item.tips"
            :options="item.amount === 'saleroom' ? options : undefined"
          ></page-count>
        </el-col>
      </template>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="7">
        <wb-card title="分类商品数量">
          <pie-echart :data="categorygoodsCountData"></pie-echart>
        </wb-card>
      </el-col>
      <el-col :span="10">
        <wb-card title="不同城市商品数量">
          <map-echart :data="addressGoodsCount"></map-echart>
        </wb-card>
      </el-col>
      <el-col :span="7">
        <wb-card title="分类商品数量">
          <bar-echart v-bind="goodsSaleRef"></bar-echart>
        </wb-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <wb-card title="分类商品的销量">
          <line-echart v-bind="goodsFavorRef"></line-echart>
        </wb-card>
      </el-col>
      <el-col :span="12">
        <wb-card title="分类商品的收藏">
          <text-echart></text-echart>
        </wb-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import wbCard from '@/base-ui/card/src/wbCard.vue'
import pageCount from '@/components/page-count'
import {
  pieEchart,
  barEchart,
  lineEchart,
  textEchart,
  mapEchart
} from '@/components/page-echarts/index'

export default defineComponent({
  name: 'dashboard',
  components: {
    wbCard,
    pieEchart,
    barEchart,
    lineEchart,
    textEchart,
    mapEchart,
    pageCount
  },
  setup() {
    const store = useStore()
    store.dispatch('dashboardStore/getGoodsCount')

    //计数器数据
    const amountCountList = computed(
      () => store.state.dashboardStore.amountList
    )

    const options: any = {
      prefix: '￥'
    }

    // 饼图数据
    const categorygoodsCountData = computed(() =>
      store.state.dashboardStore.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    )

    //柱形图数据
    const goodsSaleRef = computed(() => {
      const xData: string[] = []
      const yData: number[] = []
      for (const item of store.state.dashboardStore.categoryGoodsFavor) {
        xData.push(item.name)
        yData.push(item.goodsFavor)
      }
      const goodsSale = {
        xData: xData,
        yData: yData
      }
      return goodsSale
    })

    //折线图数据
    const goodsFavorRef = computed(() => {
      const xData: string[] = []
      const yData: number[] = []
      for (const item of store.state.dashboardStore.categoryGoodsSale) {
        xData.push(item.name)
        yData.push(item.goodsCount)
      }
      const goodsSale = {
        xData: xData,
        yData: yData
      }
      return goodsSale
    })

    //地图数据
    const addressGoodsCount = computed(() =>
      store.state.dashboardStore.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    )

    console.log(addressGoodsCount.value)
    return {
      categorygoodsCountData,
      goodsSaleRef,
      goodsFavorRef,
      addressGoodsCount,
      amountCountList,
      options
    }
  }
})
</script>

<style lang="less" scoped>
.dashboard {
  background-color: #f5f5f5;
}
.content-firstrow {
  margin-bottom: 20px;
}

.content-row {
  margin: 20px 0;
}
</style>
