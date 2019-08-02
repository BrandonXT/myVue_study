<template>
  <div id="app">
    <div class="container">
      <app-Header></app-Header>
    </div>
    <div class="container">
      <!-- 点击哪个路由就跳转到哪个去 -->
      <router-view></router-view> 
      <router-view></router-view> 
      <router-view></router-view> 
    </div>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name='orderingGuide'></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name='delivery'></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name='history'></router-view>
        </div>
      </div>
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
