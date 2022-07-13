export interface IFormItem {
  name: string
  type: any
  label?: string
  rules?: any[]
  placeholder?: any
  //针对select中的选项
  options?: any[]
  // 针对其他可能会传入的属性
  otherOptions?: any
  isShow?: boolean
}

export interface IForm {
  IFormItems: IFormItem[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
