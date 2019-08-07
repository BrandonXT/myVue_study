<template>
  <div class="add container">
    <Alert :message="alert" v-if="alert"></Alert>
    <h1 class="page-header">添加用户</h1>
    <form @submit="addCustomer">
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
        <button type="submit" class="btn btn-primary">添加</button>
       </div>
    </form>
  </div>
</template>

<script>
import Alert from './Alert';
export default {
  name: 'add',
  data () {
    return {
        customer:{},
        alert:''
    }
  },
  methods:{
      addCustomer(e){
          e.preventDefault();
          if(!this.customer.name||!this.customer.phone||!this.customer.email){
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
            this.$http.post("http://localhost:3000/users",newCustomer)
            .then(data=>{
                // console.log(data);
                this.$router.push({path:"/",query:{alert:"用户添加成功"}});
            })

          }
      }
  },
  components:{
      Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
