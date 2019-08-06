<template>
    <div id="single-blog">
        <h2>{{blog.title}}</h2>
        <article>{{blog.content}}</article>
        <p>作者：{{blog.author}}</p>
        <p>分类：</p>
        <ul>
            <li v-for="(category,index) in blog.categories" :key="index">
                {{category}}
            </li>
        </ul>
        <button @click="deleteSingleBlog()">删除</button>
        <router-link :to="'/edit/'+id">编辑</router-link>
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
        this.$http.get('https://vuedemo-b530a.firebaseio.com/posts/'+this.id+'.json')
        .then(function(data){
            // console.log(data.json());
            return data.json();
        }).then((data)=>{
            this.blog=data;
        })
    },
    methods:{
        deleteSingleBlog(){
            this.$http.delete("https://vuedemo-b530a.firebaseio.com/posts/"+this.id+".json")
            .then((res)=>{
                this.$router.push({path:'/'})
            })
        }
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
