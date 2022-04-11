<template>
    <div class="login">
        <el-row justify="center" >
            <el-col :xs="8" :sm="12" :md="100" :lg="100" :xl="100">
                <div class="content">
                    <el-form :model="form" label-width="0px">
                        <el-form-item>
                            <h2>登录</h2>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="form.name" placeholder="账号" />
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="form.password" placeholder="密码" />
                        </el-form-item>
                        <el-form-item>
                            <div class="remember">
                                <el-checkbox v-model="form.checkbox" label="记住我" size="large" />
                                <el-button type="text">忘记密码？</el-button>
                            </div>
                        </el-form-item>
                        <el-form-item>
                            <el-button @click="showform" style="width:100%" type="primary">登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script lang="ts" setup>
import {  reactive } from 'vue'
interface formData{
    name:string,
    password:string,
    checkbox:boolean
}
let form:formData = reactive({
    name:'',
    password:'',
    checkbox:false
})
function showform(){
    console.log('看看响应式：',form.name,form.password)
}
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
                h2{
                    width: 100%;
                    text-align: center;
                }
                .remember{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
            }
        }
    }
</style>
