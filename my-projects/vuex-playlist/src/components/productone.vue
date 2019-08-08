<template>
    <div id="one">
        <h1>oneone</h1>
        <ul>
            <li v-for="(product,index) in saleProducts" :key="index">
                <span>{{product.name}}</span>
                <span class="price">${{product.price}}</span>
            </li>
        </ul>
        <button @click="reducePrice(4)">降价</button>
    </div>
</template>

<script>
export default {
    name:"p-one",
   computed: {
       productss(){
           return this.$store.state.products;
       },
    //    提高复用性，减少代码冗余，在store里面定义
    //    saleProducts(){
    //        //map方法遍历
    //        let saleProducts = this.$store.state.products.map(product=>{
    //            return{
    //                name:`**${product.name}**`,
    //                price:product.price/2
    //            }
    //        })
    //        return saleProducts;
    //    }
    saleProducts(){
        return this.$store.getters.saleProducts;
    }
   },
   methods: {
       reducePrice(num){
           //在严格模式下无法使用该方法
        //    this.$store.state.products.forEach(element => {
        //        element.price -= 1;
        //    });

        // this.$store.commit('reducePrice');  //commit用来激活mutations里面的reducePrice方法

        this.$store.dispatch("reducePrice1",num); //dispatch 用来激活actions里面的方法  这样实现了同步 还能传参数
       }
   },
}
</script>

<style>
     #one{
        background: orange;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
        margin-bottom: 30px;
        padding: 10px 20px;
    }
    #one ul {
        padding: 0;
        list-style-type: none;
    }
    #one li {
        display: inline-block;
        margin-right: 10px;
        margin-top: 10px;
        padding: 20px;
        background: rgba(255, 255, 255, 0.7);
    }
    .price{
        font-weight: bold;
        color: #860ce8;
        display: block;
    }
</style>

