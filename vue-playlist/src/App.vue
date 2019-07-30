<!--父组件   子组件存放在component文件夹里--->
<template>
  <div id="app">
    <h1>这是app的h1标签</h1>
    <!-- <users></users> -->
    <app-Header />
   <!-- 这边把模板的数据绑定上让子组件可以调用 -->
    <users :uuser="users" />  
    <app-Footer />
    
  </div>
</template>
 
<!--行为-->
<script>
//局部注册组件(子组件)
import Users from './components/Users'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',  //App的组件
  data(){
    return {
      users:[
        {name:"Brandon",position:"前端开发",show:false},
        {name:"Brandon",position:"前端开发",show:false},
        {name:"Brandon",position:"前端开发",show:false},
        {name:"Brandon",position:"前端开发",show:false},
        {name:"Brandon",position:"前端开发",show:false},
      ]
    }
  },
  //引用
  components:{
    users:Users, //此处起的名字不能跟系统标签冲突
    "app-Header":Header,
    "app-Footer":Footer
  }
  // components:{
  //   Users
  //   }
}
</script>

<!--样式-->
<style scoped>
    h1 {
      color: purple;
    }
</style>
