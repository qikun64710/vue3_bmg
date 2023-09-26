<template>
    <div class="Login">
        <div class="Login-Contain">
            <el-form
                ref="ruleFormRef"
                :model="ruleForm"
                :rules="loginRules"
                label-width="120px"
                class="demo-ruleForm"
                :size="formSize"
                status-icon
            >
                <el-form-item prop="username" label-width="0px">
                    <el-input
                        v-model="ruleForm.username"
                        placeholder="账号"
                        clearable
                        :prefix-icon="User"
                    >
                    </el-input>
                </el-form-item>
                <el-form-item prop="password" label-width="0px">
                    <el-input
                        v-model="ruleForm.password"
                        placeholder="密码"
                        clearable
                        show-password
                        :prefix-icon="Lock"
                    >
                    </el-input>
                </el-form-item>
                <el-form-item prop="password" label-width="0px">
                    <el-button
                        type="primary"
                        class="w-full"
                        @click="submitForm(ruleFormRef)"
                      >
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance } from 'element-plus'
import { Lock, User } from '@element-plus/icons-vue'
import { loginRules } from './rule'
import axios from '@/api/https'
interface RuleForm {
    username: string
    password: string
}
const router = useRouter()
const formSize = ref<string>('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm: RuleForm = reactive({
  username: 'admin',
  password: '123456'
})
// 表单提交
const submitForm = async(formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async(valid, fields) => {
    if (valid) {
      console.log('submit!')
      await axios({
        url: '/api/test',
        method: 'get'
      })
      router.push({
        name: 'ArticleIndex'
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>
<style scoped lang="scss">
    .Login{
       display: flex;
       align-items: center;
       justify-content: center;
       width: 100vw;
       height: 100vh;
       background: url('@/assets/image/loginBg.jpg') center center / cover no-repeat fixed;
        &-Contain{
            width: 400px;
        }
    }
</style>
