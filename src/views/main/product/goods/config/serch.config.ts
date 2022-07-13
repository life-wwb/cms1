import { IForm } from '@/base-ui/types'

export const searchFormConfig: IForm = {
  IFormItems: [
    {
      name: 'id',
      type: 'input',
      label: 'goodsid',
      placeholder: '请输入商品号'
    },
    {
      name: 'name',
      type: 'input',
      label: 'goodsname',
      placeholder: '请输入商品名'
    },
    {
      name: 'status',
      type: 'select',
      label: 'statu',
      placeholder: '请选择商品状态',
      options: [
        { title: '上架', value: 1 },
        { title: '下架', value: 0 }
      ]
    },
    {
      name: 'createAt',
      type: 'datePicker',
      label: 'creatDate',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '120px'
}
