export const pageTableConfig = {
  title: '部门列表',
  propList: [
    { prop: 'name', label: '部门', minWidth: '100' },
    { prop: 'id', label: '部门号', minWidth: '60' },
    { prop: 'parentId', label: '上级部门', minWidth: '120' },
    { prop: 'leader', label: '部门领导', minWidth: '120' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '180',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '180',
      slotName: 'updateAt'
    },
    { prop: 'operation', label: '操作', minWidth: '100', slotName: 'operation' }
  ]
}
