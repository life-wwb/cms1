<template>
  <div class="page-count">
    <div class="header">
      <span>{{ title }}</span>
      <el-tooltip
        class="box-item"
        effect="dark"
        :content="tipTitle"
        placement="top"
      >
        <el-icon><lollipop /></el-icon>
      </el-tooltip>
    </div>
    <div class="content">
      <wb-countup :data="count" :otherOptions="options"></wb-countup>
    </div>
    <div class="footer">
      <span>
        {{ title }}
        <wb-countup :data="count" :otherOptions="options"></wb-countup>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import wbCountup from '@/base-ui/wbCountup'
import type { CountUpOptions } from 'countup.js'
const props = withDefaults(
  defineProps<{
    count: number
    title?: string
    tipTitle?: string
    options?: CountUpOptions
  }>(),
  {
    title: '总数量',
    tipTitle: '总数量',
    options: undefined
  }
)
</script>

<style scoped lang="less">
@h: 38px;

.page-count {
  display: flex;
  padding: 0 20px;
  background: white;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0 2px 12px 0 rgb(0 0 0, 0.1);

  height: 130px;
  margin-bottom: 20px;
  overflow: hidden;
  text-align: left;

  .header {
    display: flex;
    height: @h;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    // border: 1px solid red;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .content {
    display: flex;
    margin-left: 0px;
    font-size: 26px;
    color: rgba(0, 0, 0, 0.85);
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .footer {
    display: flex;
    height: @h;
    font-size: 14px;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.85);
    border-top: 1px solid #f0f0f0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
}
</style>
