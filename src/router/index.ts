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
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/Home/index',
        name: 'HomeIndex',
        component: () => import('@/views/Login/index.vue'),
        meta: {
          active: '/Home/index'
        }
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

export function checkRouter(routers, route) {
  let router = null
  for (let index = 0; index < routers.length; index++) {
    const element = routers[index]
    if (route.path === element.path || route.name === element.name) {
      router = element
      break
    } else if (element.children && element.children.length) {
      router = checkRouter(element.children, route)
    }
    if (router) {
      break
    }
  }
  return router
}

export function getActiveMenu(route) {
  // 获取avtiveMent
  const router = checkRouter(routers, route)
  if (router && router.meta) {
    return router.meta.activeMenu
  }
  return null
}

export default router
