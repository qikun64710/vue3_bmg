import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './styles/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcon from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.use(router)
for (const iconName in ElIcon) {
  app.component(iconName, ElIcon[iconName])
}
app.mount('#app')
