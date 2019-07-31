<template>
  <div class="ussers">
    <h1>这是user的h1标签</h1>
    <ul>
        <li v-for="user in uuser">
            <h2>{{user.name}}</h2>
            <h3>{{user.email}}</h3>
            </li>
    </ul>
    <button @click="deletUser">delete</button>
  </div>
</template>

<script>
export default {
  name: 'ussers',  //指的是模板控制的dom users
  // props:["uuser"],  //将父组件的元素引入到子组件用
  // 标准的写法
  props:{
    uuser:{
      type:Array,
      required:true
    }
  },
  data () {
    return {
      
    }
  },
  methods:{
    deletUser(){
      this.uuser.pop()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .user {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }
  li {
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
  }
</style>