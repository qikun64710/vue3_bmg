import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import store from '../index'

const NAME = 'tabs'

@Module({ dynamic: true, namespaced: true, store, name: NAME })
export default class Tabs extends VuexModule {
    private activeTab = 'Home'
}