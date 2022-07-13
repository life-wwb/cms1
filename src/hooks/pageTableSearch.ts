import { ref } from 'vue'
import pageTable from '@/components/pageTbale'
import { useStore } from '@/store'

export function pageTableSearch() {
  const store = useStore()
  const pageModel = ref<InstanceType<typeof pageTable>>()
  const searchDataList = (searchData: any) => {
    console.log(searchData)
    store.commit('systemStore/changeFormValue', searchData)
    pageModel.value?.getSearchDataList(searchData)
  }
  const reSetDataList = () => {
    pageModel.value?.getSearchDataList()
  }

  return [pageModel, searchDataList, reSetDataList]
}
