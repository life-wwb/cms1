<template>
  <div class="goods">
    <search-Form
      :searchFormConfig="searchFormConfig"
      @reSetDataList="reSetDataList"
      @searchDataList="searchDataList"
    ></search-Form>
    <page-table
      :pageTableConfig="pageTableConfig"
      pageName="goods"
      ref="pageModel"
    >
      <template #img="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          preview-teleported
        />
      </template>
      <template #statu="scope">
        <el-button
          :type="scope.row['statu'] ? 'danger' : 'primary'"
          size="small"
          plain
          >{{ scope.row['statu'] ? '下架' : '上架' }}</el-button
        >
      </template>
    </page-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import pageTable from '@/components/pageTbale'
import searchForm from '@/components/searchForm'

import { pageTableConfig } from './config/page.config'
import { searchFormConfig } from './config/serch.config'

import { pageTableSearch } from '@/hooks/pageTableSearch'

export default defineComponent({
  name: 'goods',
  components: {
    pageTable,
    searchForm
  },
  setup() {
    const [pageModel, searchDataList, reSetDataList] = pageTableSearch()
    return {
      pageTableConfig,
      searchFormConfig,
      pageModel,
      searchDataList,
      reSetDataList
    }
  }
})
</script>

<style scoped></style>
