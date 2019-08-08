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
        saleProducts:(state)=>{
            //map方法遍历
            let saleProducts = state.products.map(product => {
                return {
                    name: `**${product.name}**`,
                    price: product.price / 2
                }
            })
            return saleProducts;
        }
    }
});

export default store;