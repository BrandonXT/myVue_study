<template>
  <div class="add container">
    <Alert :message="alert" v-if="alert"></Alert>
    <h1 class="page-header">编辑用户</h1>
    <form @submit="editCustomer">
       <div class="well">
            <h4>用户信息</h4>
        <div class="form-group">
            <label for="name">姓名</label>
            <input type="text" class="form-control" placeholder="name" v-model="customer.name" id="name">
        </div>
         <div class="form-group">
            <label for="phone">电话</label>
            <input type="text" class="form-control" placeholder="phone" v-model="customer.phone" id="phone">
        </div>
        <div class="form-group">
            <label for="email">邮箱</label>
            <input type="text" class="form-control" placeholder="email" v-model="customer.email" id="email">
        </div>
         <div class="form-group">
            <label for="education">学历</label>
            <input type="text" class="form-control" placeholder="education" v-model="customer.education" id="education">
        </div>
         <div class="form-group">
            <label for="school">毕业学校</label>
            <input type="text" class="form-control" placeholder="school" v-model="customer.school" id="school">
        </div>
         <div class="form-group">
            <label for="profession">职业</label>
            <input type="text" class="form-control" placeholder="profession" v-model="customer.profession" id="profession">
        </div>
         <div class="form-group">
            <label for="profile">个人简历</label>
            <textarea rows="10" class="form-control" v-model="customer.profile" id="profile"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">修改</button>
       </div>
    </form>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'edit',
  data () {
    return {
        customer:{},
        alert:''
    }
  },
  methods:{
      showCustomer(id){
          this.$http.get("http://localhost:3000/users/"+id)
          .then(data=>{
              this.customer=data.body;
          })
      },
      editCustomer(e){
          e.preventDefault();
          if(!this.customer.name||!this.customer.phone||!this.customer.email){
            //   console.log("数据不全，请添加");
                this.alert="数据不全，请添加"
          }else{
              let newCustomer = {
                  name:this.customer.name,
                  phone:this.customer.phone,
                  email:this.customer.email,
                  education:this.customer.education,
                  school:this.customer.school,
                  profession:this.customer.profession,
                  profile:this.customer.profile,
              }
            this.$http.put("http://localhost:3000/users/"+this.$route.params.id,newCustomer)
            .then(data=>{
                // console.log(data);
                this.$router.push({path:"/",query:{alert:"用户修改成功"}});
            })
          }
      }
  },
  created(){
      this.showCustomer(this.$route.params.id);
  },
  components:{
      Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
