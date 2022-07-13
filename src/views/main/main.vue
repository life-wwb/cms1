<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isFoldMain ? '210px' : '60px'" class="Menus">
        <nav-menu :isFoldMain="!isFoldMain"></nav-menu>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @foldChange="foldChange"></nav-header>
        </el-header>
        <el-main class="page-content">
          <div class="view">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import navMenu from '@/components/nav-menu'
import navHeader from '@/components/nav-hearder/index'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    navMenu,
    navHeader
  },
  setup() {
    const isFoldMain = ref(true)
    const foldChange = (isFold: boolean) => {
      isFoldMain.value = isFold
      console.log(isFoldMain.value)
    }
    return {
      foldChange,
      isFoldMain
    }
  }
})
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
}
.main-content {
  width: 100%;
  height: 100%;
}
.Menus {
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background-color: #001529;
  height: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none;
  transition: width 0.3s linear;

  &::-webkit-scrollbar {
    display: none;
  }
}
.page {
  height: 100%;
}
.page-header {
  // height: 50px;
  color: #333;
  background-color: #fff;
  padding: 0 10px;
}
.page-content {
  height: calc(100% - 50px);
  background-color: #f0f2f5;

  .view {
    background-color: #fff;
  }
}
</style>
