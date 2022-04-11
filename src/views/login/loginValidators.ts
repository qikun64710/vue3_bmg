import {ref, reactive } from "vue";
interface formData{
    name:string,
    password:string,
    checkbox:boolean
}
export const loginUser:formData = reactive({
    name:'',
    password:'',
    checkbox:false
})
interface Rules{
    name:({
        required:boolean,
        message:string,
        trigger:string
    })[];
    password:({
        required:boolean,
        message:string,
        trigger:string
    })[];
}
export const rules = reactive<Rules>({
    name:[
        {
            required:true,
            message:'请输入用户名',
            trigger:"blur"
        }
    ],
    password:[
        {
            required:true,
            message:'请输入密码',
            trigger:"blur"
        }
    ]
})