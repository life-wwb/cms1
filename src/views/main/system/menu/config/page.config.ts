export const pageTableConfig = {
  title: '菜单列表',
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '100' },
    { prop: 'type', label: '菜单类型', minWidth: '60' },
    { prop: 'url', label: '菜单url', minWidth: '120' },
    { prop: 'permission', label: '按钮权限', minWidth: '100' },
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
  ],
  pageChildren: {
    rowKey: 'id',
    treeProp: "{ children: 'children'}"
  },
  isShowIndex: false,
  isShowSelectBox: false
}
