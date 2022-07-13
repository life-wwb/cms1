import { IForm } from '@/base-ui/types'

export const pageFormConfig: IForm = {
  IFormItems: [
    {
      name: 'name',
      type: 'input',
      label: 'roleName',
      placeholder: '请输入角色名'
    },
    {
      name: 'intro',
      type: 'input',
      label: 'introInfo',
      placeholder: '请输入权限介绍'
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
