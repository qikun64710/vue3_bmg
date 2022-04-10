import { createStore } from "vuex";
import newsStore from './news'
import userStore from './user'
const store = createStore({
    modules:{
        "news":newsStore,
        "user":userStore
    }
})
export default store