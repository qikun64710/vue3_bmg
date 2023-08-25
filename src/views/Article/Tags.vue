<template>
  <div class="app-container ArticleTags">
    <div class="ArticleTags-Operate">
      <el-button type="primary" :icon="Plus" plain>新增</el-button>
      <el-button type="danger" :icon="Delete" plain>删除</el-button>
      <div class="ArticleTags-Operate-Right">
        <el-input v-model="input" class="rightInput" placeholder="请搜索" :prefix-icon="Search" />
        <el-button class="rightButton" type="primary" :icon="Search">搜索</el-button>
      </div>
    </div>
    <el-table :data="tableData" border class="ArticleTags-table">
      <el-table-column type="selection" width="55" />
      <el-table-column align="center" prop="tagName" label="标签名" min-width="180" />
      <el-table-column align="center" prop="articleNum" label="文章量" min-width="180" />
      <el-table-column align="center" prop="createTime" label="发表时间" min-width="180" />
      <el-table-column align="center" label="操作" width="120">
        <template #default>
          <el-button type="primary" size="small" link>编辑</el-button>
          <el-button type="danger" size="small" link>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { Delete, Search, Plus } from '@element-plus/icons-vue'
import { ref } from 'vue'
defineOptions({
  name: 'ArticleTags'
})
const tableData = [
  {
    tagName: 'java',
    articleNum: 10,
    createTime: '202302-03'
  },
  {
    tagName: 'Nuxt',
    articleNum: 10,
    createTime: '202302-03'
  }
]
const input = ref('')
</script>
<style lang="scss" scoped>
.ArticleTags {
  &-Operate {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    &-Right {
      margin-left: auto;
      display: flex;
      .rightInput {
        width: 200px;
      }
      .rightButton {
        margin-left: 10px;
      }
    }
  }
}
</style>
