<template>
  <div id="app">
    <product-list-one :productss="products"></product-list-one>
    <product-list-two :productss="products"></product-list-two>
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
      products:[
        {name:"马云",price:200},
        {name:"马化腾",price:150},
        {name:"马冬梅",price:20},
        {name:"马蓉",price:1},
      ]
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
