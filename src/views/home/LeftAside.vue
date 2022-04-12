<template>
    <div class="leftAside">
        <h3 class="vben-layout-menu-logo">后台管理</h3>
        <el-menu
            default-active="2"
            class="el-menu-aside"
            background-color="#324554"
            active-text-color="#ffd04b"
            text-color="#fff"
        >
            <el-menu-item index="2">
            <span>编辑文章</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
    .leftAside{
        width: 100%;
        height: 100%;
        .vben-layout-menu-logo{
            height: 48px;
            padding: 10px 4px 10px 10px;
            // text-align: center;
            line-height: 48px;
            color: #fff;
        }
        .el-menu-aside{
            width: 211px;
            height: calc(100% - 48px);
            .el-menu--inline{
                background-color: #1F2D3D!important;
            }
        }
    }
</style>