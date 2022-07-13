<template>
  <div class="role">
    <search-form :searchFormConfig="searchFormConfig"></search-form>
    <page-table
      :pageTableConfig="pageTableConfig"
      pageName="role"
      :listName="listName"
      @newDataClick="newDataCreate"
      @editDataClick="editDataValue"
    ></page-table>
    <page-form
      ref="pageFormRef"
      :pageFormConfig="pageFormConfig"
      :formData="formData"
      :otherInfo="rolePower"
      pageName="role"
    >
      <template #default>
        <el-tree
          ref="eltreeRef"
          :style="{ margin: '0 115px' }"
          :data="menuListRef"
          show-checkbox
          node-key="id"
          @check="treeClick"
          :props="defaultProps"
        />
      </template>
    </page-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import { useStore } from '@/store'

import searchForm from '@/components/searchForm/src/searchForm.vue'
import pageTable from '@/components/pageTbale/src/pageTable.vue'
import pageForm from '@/components/pageForm'

import { searchFormConfig } from './config/serch.config'
import { pageTableConfig } from './config/page.config'

import { pageFormConfig } from './config/pageForm.config'
import { usePageForm } from '@/hooks/usePageForm'
import { getUserMenuId } from '@/utils/getUserPermission'
import { ElTree } from 'element-plus'

export default defineComponent({
  name: 'role',
  components: {
    searchForm,
    pageTable,
    pageForm
  },
  setup() {
    const listName = '角色列表'
    const eltreeRef = ref<InstanceType<typeof ElTree>>()

    const setRoleId = () => {
      const roleIdList = getUserMenuId((formData as any).value.menuList)
      console.log(roleIdList)
      nextTick(() => {
        eltreeRef.value?.setCheckedKeys(roleIdList, false)
      })
    }
    const [pageFormRef, formData, newDataCreate, editDataValue] = usePageForm(
      undefined,
      setRoleId
    )
    const store = useStore()
    const menuListRef = computed(() => store.state.entireMenu)

    const defaultProps = {
      children: 'children',
      label: 'name'
    }

    const rolePower = ref({})
    const treeClick = (data1: any, data2: any) => {
      const { checkedKeys, halfCheckedKeys } = data2
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      rolePower.value = { menuList }
    }

    return {
      listName,
      searchFormConfig,
      pageTableConfig,
      pageFormConfig,
      pageFormRef,
      formData,
      newDataCreate,
      editDataValue,
      menuListRef,
      defaultProps,
      rolePower,
      eltreeRef,
      treeClick
    }
  }
})
</script>

<style scoped></style>
