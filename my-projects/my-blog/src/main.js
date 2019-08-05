// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.config.productionTip = false

// 自定义指令
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = "#" + Math.random().toString(16).slice(2, 8);
  }
})
//自定义传参模板(el为对象，binding为传递的参数 )
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


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
