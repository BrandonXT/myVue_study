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
    },
  },
  //生命周期函数（钩子函数）
  // beforeCreate:function(){
  //   alert("组建实例化之前执行的函数");
  // },
  // created:function(){
  //   alert("组件实例化完毕，但页面还没有显示");
  // },
  // beforeMount:function(){
  //   alert("组件挂载前，页面仍未显示，但虚拟dom已经配置");
  // },
  // mounted(){
  //   alert("组件挂载后，此方法之后，页面显示");
  // },
  // beforeUpdate:function(){
  //   alert("组件更新前，页面仍未更新，但虚拟dom已经配置");
  // },
  // updated:function(){
  //   alert("组件更新结束，此方法结束之后，页面更新");
  // },
  // beforeDestory:function(){
  //   alert("组件销毁前");
  // },
  // destoryed:function(){
  //   alert("组件销毁");
  // }
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