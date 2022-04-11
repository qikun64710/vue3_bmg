import { ComponentCustomProperties } from 'vue'
import { Store ,createStore} from 'vuex'
import newsStore from './news'
import users from './user'

declare module '@vue/runtime-core' {
  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<any>
  }
}
const store = createStore({
    modules:{
      "news":newsStore,
      users
    }
})
export default store