<template>
  <div class="login">
    <div class="total_box">
      <div
        class="box"
        :style="islogin ? { 'margin-left': '-360px' } : ''"
        ref="boxRef"
      >
        <login-panel></login-panel>
        <div class="trans_box">
          <el-button
            v-show="!islogin"
            class="button"
            type="primary"
            @click="loginBox"
            >我想注册</el-button
          >
          <el-button
            v-show="islogin"
            class="button"
            type="primary"
            @click="registerBox"
            >我想登录</el-button
          >
        </div>
        <div class="register_box">
          <h1>请输入您的个人信息</h1>
          <el-form>
            <el-form-item label="用户名" label-width="60px">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="密码" label-width="60px">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="手机号" label-width="60px">
              <el-input></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" class="registerBtn">立即注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginPanel from './cpns/login_panel.vue'

export default defineComponent({
  components: {
    loginPanel
  },
  setup() {
    const boxRef = ref(null)
    let islogin = ref(false)
    const loginBox = () => {
      console.log('btn1被点击了')
      islogin.value = true
    }
    const registerBox = () => {
      console.log('btn2被点击了')
      islogin.value = false
      console.log(islogin)
    }
    return {
      islogin,
      loginBox,
      registerBox,
      boxRef
    }
  }
})
</script>

<style scoped lang="less">
.login {
  display: flex; //flex布局
  justify-content: center; //使子项目水平居中
  align-items: center; //使子项目垂直居中
  width: 100%;
  height: 100%;
  background: url(../../assets/img/login_bg.jpeg);
  .total_box {
    height: 350px;
    width: 700px;
    margin-bottom: 200px;
    padding-left: 10px;
    border: thick double #32a1ce;
    border-radius: 12px;
    overflow: hidden;
    .box {
      height: 100%;
      // margin-left: -360px;
      transition: all 1s;
    }
  }

  .box {
    width: 1050px;
  }
  .login-panel {
    float: left;
  }

  .button {
    width: 200px;
    margin-top: 30px;
    margin-left: 0px;
  }
}
.leftBox {
  margin-left: -350px;
}
.trans_box {
  float: left;
  display: flex; //flex布局
  flex-flow: column;
  justify-content: center; //使子项目水平居中
  align-items: center;
  width: 350px;
  height: 300px;
}

.register_box {
  float: left;
  width: 350px;
  height: 300px;
  padding-top: 20px;

  h1 {
    text-align: center;
  }
}
.registerBtn {
  height: 40px;
  width: 100%;
}
</style>
