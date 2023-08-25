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
        component: () => import('@/views/Article/index.vue')
      },
      {
        path: '/article/add',
        name: 'ArticleAdd',
        component: () => import('@/views/Article/Add.vue')
      },
      {
        path: '/article/edit',
        name: 'ArticleEdit',
        component: () => import('@/views/Article/Edit.vue')
      },
      {
        path: '/article/tags',
        name: 'ArticleTags',
        component: () => import('@/views/Article/Tags.vue')
      }
    ]
  }
]
export default routers
