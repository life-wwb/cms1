<template>
  <div class="user-list">
    <div class="header">
      <slot name="header"
        ><span>{{ title }}</span></slot
      >
      <slot name="handle"></slot>
    </div>
    <el-table :data="listData" border style="width: 100%" v-bind="pageChildren">
      <el-table-column
        type="selection"
        width="60"
        align="center"
        v-if="isShowSelectBox"
      ></el-table-column>
      <el-table-column
        type="index"
        label="序号"
        width="60"
        align="center"
        v-if="isShowIndex"
      ></el-table-column>
      <template v-for="userProp in propList" :key="userProp.prop">
        <el-table-column v-bind="userProp" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="userProp.slotName" :row="scope.row">
              {{ scope.row[userProp.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          v-model:currentPage="pageInfo.currentChange"
          v-model:page-size="pageInfo.pageSize"
          :page-sizes="[10, 20, 30, 40]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="dataCounter"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

export default defineComponent({
  emits: ['update:page'],
  props: {
    listData: {
      type: Array,
      require: true
    },
    propList: {
      type: Array as PropType<any[]>,
      require: true
    },
    isShowIndex: {
      type: Boolean,
      default: true
    },
    isShowSelectBox: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: '列表'
    },
    dataCounter: {
      type: Number
    },
    page: {
      type: Object,
      default: () => ({
        currentChange: 0,
        pageSize: 10
      })
    },
    pageChildren: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    const pageInfo = ref({ ...props.page })

    const handleSizeChange = (size: any) => {
      emit('update:page', { ...props.page, pageSize: size })
    }
    const handleCurrentChange = (newcurrent: any) => {
      emit('update:page', { ...props.page, currentChange: newcurrent })
    }

    return {
      pageInfo,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 5px 10px;
}
.footer {
  display: flex;
  flex-flow: row;
  justify-content: end;
  margin-top: 10px;
}
</style>
