export const pageTableConfig = {
  title: '商品列表',
  propList: [
    { prop: 'id', label: '商品号', minWidth: '80' },
    { prop: 'name', label: '商品名称', minWidth: '100' },
    { prop: 'imgUrl', label: '图片', minWidth: '100', slotName: 'img' },
    { prop: 'oldPrice', label: '旧价格', minWidth: '80' },
    { prop: 'newPrice', label: '新价格', minWidth: '80' },
    { prop: 'status', label: '商品状态', minWidth: '80', slotName: 'statu' },
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
