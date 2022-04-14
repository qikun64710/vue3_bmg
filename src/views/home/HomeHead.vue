<template>
    <div class="homeHead">
        <div class="homeHead-left"></div>
        <div class="homeHead-right">
            <el-dropdown>
                <div class="el-dropdown-link headavatar">
                    <el-avatar style="width: 24px;height:24px;marginRight:12px" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
                    <div>admin</div>
                </div>
                <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
    .homeHead{
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #ddd;
        &-right{
            .headavatar{
                cursor: pointer;
                display: flex;
                align-items: center;
            }
        }
    }
</style>