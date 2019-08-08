import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        products:[
            {name:"马云",price:200},
            {name:"马化腾",price:150},
            {name:"马冬梅",price:20},
            {name:"马蓉",price:1},
        ]
    }
});

export default store;