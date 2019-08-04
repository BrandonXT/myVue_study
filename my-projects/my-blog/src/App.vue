<template>
  <div id="app">
    <!-- <add-blog></add-blog> -->
    <show-blogs></show-blogs>
  </div>
</template>

<script>
//导入组件
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/Showblogs'
export default {
  name: 'App',
  components: {
    //挂载路由
    AddBlog,
    ShowBlogs
  }
}
</script>



<style>

</style>
