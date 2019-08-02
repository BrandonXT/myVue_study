<template>
    <h1>Admin</h1>
</template>
<script>
export default {
    data(){
        return {
            name:"Brandon"
        }
    },
    //进入组件之前
    // beforeRouteEnter (to,from,next) {
    //     // alert("hello"+this.name);
    //     // next();
    //     next(vm=>{
    //         alert('hello'+ vm.name);
    //     })
    // }

    //离开组件之前
    // beforeRouteLeave(to,from,next){
    //     if(confirm("确定离开吗？")==true){
    //         next();
    //     }else{
    //         next(false);
    //     }
    // }

}
</script>

