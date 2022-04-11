<template>
  <div class="hellow">
    nihao
    <div>{{title}}</div>
    <br>
    <!-- <div>{{reverseTitle}}</div> -->
    <el-button type="primary" @click="setTitle('123')">改变标题</el-button>
    <br>
    <div>newage------{{newage}}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import {userApi} from '@/api/user'
interface News{
  title:string,
  count:number | string,
}
let newdata:News = {
  title:'',
  count:111
}
export default defineComponent({
  data() {
    return newdata
  },
  setup(){
    const store = useStore()
    console.log('store.state:',store.state)
    let num:number = store.state.users.age
    onMounted(() => {
      userApi.login({
        name:'fd',
        password:'123456'
      }).then(res =>{
        console.log('resres:',res)
      }).catch(err=>{
        console.log('errerr:',err)
      })
    })
    return{
      num
    }
  },
  mounted(){
    this.setTitle('111')
  },
  computed:{
    reverseTitle():string{
      return this.title.split('').reverse().join('')
    },
    newage():number{
      return this.$store.state.users.age
    }
  },
  methods:{
    setCount():void{
      this.count = '123'
    },
    setTitle(title:string):void{
      this.title = title
    }
  },
})
</script>
<style lang="scss" scoped>
  .hellow{
    color:red;
  }
</style>