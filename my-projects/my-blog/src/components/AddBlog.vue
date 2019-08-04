<template>
  <div class="add-Blog">
    <h2>添加博客</h2>
    <hr>
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
    <button @click.prevent="post">提交</button>

    </form>
    <div v-if="submmited">
        <h2>发布成功！！！！</h2>
    </div>
    <hr>
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
  name: "add-blog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author:'',
      },
      authors: ["Brandon", "Tommy", "King"],
      submmited:false
    };
  },
  methods:{
      post(){
          this.$http.post("https://jsonplaceholder.typicode.com/posts",{
              title:this.blog.title,
              body:this.blog.content,
              userId:1
          }).then((res)=>{
              console.log(res);
              this.submmited=true;
          })
      }
  }
};


</script>

<style scoped>
  #add-Blog *{
    box-sizing: border-box;
  }

  #add-blog{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
  }
  label {
    display: block;
    margin: 20px 0 10px;
  }
  input[type='text'],textarea,select{
    display: block;
    width: 100%;
    padding: 8px;
  }
  #checkboxes label{
    display: inline-block;
    margin-top: 0px;
  }
  #checkboxes input{
    display: inline-block;
    margin-right: 10px;
  }
  button{
    display: block;
    margin: 20px auto 0;
    background: red;
    color: white;
    border:0;
    border-radius: 5px;
    padding:14px;
    font-size: 18px;
  }
  textarea{
    height: 200px;
  }
  #preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }
  h3{
    margin-top: 10px;
  }
</style>
