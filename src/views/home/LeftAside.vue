<template>
    <div class="leftAside">
        <header class="logo">
          <!-- <img :src="LogoImg" /> -->
          <span>后台管理模板</span>
        </header>
        <el-menu
            default-active="2"
            class="el-menu-aside"
            background-color="#545c64"
            active-text-color="#ffd04b"
            text-color="#fff"
        >
            <el-menu-item index="1" @click="router.push('/editArticle')">
                <span>编辑文章</span>
            </el-menu-item>
            <el-menu-item index="2" @click="router.push('/404')">
                <span>404</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script lang="ts" setup>
import { goto } from '@/utils';
import { useRouter } from 'vue-router';
const router = useRouter();

</script>
<style lang="scss" scoped>
@mixin hidden-words {
    overflow: hidden; //超出的文本隐藏
    text-overflow: ellipsis; //溢出用省略号显示
    white-space: nowrap; //溢出不换行
  }
    .leftAside{
        width: 210px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        position: relative;
        transition: all 0.2s;
        border-right: 1px solid #e6e6e6;
        background-color: #545c64;
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
            width: 210px;
            height: calc(100% - 48px);
            overflow-x: hidden;
            overflow-y: auto;
            .el-menu--inline{
                background-color: #1F2D3D!important;
            }
        }
    }
</style>