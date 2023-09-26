<template>
  <el-menu
    class="sidebar-container"
    :default-active="activeMenu"
  >
    <menuTree :menu-list="menuList" />
  </el-menu>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getActiveMenu } from '@/router/index'
import menuTree from './menuTree.vue'
interface MenuType{
  name: string,
  index: string,
  children?: MenuType[]
}
const activeMenu = computed(() => {
  const route = useRoute()
  const activeMenu = getActiveMenu(route)
  if (activeMenu) {
    return activeMenu
  }
  return route.path
})
const menuList: MenuType[] = [
  {
    name: '系统首页',
    index: '/'
  },
  {
    name: '文章管理',
    index: '/article',
    children: [
      {
        name: '发布文章',
        index: '/article/add'
      },
      {
        name: '文章列表',
        index: '/article/index'
      },
      {
        name: '标签管理',
        index: '/article/tags'
      }
    ]
  }
]
</script>
