<template>
  <div class="user">
    <search-form
      :searchFormConfig="searchFormConfig"
      @reSetDataList="reSetDataList"
      @searchDataList="searchDataList"
    >
    </search-form>
    <div class="content">
      <page-table
        :pageTableConfig="pageTableConfig"
        pageName="users"
        ref="pageModel"
        @newDataClick="newDataCreate"
        @editDataClick="editDataValue"
      >
        <template #statu="scope">
          <el-button
            :type="scope.row.enable ? 'primary' : 'danger'"
            size="small"
            plain
            >{{ scope.row['enable'] ? '启用' : '禁用' }}</el-button
          >
        </template>
      </page-table>
    </div>
    <page-form
      ref="pageFormRef"
      :pageFormConfig="pageFormConfigRef"
      :formData="formData"
      pageName="users"
    >
    </page-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import searchForm from '@/components/searchForm'
import pageTable from '@/components/pageTbale/index'
import pageForm from '@/components/pageForm'

import { searchFormConfig } from './config/serch.config'
import { pageTableConfig } from './config/page.config'
import { pageFormConfig } from './config/pageForm.config'

import { pageTableSearch } from '@/hooks/pageTableSearch'
import { usePageForm } from '@/hooks/usePageForm'

export default defineComponent({
  name: 'user',
  components: {
    searchForm,
    pageTable,
    pageForm
  },
  setup() {
    const [pageModel, searchDataList, reSetDataList] = pageTableSearch()

    const newDataHandle = () => {
      const passwordItem = pageFormConfig.IFormItems.find(
        (item) => item.name === 'password'
      )
      passwordItem!.isShow = false
    }
    const editDataHandle = () => {
      const passwordItem = pageFormConfig.IFormItems.find(
        (item) => item.name === 'password'
      )
      passwordItem!.isShow = true
    }
    const [pageFormRef, formData, newDataCreate, editDataValue] = usePageForm(
      newDataHandle,
      editDataHandle
    )

    //给配置中的options赋值,因为发送请求是异步的，在页面搭建出来的时候，store里面的数据还没有拿到
    //引用vuex中的数据，只有在template中或者是computed，watch里面时，才会是响应式的，所以要用computed对配置进行包裹
    const store = useStore()
    const pageFormConfigRef = computed(() => {
      const departmentItem = pageFormConfig.IFormItems.find(
        (item) => item.name === 'departmentId'
      )
      departmentItem!.options = store.state.departmentList.map((item) => {
        return { title: item.name, value: item.id }
      })

      const roleItem = pageFormConfig.IFormItems.find(
        (item) => item.name === 'roleId'
      )
      roleItem!.options = store.state.roleList.map((item) => {
        return { title: item.name, value: item.id }
      })
      return pageFormConfig
    })

    return {
      searchFormConfig,
      pageTableConfig,
      pageModel,
      searchDataList,
      reSetDataList,
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
