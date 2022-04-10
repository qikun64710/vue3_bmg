<template>
    <div class="home">
        <br>
        username = {{username}}
        <br>
        <el-button type="primary" @click="setUsername('ninini')">修改姓名</el-button>
        <br>
        <div>{{getUsername()}}</div>
        <br>
        {{count}}
        <br>
        reverseUsername====={{reverseUsername}}
    </div>
</template>
<script lang="ts">
import { defineComponent ,reactive, toRefs,ref, computed} from 'vue'
interface User{
    username:string,
    age:number,
    setUsername(name:string):void,
    getUsername():string
}
export default defineComponent({
    data(){
        return{}
    },
    setup(){
        // 接口第一种写法
        // let user:User = reactive({
        //     username:'张三',
        //     age:20,
        //     setUsername(name:string){
        //         this.username = name
        //     },
        //     getUsername(){
        //         return this.username
        //     }
        // })
        // 接口的第二种写法
        // let user = reactive<User>({
        //     username:'张三',
        //     age:20,
        //     setUsername(name:string){
        //         this.username = name
        //     },
        //     getUsername(){
        //         return this.username
        //     }
        // })
        // 接口的第三种写法
        let user = reactive({
            username:'张三',
            age:20,
            setUsername(name:string){
                this.username = name
            },
            getUsername(){
                return this.username
            }
        }) as User
        let count = ref<number|string>("20")
        let reverseUsername = computed(():string => {
            return user.username.split('').reverse().join('')
        })
        return{
            count,
            reverseUsername,
            ...toRefs(user)
        }
    }
})
</script>
<style lang="scss" scoped>

</style>