<template>
  <header>
      <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'app-Header',
  data () {
    return {
      title:"Vue.js Demo"
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