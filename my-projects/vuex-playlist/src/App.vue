<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import productoneVue from './components/productone.vue';
import producttwoVue from './components/producttwo.vue';

export default {
  name: 'app',
  components: {
    'product-list-one':productoneVue,
    'product-list-two':producttwoVue
  },
  data(){
    return{
     
    }
  }
}
</script>

<style>
  body{
    font-family: Ubuntu;
    color: #555;
  }
</style>
