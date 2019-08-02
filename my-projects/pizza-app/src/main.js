import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history' //去掉那个 # 号
})

//全局守卫
// router.beforeEach((to,from,next)=>{
//   if(to.path == '/login' || to.path=='/register'){
//     next()
//   }else{
//     alert('请先登录');
//     next('/login');
//   }
// })

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
