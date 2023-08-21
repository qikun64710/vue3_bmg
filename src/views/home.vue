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
import vHeader from '@/components/header.vue'
import vSiderbar from '@/components/siderbar.vue'
import vAppMain from '@/components/appMain.vue'
defineOptions({
  name: 'Home'
})
</script>
<style lang="scss"></style>
