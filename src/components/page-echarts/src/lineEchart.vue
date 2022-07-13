<template>
  <div class="bar-echart">
    <base-echart :option="option"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import baseEchart from '@/base-ui/echart'

const props = defineProps<{
  xData: string[]
  yData: number[]
}>()

const option: any = computed(() => {
  return {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.xData
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.yData,
        type: 'line',
        areaStyle: {}
      }
    ]
  }
})
</script>

<style scoped>
.bar-echart {
  width: 100%;
  height: 100%;
}
</style>
