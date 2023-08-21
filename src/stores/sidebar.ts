import { defineStore } from 'pinia'
export const useSidebarStore = defineStore('sidebar', {
  state: () => {
    return { collapse: true }
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    handleCollapse() {
      this.collapse = !this.collapse
    }
  }
})
