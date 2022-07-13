export const pageTableConfig = {
  title: '用户列表',
  propList: [
    { prop: 'id', label: '角色号', minWidth: '100' },
    { prop: 'name', label: '角色名', minWidth: '100' },
    { prop: 'intro', label: '角色权限', minWidth: '100' },
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
