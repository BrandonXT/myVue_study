// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//引入路由
import Customers from './components/Customers.vue'
import AboutUs from './components/AboutUs.vue'

//设置路由
const router = new VueRouter({
  mode:"history",
  routes:[
    {path:"/",component:Customers},
    {path:"/aboutus",component:AboutUs},
  ],
  base:__dirname
})




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components:{App},
  template: '<App/>',
  router,
})
