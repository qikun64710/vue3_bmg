import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/article',
        name: 'Article',
        component: () => import( '../views/ArticleManage/index.vue'),
        meta: {
          title: '文章列表'
        }
      },
      {
        path: '/article/edit/:id',
        name: 'EditArticle',
        component: () => import( '../views/ArticleManage/edit.vue'),
        meta: {
          title: '编辑文章'
        }
      },
      {
        path: '/article/add',
        name: 'AddArticle',
        component: () => import( '../views/ArticleManage/add.vue'),
        meta: {
          title: '添加文章'
        }
      },
      {
        path: '/article/detail/:id',
        name: 'ArticleDetail',
        component: () => import( '../views/ArticleManage/detail.vue'),
        meta: {
          title: '文章详情'
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import( '../views/User.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/login/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
