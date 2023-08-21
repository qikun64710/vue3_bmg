<template>
    <div class="Login">
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="120px"
            class="demo-ruleForm"
            :size="formSize"
            status-icon
        >
        <el-form-item label="Activity name" prop="username">
            <el-input v-model="ruleForm.username">
                <template #prefix>
                    <el-icon class="el-input__icon"><User /></el-icon>
                </template>
            </el-input>
        </el-form-item>
        <el-form-item label="Activity name" prop="password">
            <el-input v-model="ruleForm.password">
                <template #prefix>
                    <el-icon class="el-input__icon"><Lock /></el-icon>
                </template>
            </el-input>
        </el-form-item>
        </el-form>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
interface RuleForm {
    username: string
    password: string
}
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  username: 'admin',
  password: '123456'
})
const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: 'Please input username', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur' }
  ]
})

</script>
<style scoped lang="scss"></style>
