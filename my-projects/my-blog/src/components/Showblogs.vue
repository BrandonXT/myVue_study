<template>
    <div id="show-blogs">
        <h1>博客总览</h1>
        <div v-for="(blog,index) in blogs" :key="index" class="single-blog">
            <h2>{{blog.title}}</h2>
            <article>
                {{blog.body}}
            </article>
        </div>
    </div>
</template>

<script>
export default {
    name:'show-blogs',
    data(){
        return{
          blogs:[]
        }
    },
    created(){
        //一般在钩子函数created请求数据
        this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            this.blogs=res.body.slice(0,10);
            console.log(this.blogs);
            
        })
    }
}
</script>

<style scoped>
    #show-blogs{
        max-width: 800px;
        margin: 0 auto;
    }
    .single-blog{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background-color: #eee;
    }
</style>
