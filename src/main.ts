import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//新的配置方式下不需要一个个引用了,但是字体图标需要注册
import { registerApp } from './global'

import { setVuex } from './store'

//全局引入elemnent-pluse
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//对样式进行初始化
import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)

app.use(store)
setVuex()
app.use(router)
app.use(registerApp)
// app.use(ElementPlus)
app.mount('#app')

//elementPlus组件国际化
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

app.use(ElementPlus, {
  locale: zhCn
})

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// wbRequest.request<DataType>({
//   url: 'home/multidata',
//   method: 'GET',
//   // interceptors: {
//   //   requestInterceptors: (config) => {
//   //     console.log('单个请求发送成功的拦截')
//   //     console.log(config);
//   //     console.log('123');
//   //     return config
//   //   },
//   //   responseInterceptors: (res) => {
//   //     console.log('单个请求响应成功的拦截')
//   //     return res
//   //   }
//   // }
// })
