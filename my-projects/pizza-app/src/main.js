import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history', //去掉那个 # 号
  
  //配置路由滚动
  scrollBehavior(to,from,savedPosition){
    //x，y轴距离
    // return {x:0,y:500}
    
    //根据选择器跳转
    // return {selector:'.btn'}

    //利用savePosition记住上次滚动地点
    // if(savedPosition){
    //   return savedPosition
    // }else{
    //   return{x:0,y:0}
    // }
  }
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
