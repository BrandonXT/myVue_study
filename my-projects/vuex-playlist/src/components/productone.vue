<template>
    <div id="one">
        <h1>oneone</h1>
        <ul>
            <li v-for="(product,index) in productss" :key="index">
                <span>{{product.name}}</span>
                <span class="price">${{product.price}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"p-one",
    props:["productss"],
    data(){
        return{

        }
    }
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
