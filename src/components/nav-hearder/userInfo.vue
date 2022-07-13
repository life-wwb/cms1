<template>
  <div class="userInfo">
    <el-dropdown>
      <div class="user">
        <el-avatar
          :size="30"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <span class="el-dropdown-link">
          {{ userName }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>我的消息</el-dropdown-item>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item divided>
            <el-button type="text" @click="hangdleExitClick"
              >退出登录</el-button
            >
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import localCache from '@/utils/cache'
import { useRouter } from 'vue-router'

export default defineComponent({
  props: ['userName'],
  setup() {
    const router = useRouter()
    const hangdleExitClick = () => {
      localCache.deleteCache('token')
      router.push('/main')
    }
    return {
      hangdleExitClick
    }
  }
})
</script>

<style scoped lang="less">
.user {
  cursor: pointer;
  display: flex;
  flex-flow: row;
  justify-content: start;
  align-items: center;

  .el-avatar {
    margin-right: 5px;
  }
}
</style>
