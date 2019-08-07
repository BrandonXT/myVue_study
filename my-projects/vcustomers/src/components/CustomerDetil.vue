<template>
  <div class="customerdetil container">
    <router-link to="/" class="btn btn-default">返回首页</router-link>
    <h1 class="page-header">
      {{customer.name}}
      <span class="pull-right">
        <router-link class="btn btn-success" :to="`/edit/${customer.id}`">编辑</router-link>
        <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-asterisk">
        {{customer.phone}}
        </span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-envelope">
        {{customer.email}}
        </span></li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-star-empty">
        {{customer.education}}
        </span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-home">
        {{customer.school}}
        </span></li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-asterisk">
        {{customer.profession}}
        </span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-asterisk">
        {{customer.profile}}
        </span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'customerdetil',
  data () {
    return {
      customer:{}
    }
  },
  methods:{
    getMore(id){
      this.$http.get("http://localhost:3000/users/"+id)
      .then(data=>{
        // console.log(data);
        this.customer=data.body;
        // console.log(this.customer);
      })
    },
    deleteCustomer(id){
      // console.log(id);
      this.$http.delete("http://localhost:3000/users/"+id)
      .then(data=>{
        this.$router.push({path:'/',query:{alert:"删除成功！！"}})
      })
    }
  },
  created() {
    this.getMore(this.$route.params.id);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

