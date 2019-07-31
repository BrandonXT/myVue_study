<template>
  <header @click="changeTitle">
      <h1>{{title}} {{title1}}</h1>
  </header>
</template>

<script>
export default {
  name: 'app-Header',
  props:{
        title1:{
          type:String
        }
      },
  data () {
    return {
      title:"Vue.js Demo",
    }
  },
  methods:{
    changeTitle(){
      // this.title1="changed"
      this.$emit("titleChanged","子向父组件传值"); //前面是事件名，后面是传的值
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header{
        background: lightgreen;
        padding: 10px;
    }
    h1{
        text-align: center;
        color: #222;
    }
</style>