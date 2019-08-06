<template>
  <div v-theme="'wide'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索" />
    <div v-for="(blog,index) in filterBlogs" :key="index" class="single-blog">
      <router-link :to="'/blog/'+blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <article>{{blog.content | snippet}}</article>
    </div>
  </div>
</template>

<script>
export default {
  name: "show-blogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    //一般在钩子函数created请求数据
    this.$http.get("https://vuedemo-b530a.firebaseio.com/posts.json").then(res => {

      // this.blogs = res.body.slice(0, 10);
      // console.log(res.json());
      return res.json()
    }).then((data)=>{
      let blogsArray=[];
      for(let key in data){
        // console.log(key);
        // console.log(data[key]);
        data[key].id=key; //给元素加上id属性
        blogsArray.push(data[key]);
      }
      // console.log(blogsArray);
      this.blogs= blogsArray;
    })
  },
  computed: {
    filterBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  },
  filters: {
    // "to-uppercase": function(value) {
    //   return value.toUpperCase();
    // }
    toUppercase(value) { //toUppercase == to-uppercase
      return value.toUpperCase();
    }
  },
  directives:{  //局部自定义
      'rainbow':{
          bind(el,binding,vnode){
              el.style.color="#"+Math.random().toString(16).slice(2, 8);
          }
      }
  }
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background-color: #eee;
}
input[type="text"]{
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
