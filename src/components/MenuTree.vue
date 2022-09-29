<template>
  <div>
    <template v-for="item in menuList">
      <el-sub-menu v-if="item && item.child" :key="item && item.id" :index="item && item.id + ''">
        <template #title>
          <i class="icon iconfont" :class="item.icon"></i>
          <span>{{ item.name}}</span>
        </template>
        <menu-tree :menuList="item.child"></menu-tree>
      </el-sub-menu>
      <el-menu-item v-else :index="item && item.id + ''" :key="item && `child${item.id}`" @click="jump(item)">
        <i :class="item.icon" class="icon iconfont"></i>
        <span>{{item.name}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { useGoPath } from '@/utils/useRouter'
  interface MenuList{
    id: string | number,
    name: string,
    icon?: string,
    child?: Array<MenuList>
  }
  defineProps({
    menuList: {
      type: Array as PropType<MenuList[]>
    }
  })
  const jump = (item: any) => {
    useGoPath(item.pathName)
  }
</script>