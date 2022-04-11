const userStore = {
    namespace:true,
    state(){
        return{
            age:26
        }
    },
    mutations:{
        incCount(state:any){
            state.age++
        },
        setAge(state:any,age:number){
            state.age = age
        }
    },
    getters:{
        getAge(state:any){
            return state.age
        }
    },
    actions:{
        incCount(context:any){
            context.commit('incCount')
        },
        setAge({commit}:any,age:number){
            commit('setAge',age)
        }
    }

}
export default userStore