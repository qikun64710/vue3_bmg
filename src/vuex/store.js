import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            count:1
        }
    },
    mutations:{
        incCount(state){
            state.count ++
        }
    }
})
export default store