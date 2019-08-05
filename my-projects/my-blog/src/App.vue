<template>
  <div id="app">
    <blog-header></blog-header>
    <!-- <add-blog></add-blog> -->
    <!-- <show-blogs></show-blogs> -->
    <router-view></router-view>
  </div>
</template>

<script>
//导入组件
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/Showblogs'
import BlogHeader from './components/BlogHeader'
export default {
  name: 'App',
  components: {
    //挂载路由
    AddBlog,
    ShowBlogs,
    BlogHeader
  }
}
</script>



<style>

</style>
