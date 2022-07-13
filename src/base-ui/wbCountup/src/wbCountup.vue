<template>
  <span ref="countupRef"></span>
</template>

<script setup lang="ts">
import { ref, defineProps, withDefaults, onMounted, watch } from 'vue'
import { CountUp } from 'countup.js'
import type { CountUpOptions } from 'countup.js'

const props = withDefaults(
  defineProps<{
    data: number
    otherOptions?: CountUpOptions
  }>(),
  {
    otherOptions: undefined
  }
)

const defaultOption: CountUpOptions = {
  decimalPlaces: 2, // 保留两位
  duration: 2, // 动画时长
  separator: ',', // 千位分割
  decimal: '.' // 小数分割
}

const countupRef = ref<HTMLElement | null>(null)
const countInstance = ref<CountUp | null>(null)

onMounted(() => {
  createCountUp()
})

const createCountUp = () => {
  if (!countupRef.value) return
  const options = Object.assign(defaultOption, props.otherOptions)
  countInstance.value = new CountUp(countupRef.value, props.data, options)
  startUp()
}

watch(
  () => props.data,
  (newData) => {
    updateUp(newData)
  }
)

const startUp = () => {
  countInstance.value?.start()
}

const updateUp = (data: number) => {
  countInstance.value?.update(data)
}
</script>

<style scoped></style>
