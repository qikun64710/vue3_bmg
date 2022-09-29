<template>
    <div class="leftAside">
        <header class="logo">
          <!-- <img :src="LogoImg" /> -->
          <span>后台管理模板</span>
        </header>
        <el-menu 
            class="el-menu-vertical-demo" 
            background-color="#282c34"
            active-text-color='#1890ff'
            text-color='#ffffff'
        >
            <menu-tree :menuList="menuList" />
        </el-menu>
    </div>
</template>
<script lang="ts" setup>
import MenuTree from "@/components/MenuTree.vue";
import { reactive } from "vue"

const menuList = reactive([
    {
        name: '首页',
        id: 0
    },
    {
        name: '文章管理',
        id: 1,
        child: [
            {
              id: 2,
              name: '文章列表',
              pathName: 'Article'
            },
            {
              id: 3,
              name: '添加文章',
              pathName: 'AddArticle'
            },
            {
              id: 4,
              name: '草稿箱',
              pathName: ''
            },
            {
              id: 5,
              name: '文章归类',
              pathName: ''
            },
        ]
    },
    {
        id: 6,
        name: '标签管理',
        path: ''
    }
])

</script>
<style lang="scss" scoped>
@mixin hidden-words {
    overflow: hidden; //超出的文本隐藏
    text-overflow: ellipsis; //溢出用省略号显示
    white-space: nowrap; //溢出不换行
  }
    .leftAside{
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        transition: all 0.2s;
        background-color: #282c34;
        color: #fff;
        .logo {
            padding: 16px;
            display: flex;
            align-items: center;
            @include hidden-words;

            img {
            width: 32px;
            height: 32px;
            }

            span {
            font-size: 18px;
            font-weight: 600;
            padding-left: 10px;
            }
        }
        .el-menu-aside{
            height: calc(100% - 48px);
            overflow-x: hidden;
            overflow-y: auto;
        }
    }
</style>