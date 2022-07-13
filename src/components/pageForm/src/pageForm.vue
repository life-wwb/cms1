<template>
  <div class="page-form">
    <el-dialog
      v-model="centerDialogVisible"
      title="新建用户"
      width="30%"
      destroy-on-close
      center
    >
      <wb-form v-bind="pageFormConfig" v-model="formValue"></wb-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleDataClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import wbForm from '@/base-ui/index'
import { useStore } from '@/store'

export default defineComponent({
  props: {
    pageFormConfig: {
      type: Object,
      require: true
    },
    formData: Object,
    pageName: {
      type: String,
      require: true
    },
    otherInfo: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    wbForm
  },
  setup(props) {
    const centerDialogVisible = ref(false)

    const formValue = ref<any>({})

    watch(
      () => props.formData,
      (newvalue) => {
        for (const item of props.pageFormConfig?.IFormItems) {
          formValue.value[item.name] = newvalue![item.name]
        }
      }
    )

    //确定按钮的逻辑
    const store = useStore()
    const searchValue = store.state.systemStore.formValue
    const pageInfo = store.state.systemStore.pageInfo
    const handleDataClick = () => {
      centerDialogVisible.value = false
      if (Object.keys(props.formData!).length) {
        const itemId = props.formData!.id
        const pageName = props.pageName
        const newData = formValue.value

        store.dispatch('systemStore/editDataAction', {
          id: itemId,
          pageName: pageName,
          data: { ...newData, ...props.otherInfo }
        })
      } else {
        const pageName = props.pageName
        const newData = formValue.value

        store.dispatch('systemStore/createDataAction', {
          pageName: pageName,
          data: { ...newData, ...props.otherInfo }
        })
      }

      //新建或者编辑结束后重新请求数据
      store.dispatch('systemStore/getUserList', {
        name: props.pageName,
        data: {
          offset: (pageInfo.currentChange - 1) * pageInfo.pageSize,
          size: pageInfo.pageSize,
          ...searchValue
        }
      })
    }
    return {
      centerDialogVisible,
      formValue,
      handleDataClick
    }
  }
})
</script>

<style scoped></style>
