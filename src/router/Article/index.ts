const routers = [
  {
    path: '/',
    name: 'article',
    component: () => import('@/layout/layout.vue'),
    redirect: '/article/index',
    meta: { title: '文章管理' },
    children: [
      {
        path: '/article/index',
        name: 'ArticleIndex',
        component: () => import('@/views/Article/index.vue'),
        meta: {
          active: '/article/index'
        }
      },
      {
        path: '/article/add',
        name: 'ArticleAdd',
        component: () => import('@/views/Article/Add.vue'),
        meta: {
          active: '/article/add'
        }
      },
      {
        path: '/article/edit',
        name: 'ArticleEdit',
        component: () => import('@/views/Article/Edit.vue'),
        meta: {
          active: '/article/edit'
        }
      },
      {
        path: '/article/tags',
        name: 'ArticleTags',
        component: () => import('@/views/Article/Tags.vue'),
        meta: {
          active: '/article/tags'
        }
      }
    ]
  }
]
export default routers
