// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import HelloWord from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import VueResource from 'vue-resource'
// import Users from './components/Users.vue'

Vue.config.productionTip = false
//使用中间件。此时任何一个组件都可以使用
Vue.use(VueRouter)
Vue.use(VueResource)

//配置路由
const router = new VueRouter({
  routes:[
    {path:"/",component:Home},
    {path:"/helloword",component:HelloWord}
  ],
  mode:'history'
})

//全局注册组件
// Vue.component("users",Users);

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
