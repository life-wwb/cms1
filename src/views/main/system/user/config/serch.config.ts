import { IForm } from '@/base-ui/types'

export const searchFormConfig: IForm = {
  IFormItems: [
    {
      name: 'id',
      type: 'input',
      label: 'userid',
      placeholder: '请输入用户id'
    },
    {
      name: 'name',
      type: 'input',
      label: 'username',
      placeholder: '请输入用户名'
    },
    {
      name: 'realname',
      type: 'input',
      label: 'realname',
      placeholder: '请输入真实姓名'
    },
    {
      name: 'cellphone',
      type: 'input',
      label: 'cellphone',
      placeholder: '请输入手机号码'
    },
    {
      name: 'enable',
      type: 'select',
      label: 'statu',
      placeholder: '请选择用户用户状态',
      options: [
        { title: '启用', value: 1 },
        { title: '警用', value: 0 }
      ]
    },
    {
      name: 'departmentId',
      type: 'select',
      label: 'department',
      placeholder: '请选择用户部门',
      options: [
        { title: 'IT部门', value: 0 },
        { title: '销售部门', value: 1 },
        { title: '财务部门', value: 2 },
        { title: '管理部门', value: 3 },
        { title: '后勤部门', value: 4 }
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
