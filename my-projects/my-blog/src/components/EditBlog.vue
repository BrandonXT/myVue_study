<template>
  <div class="add-Blog">
    <h2>添加博客</h2>
    <hr />
    <form v-if="!submmited">
      <label for="bTitle">博客标题</label>
      <input type="text" v-model="blog.title" required id="bTitle" />
      <br />
      <label for="bContent">博客内容</label>
      <textarea id="bContent" v-model="blog.content"></textarea>

      <div id="checkboxes">
        <label>
          <input type="checkbox" value="VUE.js" v-model="blog.categories" />
          VUE.js
        </label>
        <label>
          <input type="checkbox" value="NODE.js" v-model="blog.categories" />
          NODE.js
        </label>
        <label>
          <input type="checkbox" value="REACT.js" v-model="blog.categories" />
          REACT.js
        </label>
        <label>
          <input type="checkbox" value="ANGULAR.js" v-model="blog.categories" />
          ANGULAR.js
        </label>
      </div>

      <label>
        作者：
        <select v-model="blog.author">
          <option v-for="(author,index) in authors" :key="index">{{author}}</option>
        </select>
      </label>
      <button @click.prevent="post">修改</button>
    </form>
    <div v-if="submmited">
      <h2>发布成功！！！！</h2>
    </div>
    <hr />
    <div id="preview">
      <h3>博客预览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：</p>
      <p>{{blog.content}}</p>
      <p>博客分类:</p>
      <ul>
        <li v-for="(category,i) in blog.categories" :key="i">{{category}}</li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "edit-blog",
  data() {
    return {
      blog: {
        id:this.$route.params.id,
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["Brandon", "Tommy", "King"],
      submmited: false
    };
  },
  methods: {
    fetchData(){
        this.$http.get('https://vuedemo-b530a.firebaseio.com/posts/'+this.id+'.json')
        .then((res)=>{
            this.blog = res.body;
        })
    },
    post() {
      this.$http.
        put('https://vuedemo-b530a.firebaseio.com/posts/'+this.id+'.json',this.blog)
        .then(res => {
          console.log(res);
          this.submmited = true;
        });
    }
  },
  created(){
      this.fetchData();
  }
};
</script>
