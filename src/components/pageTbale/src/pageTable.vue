<template>
  <div class="content">
    <user-list
      :listData="dateList"
      :dataCounter="dataCounter"
      v-bind="pageTableConfig"
      v-model:page="pageInfo"
    >
      <template #handle>
        <div>
          <el-button type="primary" plain v-if="isCreate" @click="newDataClick"
            >新建数据</el-button
          >
          <el-button type="primary" plain circle>
            <el-icon><refresh-right /></el-icon>
          </el-button>
        </div>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #operation="scope">
        <div class="operation">
          <el-button
            type="text"
            v-if="isUpdate"
            @click="editDataClick(scope.row)"
          >
            <el-icon><edit-pen /></el-icon>编辑
          </el-button>
          <el-button
            v-if="isDelete"
            type="text"
            style="color: rgb(226, 120, 120)"
            @click="deleteDataClick(scope.row)"
          >
            <el-icon><delete-filled /></el-icon>删除
          </el-button>
        </div>
      </template>
      <template
        v-for="prop in slotColumn"
        :key="prop.name"
        #[prop.slotName]="scope"
      >
        <template v-if="!!prop.slotName">
          <slot :name="prop.slotName" :row="scope.row"></slot>
        </template>
      </template>
      <template v-if="pageName === 'menu'" #footer>{{}}</template>
    </user-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref } from 'vue'
import userList from '@/base-ui/userList/src/userList.vue'
import { useStore } from '@/store'
import { isFindPermission } from '@/hooks/isFindPermission'

export default defineComponent({
  props: {
    pageTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  emits: ['newDataClick', 'editDataClick'],
  components: {
    userList
  },
  setup(props, { emit }) {
    const store = useStore()

    const pageInfo = ref({
      currentChange: 1,
      pageSize: 10
    })

    const isQuery = isFindPermission(`system:${props.pageName}:query`)
    const isCreate = isFindPermission(`system:${props.pageName}:create`)
    const isUpdate = isFindPermission(`system:${props.pageName}:update`)
    const isDelete = isFindPermission(`system:${props.pageName}:delete`)

    const getSearchDataList = (searchData = {}) => {
      if (!isQuery) {
        return 0
      }
      store.dispatch('systemStore/getUserList', {
        name: props.pageName,
        data: {
          offset: (pageInfo.value.currentChange - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...searchData
        }
      })
    }

    getSearchDataList()
    const searchValue = store.state.systemStore.formValue
    watch(
      pageInfo,
      () => {
        store.commit('systemStore/changePageInfo', pageInfo.value)
        getSearchDataList(searchValue)
      },
      { deep: true }
    )

    const dateList = computed(() =>
      store.getters['systemStore/getPageList'](props.pageName)
    )
    const dataCounter = computed(() =>
      store.getters['systemStore/getDataCounter'](props.pageName)
    )

    const slotColumn = props.pageTableConfig?.propList.filter((item: any) => {
      if (
        item.prop !== 'createAt' &&
        item.prop !== 'updateAt' &&
        item.prop !== 'operation'
      ) {
        return true
      }
    })

    //删除，编辑，新增逻辑的实现
    //1、删除逻辑
    const deleteDataClick = (item: any) => {
      //发送删除的请求
      store.dispatch('systemStore/deleteDataAction', {
        pageName: props.pageName,
        id: item.id
      })

      //删除结束重新请求数据

      store.dispatch('systemStore/getUserList', {
        name: props.pageName,
        data: {
          offset: (pageInfo.value.currentChange - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...searchValue
        }
      })
    }

    //2、编辑，新建数据
    const newDataClick = () => {
      emit('newDataClick')
    }

    const editDataClick = (value: any) => {
      emit('editDataClick', value)
    }

    return {
      dateList,
      dataCounter,
      pageInfo,
      slotColumn,
      isQuery,
      isUpdate,
      isCreate,
      isDelete,
      getSearchDataList,
      deleteDataClick,
      editDataClick,
      newDataClick
    }
  }
})
</script>

<style scoped>
.content {
  padding: 10px;
  border-top: solid 20px #f5f5f5;
}
</style>
