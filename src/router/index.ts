import { createRouter, createWebHashHistory } from 'vue-router'

const routers = [
  {
    path: '/',
    name: 'article',
    component: () => import('@/views/home.vue'),
    redirect: '/article/index',
    meta: { title: '文章管理' },
    children: [
      {
        path: '/article/index',
        name: 'AboutIndex',
        component: () => import('@/views/Article/index.vue')
      },
      {
        path: '/article/add',
        name: 'AboutAdd',
        component: () => import('@/views/Article/Add.vue')
      },
      {
        path: '/article/tags',
        name: 'AboutTags',
        component: () => import('@/views/Article/Tags.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: routers
})

export default router
