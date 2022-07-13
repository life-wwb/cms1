<template>
  <div class="base-echart">
    <div
      class="my-echart"
      ref="myEchartRef"
      :style="{ width: width, height: height }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
import { EChartsOption } from 'echarts'

import { registerEchart } from '../hooks'

const props = withDefaults(
  defineProps<{
    option: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)
const myEchartRef = ref<HTMLElement>()
onMounted(() => {
  const { echartInstance, setOption } = registerEchart(myEchartRef.value!)
  echartInstance

  watchEffect(() => {
    setOption(props.option)
  })
})
</script>

<style scoped>
.base-echart {
  width: 100%;
}
</style>
