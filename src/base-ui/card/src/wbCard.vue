<template>
  <div class="wb-card">
    <el-card>
      <template #header>
        <div class="card-title">
          <span>{{ title }}</span>
        </div>
      </template>
      <div class="card-item">
        <slot></slot>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.wb-card {
  &:deep(.el-card__header) {
    padding: 10px 10px !important;
  }

  &:deep(.el-card__body) {
    padding: 10px 10px !important;
  }
}

.card-item {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.card-item {
  margin-bottom: 10px;
}
</style>
