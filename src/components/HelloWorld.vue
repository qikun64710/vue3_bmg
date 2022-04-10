<template>
  <div class="hellow">
    nihao
    <div>{{title}}</div>
    <br>
    <!-- <div>{{reverseTitle}}</div> -->
    <el-button type="primary" @click="setTitle('123')">改变标题</el-button>
    <br>
    
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
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
  mounted(){
    this.setTitle('111')
  },
  computed:{
    reverseTitle():string{
      return this.title.split('').reverse().join('')
    }
  },
  methods:{
    setCount():void{
      this.count = '123'
    },
    setTitle(title:string):void{
      this.title = title
    }
  }
})
</script>
<style lang="scss" scoped>
  .hellow{
    color:red;
  }
</style>