<template>
  <div id="app">
    <div class="container">
      <app-Header></app-Header>
    </div>
    <div class="container">
      <!-- 点击哪个路由就跳转到哪个去 -->
      <router-view></router-view> 
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components:{
    appHeader:Header  //驼峰命名可以不用双引号 == "app-Header":Header 
  }
}
</script>

<style>

</style>
