<template>
  <div class="wb-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbItem" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreadcrumb } from '../type'

export default defineComponent({
  props: {
    breadcrumbItem: {
      type: Array as PropType<IBreadcrumb[]>,
      require: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
