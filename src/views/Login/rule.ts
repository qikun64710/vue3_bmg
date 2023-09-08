import { reactive } from 'vue'
import type { FormRules } from 'element-plus'
const loginRules = reactive<FormRules>({
  password: [
    {
      validator: (rule, value, callback) => {
        if (value === '') {
          callback(new Error('密码不可为空'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ],
  username: [
    {
      validator: (rule, value, callback) => {
        if (value === '') {
          callback(new Error('用户名不能为空'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
})
export { loginRules }
