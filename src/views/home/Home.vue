<template>
  <div class="home">
    <el-container class="home-container" style="height: 100%">
      <el-aside >
        <LeftAsideVue></LeftAsideVue>
      </el-aside>
      <el-container class="rightContainer">
        <el-header class="rightHead">
          <HomeHeadVue></HomeHeadVue>
        </el-header>
        <el-tabs type="card">
          <el-tab-pane label="User">
            <slot></slot>
          </el-tab-pane>
        </el-tabs>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import LeftAsideVue from './LeftAside.vue';
import HomeHeadVue from './HomeHead.vue';
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    LeftAsideVue,
    HomeHeadVue
  } 
})
</script>
<style lang="scss" scoped>
  .home{
    width: 100%;
    height: 100%;
    min-height: 100%;
    &-container{
      width: 100%;
      height: 100%;
      .el-aside{
        flex: 0 0 210px;
        max-width: 210px;
        min-width: 210px;
        width: 210px;
        height: 100%;
        background-color: #324554;
      }
      .rightContainer{
        .rightHead{
          padding: 0px 10px;
        }
      }
    }
  }
</style>