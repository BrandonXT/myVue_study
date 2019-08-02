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


export const routes = [
    { path: "/", name: "homeLink", components:{
        default:Home,
        //引入要复用的路由
        'orderingGuide':OrderingGuide,
        'delivery':Delivery,
        'history':History
    } },
    { path: "/menu", name: "menuLink", components: {
        default:Menu,
        //引入要复用的路由  component 改成components
        'orderingGuide':OrderingGuide,
        'delivery':Delivery,
        'history':History
    } },
    {
      path: "/admin", name: "adminLink", component: Admin
      // beforeEnter: (to, from, next) => {
      //   //路由独享守卫，，在路由配置上直接定义=============================
      //   // alert('未登录，不能进');
      //   // next(false);
      //   if (to.path == '/login' || to.path == '/register') {
      //     next()
      //   } else {
      //     alert('请先登录');
      //     next('/login');
      //   }
      // }
    },
    { path: "/login", name: "loginLink", component: Login },
    {
      path: "/about", name: "aboutLink", component: About, redirect: "/history", children: [
        {
          path: "/about/contact", name: "contactLink", component: Contact, redirect: "/phone", children: [
            { path: "/phone", name: "phoneLink", component: Phone },
            { path: "/personname", name: "personLink", component: Personname }
          ]
        },
        { path: "/delivery", name: "deliveryLink", component: Delivery },
        { path: "/history", name: "historyLink", component: History },
        { path: "/orderGuide", name: "orderGuideLink", component: OrderingGuide }
      ]
    },
    { path: "/register", name: "registertLink", component: Register },
    { path: "*", redirect: "/" }  //当上面的路径都没匹配上时，就会自动匹配到*所指的home
  ]