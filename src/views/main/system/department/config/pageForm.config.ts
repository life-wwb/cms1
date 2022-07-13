import { IForm } from '@/base-ui/types'

export const pageFormConfig: IForm = {
  IFormItems: [
    {
      name: 'name',
      type: 'input',
      label: 'username',
      placeholder: '请输入用户名'
    },
    {
      name: 'leader',
      type: 'input',
      label: 'leaderName',
      placeholder: '请输入领导名'
    },
    {
      name: 'parentId',
      type: 'select',
      label: 'parentdep',
      placeholder: '请选择上级部门',
      options: []
    }
  ],
  colLayout: {
    span: 24
  },
  labelWidth: '100px',
  itemStyle: {
    padding: '10px 20px'
  }
}
