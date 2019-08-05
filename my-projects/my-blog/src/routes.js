import ShowBlog from './components/Showblogs.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'
export default[
    {path:"/",name:'showLink',component:ShowBlog},
    {path:"/add",component:AddBlog},
    {path:"/blog/:id",component:SingleBlog}
]