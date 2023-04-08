import { createApp } from 'vue'
import pinia from '@/stores/index'
import App from './App.vue'
import router from './router'
import '@/router/permission.ts'
import './index.css'
import globalComponent from '@/components/index'

const app = createApp(App)
// 注册全局的组件 （对所有需要注册的组件进行遍历并注册）
for (const componentItme in globalComponent) {
  app.component(componentItme, globalComponent[componentItme])
}
app.use(pinia)
app.use(router)

app.mount('#app')
