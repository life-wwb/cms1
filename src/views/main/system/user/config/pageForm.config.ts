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
      name: 'realname',
      type: 'input',
      label: 'realname',
      placeholder: '请输入真实姓名'
    },
    {
      name: 'password',
      type: 'password',
      label: 'password',
      placeholder: '请输入用户密码',
      isShow: true
    },
    {
      name: 'departmentId',
      type: 'select',
      label: 'department',
      placeholder: '请选择用户部门',
      options: []
    },
    {
      name: 'roleId',
      type: 'select',
      label: 'role',
      placeholder: '请选择用户角色',
      options: []
    },
    {
      name: 'cellphone',
      type: 'input',
      label: 'cellphone',
      placeholder: '请输入用户手机号码'
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
