// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// import Axios from 'axios'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(VueRouter);
// Vue.use(Axios);
// Vue.prototypt.$axios = axios
//引入路由
import Customers from './components/Customers.vue'
import AboutUs from './components/AboutUs.vue'
import Add from './components/Add.vue'
import CustomerDetil from './components/CustomerDetil.vue'
import Edit from './components/Edit.vue'

//设置路由
const router = new VueRouter({
  mode:"history",
  routes:[
    {path:"/",component:Customers},
    {path:"/aboutus",component:AboutUs},
    {path:'/add',component:Add},
    {path:"/customer/:id",component:CustomerDetil},
    {path:"/edit/:id",component:Edit}
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
