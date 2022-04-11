<template>
    <div class="login">
        <el-row justify="center" >
            <el-col :xs="18" :sm="10" :md="10" :lg="8" :xl="6">
                <div class="content">
                    <LoginForm :loginUser="loginUser" :rules="rules" />
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script lang="ts" setup>
import{ loginUser ,rules} from './loginValidators'
import LoginForm from './LoginForm.vue'

</script>
<style lang="scss" scoped>
    .login{
        background-color: #293146;
        width: 100%;
        height: 100%;
        position: relative;
        .el-row{
            top: 50%;
            transform: translateY(-50%);
            .content{
                background-color: #fff;
                border-radius: 5px;
                padding: 2rem;
            }
        }
    }
</style>
