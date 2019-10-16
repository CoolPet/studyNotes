<template>
  <div>
        <h2 class="title">{{message}}</h2>
        <h2>{{name}}</h2>
        <button @click="btnClick">按钮</button>
        <Cpn></Cpn>
    </div>
</template>

<script>
import Cpn from "./Cpn.vue"
export default {
    name: "App",
    data(){
        return{
            message: "Hello World",
            name: "coderwhy"
        }
    },
    methods:{
        btnClick(){
            console.log("我是按钮")
        }
    },
    components:{
        Cpn
    }
}
</script>

<style>
    .title{
        color: red
    }
</style>