<template>
  <footer>
      <p>{{copyright}} {{title1}}</p>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
  props:{
        title1:{
          type:String
        }
      },
  data () {
    return {
      copyright:"copy_right 2019 Vue Demo",
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    footer {
        background: #222;
        padding: 6px;
    }
    p {
        text-align: center;
        color: lightgreen;
    }
</style>