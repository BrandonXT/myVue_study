import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import Login from './components/Login'
import About from './components/about/About.vue'
import Register from './components/Register'

Vue.use(VueRouter)

const routes = [
  {path:"/",component:Home},
  {path:"/menu",component:Menu},
  {path:"/admin",component:Admin},
  {path:"/home",component:Home},
  {path:"/login",component:Login},
  {path:"/about",component:About},
  {path:"/register",component:Register},
]

const router = new VueRouter({
  routes,
  mode:'history' //去掉那个 # 号
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
