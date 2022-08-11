import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/index.scss'
import App from './App.vue'
import router from './router'
import service from './api/api'
// 引入vuex
import store from './vuex/index'
const app = createApp(App)
app.config.globalProperties.$axios = service
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
