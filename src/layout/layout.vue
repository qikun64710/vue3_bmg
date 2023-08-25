<template>
    <div class="app-wrapper">
      <v-header />
      <div class="main-container">
        <v-siderbar />
        <v-app-main />
      </div>
    </div>
  </template>
<script lang="ts" setup>
import vHeader from '@/layout/components/header.vue'
import vSiderbar from '@/layout/components/siderBar.vue'
import vAppMain from '@/layout/components/appMain.vue'
defineOptions({
  name: 'Layout'
})
</script>
  <style lang="scss"></style>
