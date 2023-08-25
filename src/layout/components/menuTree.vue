<template>
  <template v-for="item in menuList" :key="item && item.index">
    <el-sub-menu v-if="item.children" :index="item && item.index">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ item.name }}</span>
      </template>
      <menuTree :menu-list="item.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="item && item.index" @click="jumpBtn(item)">{{ item.name }}</el-menu-item>
  </template>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
interface MenuType{
  name: string,
  index: string,
  children?: MenuType[]
}
defineProps({
  menuList: {
    type: Array as () => MenuType[],
    required: true
  }
})
function jumpBtn(item) {
  router.push({
    path: item.index
  })
}
</script>
