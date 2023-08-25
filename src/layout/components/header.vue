<template>
  <div class="header">
    <div class="collapse-btn">
      <el-icon v-if="sidebar.collapse"><Expand /></el-icon>
      <el-icon v-else><Fold /></el-icon>
    </div>
    <div class="logo">后台管理系统</div>
    <div class="header-right">
      <div class="header-user-con">
        <el-avatar :size="40" style="margin-right: 20px" :src="circleUrl" />
        <el-dropdown trigger="click">
          <span class="el-dropdown-link" style="color: #fff; cursor: pointer">
            Admin
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>项目仓库</el-dropdown-item>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useSidebarStore } from '@/stores/sidebar'
import { reactive, toRefs } from 'vue'
const state = reactive({
  circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
})
const { circleUrl } = toRefs(state)
const sidebar = useSidebarStore()
</script>
<style lang="scss" scoped></style>
