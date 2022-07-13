export const pageTableConfig = {
  title: '用户列表',
  propList: [
    { prop: 'id', label: '员工号', minWidth: '100' },
    { prop: 'name', label: '用户名', minWidth: '100' },
    { prop: 'realname', label: '真实姓名', minWidth: '100' },
    { prop: 'enable', label: '状态', minWidth: '100', slotName: 'statu' },
    { prop: 'cellphone', label: '手机号码', minWidth: '100' },
    { prop: 'departmentId', label: '部门', minWidth: '100' },
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
