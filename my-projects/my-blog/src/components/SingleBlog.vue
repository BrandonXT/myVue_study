<template>
    <div id="single-blog">
        <h2>{{blog.title}}</h2>
        <article>{{blog.body}}</article>
    </div>
</template>

<script>
export default {
    name:"single-blog",
    data(){
        return{
            id:this.$route.params.id, //$route.params可以取得地址的参数
            blog:{}
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts/'+this.id)
        .then(function(data){
            this.blog=data.body
        })
    }
}
</script>
<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
}
</style>
