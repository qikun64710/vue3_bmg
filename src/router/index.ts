import { Router, createRouter, createWebHashHistory } from 'vue-router'
import Article from './Article/index'
const basicRouters = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue'),
    meta: {},
    children: []
  },
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
        component: () => import('@/views/Login/index.vue')
      }
    ]
  }
]
const routers = [
  ...basicRouters,
  ...Article
]
const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: routers
})

export default router
