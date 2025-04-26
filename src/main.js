import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import locale from 'element-plus/dist/locale/zh-cn'
import 'element-plus/dist/index.css'
import router from '@/router'


const app = createApp(App)
app.use(router)
app.use(ElementPlus,{locale})
app.mount('#app')
