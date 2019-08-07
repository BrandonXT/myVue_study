<template>
  <div class="aboutus container">
    ABOUTUS
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data () {
    return {
      id:''
    }
  },
  methods: {
    
  },
  created() {
    this.id = this.$router.params.id;
    console.log(this.id);
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
