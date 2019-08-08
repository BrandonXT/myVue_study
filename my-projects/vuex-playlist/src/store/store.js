import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        products: [{
                name: "马云",
                price: 200
            },
            {
                name: "马化腾",
                price: 150
            },
            {
                name: "马冬梅",
                price: 20
            },
            {
                name: "马蓉",
                price: 1
            },
        ]
    },
    //getter方法  可以改变store里面的数据
    getters: {
        saleProducts:(stat)=>{
            //map方法遍历
            let saleProducts = stat.products.map(product => {
                return {
                    name: `**${product.name}**`,
                    price: product.price / 2
                }
            })
            return saleProducts;
        }
    },
    mutations:{
        reducePrice:(state,payload)=>{
            // setTimeout(function(){
                state.products.forEach(data=>{
                    data.price -=payload;
                })
            // },2000)
        }
    },
    actions:{
        //actions执行异步基本是commit出mutation里面的方法  
        //好处：方便开发者调试，还能传参（payload） 在后台调试里面有payload参数
        reducePrice1:(context,payload)=>{
            setTimeout(function(){
               context.commit('reducePrice',payload);
            },2000)
        }
    }
});

export default store;