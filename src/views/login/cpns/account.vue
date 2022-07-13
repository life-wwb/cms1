<template>
  <div class="login_account">
    <el-form :rules="rules" :model="account" ref="ElformRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" :show-password="true"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import localCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()

    const ElformRef = ref<InstanceType<typeof ElForm>>()
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    const rules = {
      name: [
        {
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        },
        {
          pattern: /^[a-zA-Z0-9]{8,16}$/,
          message: '用户名必须是8-16位的数字或字母组合',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        },
        {
          pattern: /^[a-zA-Z0-9]{6,16}$/,
          message: '密码格式错误',
          trigger: 'blur'
        }
      ]
    }

    const accountLogin = (isRemPassword: boolean) => {
      ElformRef.value?.validate((valid) => {
        if (valid) {
          if (isRemPassword) {
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          store.dispatch('loginStore/useLoginAction', { ...account })
        }
      })
    }
    return {
      account,
      rules,
      ElformRef,
      accountLogin
    }
  }
})
</script>

<style scoped lang="less">
.login_account {
  margin: 0 auto;
  width: 280px;
}
</style>
