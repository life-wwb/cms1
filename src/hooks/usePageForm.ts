import { ref } from 'vue'
import pageForm from '@/components/pageForm'

type dataFun = () => void

export function usePageForm(newDataHandle?: dataFun, editDataHandle?: dataFun) {
  const pageFormRef = ref<InstanceType<typeof pageForm>>()
  const formData = ref()
  const newDataCreate = () => {
    formData.value = {}
    if (pageFormRef.value) {
      pageFormRef.value.centerDialogVisible = true
    }
    if (newDataHandle) {
      newDataHandle()
    }
  }

  const editDataValue = (rowData: any) => {
    console.log(rowData)
    formData.value = { ...rowData }
    if (pageFormRef.value) {
      pageFormRef.value.centerDialogVisible = true
    }
    if (editDataHandle) {
      editDataHandle()
    }
  }

  return [pageFormRef, formData, newDataCreate, editDataValue]
}
