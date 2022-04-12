<template>
    <el-form 
        :model="user" 
        :rules="rules"
        ref="ruleFormRef"
        label-width="0px">
        <el-form-item>
            <h2>登录</h2>
        </el-form-item>
        <el-form-item prop="name">
            <el-input v-model="user.name"  placeholder="账号" />
        </el-form-item>
        <el-form-item prop="password">
            <el-input type='password' v-model="user.password"  placeholder="密码" />
        </el-form-item>
        <el-form-item>
            <div class="remember">
                <el-checkbox v-model="user.checkbox" label="记住我" size="large" />
                <el-button type="text">忘记密码？</el-button>
            </div>
        </el-form-item>
        <el-form-item>
            <el-button @click="submit(ruleFormRef)" style="width:100%" type="primary">登录</el-button>
        </el-form-item>
    </el-form>
</template>
<script lang="ts" setup>
import{ formData,Rules} from './loginValidators'
import { defineProps,ref ,defineEmits} from 'vue'
import type { FormInstance } from 'element-plus'

const props = defineProps<{
    loginUser:formData
    rules:Rules
}>()
const emit = defineEmits<{
  (e: 'submit', userInfo: formData): void
}>()
const user = ref(props.loginUser)

const ruleFormRef = ref<FormInstance>()
console.log('ruleFormRef',ruleFormRef)
// 点击事件
const submit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      emit('submit', user.value)
    }
  })
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
