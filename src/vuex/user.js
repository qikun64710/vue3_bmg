let userStore = {
    state(){
        return{
            age:20
        }
    },
    mutatios:{
        incCount(state){
            state.age++
        },
        setAge(state,age){
            state.age = age
        }
    },
    getters:{
        getAge(state){
            return state.age
        }
    },
    actions:{
        incCount(context){
            context.commit('incCount')
        },
        setAge({commit},age){
            commit('setAge',age)
        }
    }

}
export default userStore