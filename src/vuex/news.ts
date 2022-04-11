// vuex.d.ts
declare module '@vue/runtime-core' {
  // 声明自己的 store state
  interface State {
    list: string[]
  }
}
const newsStore = {
    namespace:true,
    state(){
        return{
            list:['新闻1','新闻2']
        }
    },
    
}
export default newsStore