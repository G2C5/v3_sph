// 引入路由API
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// 引入路由配置
import routes from './routes'


// 创建路由
const router = createRouter({
    // 路由模式
    history: createWebHashHistory(),
    // 路由配置
    routes
})


// 前置路由守卫
router.beforeEach((to, from, next) => {
    next()
})


export default router