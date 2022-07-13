export const pageTableConfig = {
  title: '商品类别列表',
  propList: [
    { prop: 'name', label: '商品类型', minWidth: '100' },
    { prop: 'id', label: '类型号', minWidth: '60' },
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
