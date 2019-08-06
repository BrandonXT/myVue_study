// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
<script src="https://cdn.bootcss.com/axios/0.19.0/axios.min.js"></script>

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'  //引入路由模块
import VueResource from 'vue-resource'
import Routes from './routes' //引入路由文件

//全局配置axios地址  其他axios的地址就可以省略这个公共部分
// axios.defaults.baseURL = 'https://vuedemo-b530a.firebaseio.com'
//设置请求头
// axios.defaults.headers.post['content-type'] = 'application/urlencode'
//axios.defaults.headers.common['Authorization']='Token'

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.config.productionTip = false

// 全局自定义指令
// Vue.directive('rainbow', {
//   bind(el, binding, vnode) {
//     el.style.color = "#" + Math.random().toString(16).slice(2, 8);
//   }
// })
//全局自定义传参模板(el为对象，binding为传递的参数 )
Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth == "1260px";
    } else if (binding.value == 'narrow') {
      el.style.maxWidth == "560px";
      // el.style.background = "#ccc";
    }
    //自定义使用修饰符
    if (binding.arg == 'column') {
      el.style.background = '#6677cc';
      el.style.padding = '30px';
    }
  }
})

//自定义全局过滤器
// Vue.filter("to-uppercase",(value)=>{
//   return value.toUpperCase();
// })
Vue.filter("snippet",function(value){
  return value.slice(0,100)+"...";
})

//创建路由
const router = new VueRouter({
  routes:Routes,
  mode:"history"
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  //在中心挂载
  router:router //router也可
})
