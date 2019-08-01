import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import Login from './components/Login'
import About from './components/about/About.vue'
import Register from './components/Register'

//引入二级路由
import Contact from './components/about/Contact.vue'
import Delivery from './components/about/Delivery.vue'
import History from './components/about/History.vue'
import OrderingGuide from './components/about/OrderingGuide.vue'

//引入三级路由
import Phone from './components/about/contact/phone.vue'
import Personname from './components/about/contact/personName.vue'

Vue.use(VueRouter)

const routes = [
  {path:"/",name:"homeLink",component:Home},
  {path:"/menu",name:"menuLink",component:Menu},
  {path:"/admin",name:"adminLink",component:Admin},
  {path:"/login",name:"loginLink",component:Login},
  {path:"/about",name:"aboutLink",component:About,redirect:"/history",children:[
    {path:"/about/contact",name:"contactLink",component:Contact,redirect:"/phone",children:[
      {path:"/phone",name:"phoneLink",component:Phone},
      {path:"/personname",name:"personLink",component:Personname}
    ]},
    {path:"/delivery",name:"deliveryLink",component:Delivery},
    {path:"/history",name:"historyLink",component:History},
    {path:"/orderGuide",name:"orderGuideLink",component:OrderingGuide}
  ]},
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
