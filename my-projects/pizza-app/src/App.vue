<template>
  <div id="app">
    <div class="container">
      <app-Header></app-Header>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components:{
    appHeader:Header  //驼峰命名可以不用双引号 "app-Header":Header 也可
  }
}
</script>

<style>

</style>
