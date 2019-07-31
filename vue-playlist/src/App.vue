<!--父组件   子组件存放在component文件夹里--->
<template>
  <div id="app">
    <ul>
      <!-- router-link不会重新刷新页面 -->
      <li><router-link to='/'>home</router-link></li>
      <li><router-link to='/helloword'>hello</router-link></li>
      <!-- a标签会重新加载，不好 -->
      <!-- <li><a href="/">home</a></li> -->
      <!-- 路由名字叫啥就要写啥 -->
      <!-- <li><a href="./helloword">helloword</a></li>  -->
    </ul>
    <router-view></router-view>
  </div>
</template>

<!--传值与传引用
传值： string number boolean  不会同时改变值
传引用： array  object     会同时变化-->
 
<!--行为-->
<script>

export default {
  name: 'App',  //App的组件
  data(){
    return {
     
    }
  },
  methods:{
  
  },
}
</script>

<!--样式-->
<style scoped>
    h1 {
      color: purple;
    }
</style>
