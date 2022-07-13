<template>
  <div>
    <wb-form v-bind="searchFormConfig" v-model="formValue">
      <template #button>
        <div class="footer">
          <el-button @click="removeFormValue">
            <el-icon style="margin-right: 3px"><refresh-left /></el-icon>
            重置
          </el-button>
          <el-button type="primary" @click="searchDataList">
            <el-icon style="margin-righ: 3px"><search /></el-icon>
            搜索
          </el-button>
        </div>
      </template>
    </wb-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import WbForm from '@/base-ui'

export default defineComponent({
  props: ['searchFormConfig'],
  emits: ['searchDataList', 'reSetDataList'],
  components: {
    WbForm
  },
  setup(props, { emit }) {
    const formItems = props.searchFormConfig.IFormItems ?? []
    const searchFormValue: any = {}

    for (const item of formItems) {
      searchFormValue[item.name] = ''
    }

    const formValue = ref(searchFormValue)

    const removeFormValue = () => {
      // formValue.value = searchFormValue
      for (const key in searchFormValue) {
        formValue.value[key] = ''
      }
      emit('reSetDataList')
    }

    const searchDataList = () => {
      console.log(123)
      emit('searchDataList', formValue.value)
    }
    return {
      formValue,
      removeFormValue,
      searchDataList
    }
  }
})
</script>

<style scoped>
.form {
  padding-top: 22px;
}

.footer {
  display: flex;
  flex-flow: row;
  justify-content: end;
  padding: 0 50px 10px 0;
}
</style>
