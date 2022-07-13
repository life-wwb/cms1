<template>
  <div>404-NOT-FOUND</div>
  <div>你是傻子吗，就知道乱按</div>
  <el-button @click="justBefore">点击返回上一页</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const justBefore = () => {
      router.go(-1)
    }
    return {
      justBefore
    }
  }
})
</script>

<style scoped></style>
