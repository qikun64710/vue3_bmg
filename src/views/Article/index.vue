<template>
  <div class="app-container ArticleList">
    <ul class="ArticleList-status">
      <li>状态</li>
      <li v-for="(item, index) in statusList" :key="index" class="status" :class="{ 'active-status': statusActive === index }" @click="changeStatus(index)">
        {{ item }}
      </li>
    </ul>
    <el-table :data="tableData" border class="ArticleList-table">
      <el-table-column align="center" prop="cover" label="文章封面" width="180">
        <template #default="scope">
          <div class="el-image article-cover">
            <img :src="scope.row?.cover" alt="" srcset="" class="el-image__inner" />
          </div>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="title" label="标题" min-width="160" />
      <el-table-column align="center" prop="tag" label="标签" min-width="180">
        <template #default="scope">
          <div class="tagList">
            <el-tag v-for="(item, index) in scope.row?.tag" :key="index" class="table-tag" type="success">{{ item }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="viewNum" label="浏览量" min-width="100" />
      <el-table-column align="center" prop="likesNum" label="点赞量" min-width="180" />
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
import { reactive, ref } from 'vue'
defineOptions({
  name: 'ArticleIndex'
})
const statusList = reactive(['全部', '公开', '私密', '草稿箱', '回收站'])
const statusActive = ref(0)
function changeStatus(index) {
  statusActive.value = index
}
const tableData = [
  {
    cover: 'https://static.linhaojun.top/aurora/articles/3ec095cd9b7bd3f766166a4db14160c6.jpg',
    title: 'nuxt打包部署问题1',
    tag: ['nuxt', 'vue', 'java', 'TS', 'react'],
    viewNum: 12,
    likesNum: 14,
    createTime: '2023-02-01'
  },
  {
    cover: 'https://static.linhaojun.top/aurora/articles/3ec095cd9b7bd3f766166a4db14160c6.jpg',
    title: 'nuxt打包部署问题2',
    tag: ['nuxt', 'vue'],
    viewNum: 12,
    likesNum: 14,
    createTime: '2023-02-01'
  },
  {
    cover: 'https://static.linhaojun.top/aurora/articles/3ec095cd9b7bd3f766166a4db14160c6.jpg',
    title: 'nuxt打包部署问题3',
    tag: ['nuxt', 'vue'],
    viewNum: 12,
    likesNum: 14,
    createTime: '2023-02-01'
  },
  {
    cover: 'https://static.linhaojun.top/aurora/articles/3ec095cd9b7bd3f766166a4db14160c6.jpg',
    title: 'nuxt打包部署问题4',
    tag: ['nuxt', 'vue'],
    viewNum: 12,
    likesNum: 14,
    createTime: '2023-02-01'
  }
]
</script>
<style lang="scss" scoped>
.ArticleList {
  &-status {
    display: flex;
    li {
      color: #999999;
      margin-right: 40px;
    }
    .status {
      cursor: pointer;
    }
    .active-status {
      color: #333;
      font-weight: 600;
    }
  }
  &-table {
    margin-top: 10px;
    .article-cover {
      position: relative;
      width: 100%;
      height: 90px;
      border-radius: 4px;
      cursor: pointer;
    }
    .tagList {
      display: grid;
      grid-gap: 10px 10px;
      grid-template-columns: auto auto auto;
      padding: 10px;
    }
  }
}
</style>
