<template>
  <div class="department">
    <page-table
      :pageTableConfig="pageTableConfig"
      pageName="department"
      @newDataClick="newDataCreate"
      @editDataClick="editDataValue"
    ></page-table>
    <page-form
      pageName="department"
      :pageFormConfig="pageFormConfigRef"
      ref="pageFormRef"
      :formData="formData"
    ></page-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

import pageTable from '@/components/pageTbale'
import pageForm from '@/components/pageForm'

import { pageTableConfig } from './config/page.config'
import { pageFormConfig } from './config/pageForm.config'

import { usePageForm } from '@/hooks/usePageForm'

export default defineComponent({
  name: 'department',
  components: {
    pageTable,
    pageForm
  },
  setup() {
    const [pageFormRef, formData, newDataCreate, editDataValue] = usePageForm()

    const store = useStore()
    const pageFormConfigRef = computed(() => {
      const departmentItem = pageFormConfig.IFormItems.find(
        (item) => item.name === 'parentId'
      )
      departmentItem!.options = store.state.departmentList.map((item: any) => {
        return { title: item.name, value: item.id }
      })
      return pageFormConfig
    })

    return {
      pageTableConfig,
      pageFormConfigRef,
      pageFormRef,
      formData,
      newDataCreate,
      editDataValue
    }
  }
})
</script>

<style scoped></style>
