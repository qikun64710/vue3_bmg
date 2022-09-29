import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import store from '../index'
interface MenuModel {
    id: number
    title?: string
    name?: string
    path?: string
    icon?: string
    child?: MenuModel[] | []
} 
@Module({ dynamic: true, namespaced: true, store })
export default class Menu extends VuexModule {
  
}
