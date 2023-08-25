import { createRouter, createWebHashHistory } from 'vue-router'
import Article from './Article/index'
const basicRouters = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/layout/layout.vue'),
    redirect: '/Home/index',
    meta: { title: '首页' },
    children: [
      {
        path: '/Home/index',
        name: 'HomeIndex',
        component: () => import('@/views/Home/index.vue')
      }
    ]
  }
]
const routers = [
  ...basicRouters,
  ...Article
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: routers
})

export default router
