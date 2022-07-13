<template>
  <div class="login_phone">
    <el-form :rules="rules" :model="phoneNum" ref="phoneRef">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="phoneNum.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="num">
        <div class="primary">
          <el-input v-model="phoneNum.num"></el-input>
          <el-button class="btn">点击发送验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const phoneRef = ref<InstanceType<typeof ElForm>>()

    const phoneNum = reactive({
      phone: '',
      num: ''
    })

    const rules = {
      phone: [
        {
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        },
        {
          pattern: /^[0-9]{11}$/,
          message: '请输入正确的手机号',
          trigger: 'blur'
        }
      ],
      num: [
        {
          required: true,
          message: '请输入验证码',
          trigger: 'blur'
        },
        {
          pattern: /^[0-9a-zA-Z]{4}$/,
          message: '请输入验证码正确格式',
          trigger: 'blur'
        }
      ]
    }
    const phoneLogin = () => {
      phoneRef.value?.validate((valid) => {
        if (valid) {
          store.dispatch('loginStore/phoneLoginAction', { ...phoneNum })
        }
      })
    }
    return {
      phoneRef,
      phoneNum,
      rules,
      phoneLogin
    }
  }
})
</script>

<style scoped>
.login_phone {
  margin: 0 auto;
  width: 280px;
}

.primary {
  display: flex;
}
.btn {
  margin-left: 5px;
}
</style>
