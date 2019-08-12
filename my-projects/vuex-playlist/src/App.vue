<template>
  <div id="app">
    <product-list-one :msg="message"></product-list-one>
    <product-list-two @toFathers="getChild"></product-list-two>
    <p>xx{{message}}xx</p>
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
      msg:"父組件信息",
      message:''
    }
  },
  methods:{
    getChild(value){
      this.message = value;
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
