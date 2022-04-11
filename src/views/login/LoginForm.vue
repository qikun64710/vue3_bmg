<template>
    <el-form 
        :model="user" 
        :rules="rules"
        label-width="0px">
        <el-form-item>
            <h2>登录</h2>
        </el-form-item>
        <el-form-item prop="name">
            <el-input v-model="user.name"  placeholder="账号" />
        </el-form-item>
        <el-form-item prop="password">
            <el-input v-model="user.password"  placeholder="密码" />
        </el-form-item>
        <el-form-item>
            <div class="remember">
                <el-checkbox v-model="user.checkbox" label="记住我" size="large" />
                <el-button type="text">忘记密码？</el-button>
            </div>
        </el-form-item>
        <el-form-item>
            <el-button @click="showform" style="width:100%" type="primary">登录</el-button>
        </el-form-item>
    </el-form>
</template>
<script lang="ts" setup>
import { defineProps,computed } from 'vue'
const props = defineProps({
    loginUser:{
        type:Object,
        requried:true,
    },
    rules:{
        type:Object,
        requried:true,
    }
})
const user:any = computed(() => props.loginUser)
const showform = ():void => {
    console.log('user:',user.value.name)
    user.value.name = 2
    console.log('user:',user)
}
</script>
<style lang="scss" scoped>
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
</style> 
