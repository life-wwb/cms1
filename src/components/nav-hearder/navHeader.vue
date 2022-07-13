<template>
  <div class="nav-header">
    <el-icon size="30px" ref="elIcon" @click="changeIcon">
      <component :is="myIcon"></component>
    </el-icon>
    <div class="content">
      <span>
        <wb-breadcrumb :breadcrumbItem="breadcrumbItem"></wb-breadcrumb>
      </span>
      <div class="user">
        <user-info :userName="userName"></user-info>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from '@/store'
import userInfo from './userInfo.vue'
import wbBreadcrumb from '@/base-ui/breadcrumb/src/wbBreadcrumb.vue'
import { wbBreadcrumbItem } from '@/utils/createRoutes'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    userInfo,
    wbBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const store = useStore()
    const route = useRoute()
    const myIcon = ref('expand')
    const isFold = ref(true)

    const changeIcon = () => {
      if (isFold.value) {
        isFold.value = !isFold.value
        myIcon.value = 'fold'
      } else {
        isFold.value = !isFold.value
        myIcon.value = 'expand'
      }
      emit('foldChange', isFold.value)
    }

    const userName = computed(() => store.state.loginStore.useInfo.name)
    const userMenu = store.state.loginStore.userMenu
    const breadcrumbItem = computed(() => {
      const path = route.path
      return wbBreadcrumbItem(userMenu, path)
    })

    return {
      myIcon,
      userName,
      breadcrumbItem,
      changeIcon
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  height: 100%;
  display: flex;
  flex-flow: row;
  justify-content: start;
  align-items: center;

  .el-icon {
    cursor: pointer;
  }

  .content {
    flex: 1;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin-left: 10px;
    align-items: center;
  }
}
</style>
