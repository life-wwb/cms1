<template>
  <div class="nav-menu">
    <div class="title">
      <img src="~@/assets/img/logo.svg" alt="" />
      <span :class="!isFoldMain ? 'context' : 'contextNone'">
        vue项目实战
      </span>
    </div>
    <div class="content">
      <el-menu
        :default-active="menuId + ''"
        :collapse="isFoldMain"
        :collapse-transition="true"
        class="el-menu-vertical"
        background-color="#0c2135"
        text-color="#b7bdc3"
        active-text-color="#0a60bd"
      >
        <template v-for="item in userMenu" :key="item.id">
          <el-sub-menu v-if="item.children" :index="item.id + ''">
            <template #title>
              <el-icon>
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="childItem in item.children" :key="childItem.id">
              <el-menu-item
                :index="childItem.id + ''"
                @click="changeMainPage(childItem.url)"
              >
                {{ childItem.name }}</el-menu-item
              >
            </template>
          </el-sub-menu>
          <el-menu-item v-else :index="item.id + ''">
            <el-icon></el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
// import { useState } from '@/hooks/index'
import { useStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
import { findMenuItem } from '@/utils/createRoutes'

export default defineComponent({
  props: ['isFoldMain'],

  setup() {
    const store = useStore()
    const userMenu = computed(() => store.state.loginStore.userMenu)
    const router = useRouter()
    const route = useRoute()

    const routePath = route.path
    console.log(routePath)

    const menu = findMenuItem(userMenu.value, routePath)
    const menuId = menu.id
    console.log(menuId)

    const changeMainPage = (url: any) => {
      router.push(url)
    }
    // 引用之前封装的hooks，需要把原先的js文件重写为ts文件，找时间再做
    // const loginState = useState('loginStore', ['useInfo', 'userMenu'])
    // console.log(loginState.userMenu.value)
    return {
      userMenu,
      menuId,
      changeMainPage
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  width: 100%;
  height: 100%;

  .title {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 12px 10px 8px 10px;
    width: 210px;
    height: 28px;
    //align-content 在多行容器时起作用
    // align-content: center;
    //align-itmes  在单行容器时起作用
    overflow: hidden;
    align-items: center;

    img {
      width: 20px;
      height: 100%;
      margin: 0 10px;
    }
    .context {
      height: 17px;
      line-height: 17px;
      overflow: hidden !important;
      font-size: 16px;
      font-weight: 700;
      color: white;
    }

    .contextNone {
      display: none;
    }
  }

  .el-menu {
    border-right: none;
  }
  .el-sub-menu {
    background-color: #001529 !important;

    .el-menu-item {
      background-color: #0c2b35 !important;
      padding-left: 50px !important;
    }
  }

  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #77dcee !important;
  }

  ::v-deep .el-sub-menu__title:hover {
    background-color: #001529 !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
