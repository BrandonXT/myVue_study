<template>
  <div class="customers container">
    <Alert :message="alert" v-if="alert"></Alert>
    <h1 class="page-header">用户管理系统</h1>
    <input type="text" class="form-control" placeholder="搜索" v-model="filterInput">
    <br>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer,index) in filterList(customers,filterInput)" :key="index">
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td><router-link :to="`/customer/${customer.id}`" class="btn btn-primary">详情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
//导入alert组件
import Alert from './Alert'
export default {
  name: 'Customers',
  data () {
    return {
      customers:[],
      alert:'',
      filterInput:''
    }
  },
  methods:{
    getData(){
      // axios.get("http://localhost:3000/users")
      // .then(data=>{
      //   console.log(data);
      // })
      this.$http.get("http://localhost:3000/users")
      .then(data=>{
        // console.log(data);
        this.customers=data.body;
      })
    },
    filterList(customers,value){
      return this.customers.filter(function(data){
        return data.name.match(value);
      })
    }
  },
  created(){
    if(this.$route.query.alert){
      this.alert=this.$route.query.alert;
    }
    this.getData();
  },
   updated(){
    // this.getData();
  },
  components:{
    Alert,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
