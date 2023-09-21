
import { createApp } from 'vue'
import App from './App.vue'
// 引入路由模块
import router from './router'
// 引入全局组件
import Header from './components/header.vue'
import Container from './components/container.vue'
import Footer from './components/footer.vue'
// 引入axios
import * as API from '@/api';
// 引入状态管理pinia
import store from './store/index,js'

const app = createApp(App)
app.use(store)
app.use(router)

app.component('Header', Header)
app.component('Container', Container)
app.component('Footer', Footer)

app.config.globalProperties.$API = API

app.mount('#app')
