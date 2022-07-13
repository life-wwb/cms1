<template>
  <div class="login-panel">
    <h1 class="title">后台管理信息系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon :size="14" class="icon"><avatar /></el-icon>
            <span class="tab">账号密码登录</span>
          </span>
        </template>
        <account ref="accountRef"></account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon :size="14" class="icon"><iphone /></el-icon>
            <span class="tab">手机登录</span>
          </span>
        </template>
        <phone ref="phoneRef"></phone>
      </el-tab-pane>
    </el-tabs>
    <div class="panel_buttom">
      <el-checkbox
        v-model="isRemPasword"
        label="记住密码"
        size="large"
      ></el-checkbox>
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>
    <el-button type="primary" class="loginBtn" @click="loginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import account from './account.vue'
import phone from './phone.vue'

export default defineComponent({
  components: {
    account,
    phone
  },

  setup() {
    const isRemPasword = ref(true)
    const accountRef = ref<InstanceType<typeof account>>()
    const phoneRef = ref<InstanceType<typeof phone>>()
    const currentTab = ref('account')

    const loginClick = () => {
      console.log('点击了' + currentTab.value + '登录')
      if (currentTab.value === 'account') {
        accountRef.value?.accountLogin(isRemPasword.value)
      } else {
        phoneRef.value?.phoneLogin()
      }
    }
    return {
      isRemPasword,
      accountRef,
      currentTab,
      phoneRef,
      loginClick
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 350px;
  height: 300px;
  .title {
    text-align: center;
  }
}

.tab {
  margin-left: 3px;
  vertical-align: middle;
}

.icon {
  vertical-align: middle;
}

.panel_buttom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.loginBtn {
  height: 40px;
  width: 100%;
}
</style>
