<!--父组件   子组件存放在component文件夹里--->
<template>
  <div id="home">
    <h1>这是app的h1标签</h1>
    <!-- <users></users> -->
    <app-Header @titleChanged="updateTitle($event)" v-bind:title1="title1"/>
   <!-- 这边把模板的数据绑定上让子组件可以调用 -->
    <users :uuser="users" />  
    <!-- users是数组，这个就是传的引用 -->
    <users :uuser="users" />  
    <!-- title是字符串，所以是传值 -->
    <app-Footer :title1="title1" />
  </div>
</template>

<!--传值与传引用
传值： string number boolean  不会同时改变值
传引用： array  object     会同时变化-->
 
<!--行为-->
<script>
//局部注册组件(子组件)导入
import Users from './Users'
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Home',  //App的组件
  data(){
    return {
      users:[
        // {name:"Brandon",position:"前端开发",show:false},
        // {name:"Brandon",position:"前端开发",show:false},
        // {name:"Brandon",position:"前端开发",show:false},
        // {name:"Brandon",position:"前端开发",show:false},
        // {name:"Brandon",position:"前端开发",show:false},
      ],
      title1:"这是一个title",
    }
  },
  methods:{
    updateTitle(title){
      this.title1=title;
    }
  },
  //引用
  components:{
    "users":Users, //此处起的名字不能跟系统标签冲突
    "app-Header":Header,
    "app-Footer":Footer
  },
  // components:{
  //   Users
  //   }

  //在页面加载之前把数据拿到
  created(){
    this.$http.get("https://jsonplaceholder.typicode.com/users")
    .then((data)=>{
      // console.log(data);
      this.users=data.body;
      
    })
  }
}
</script>

<!--样式-->
<style scoped>
    h1 {
      color: purple;
    }
</style>
