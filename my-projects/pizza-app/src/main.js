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
  {path:"/",name:"homeLink",component:Home},
  {path:"/menu",name:"menuLink",component:Menu},
  {path:"/admin",name:"adminLink",component:Admin},
  {path:"/login",name:"loginLink",component:Login},
  {path:"/about",name:"aboutLink",component:About},
  {path:"/register",name:"registertLink",component:Register},
  {path:"*",redirect:"/"}  //当上面的路径都没匹配上时，就会自动匹配到*所指的home
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
