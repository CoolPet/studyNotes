<template>
  <div id="app">
    <h2>------App 展示 info 内容------</h2>
    <p>{{$store.state.info}}</p>
    <button @click="upinfo">修改信息</button>

    <h2>------App 内容------</h2>
    <h2>当前计数:{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>

    <h2>------App 内容:getters 相关信息------</h2>
    <h2>当前数值的平方:{{$store.getters.powerCounter}}</h2>
    <h2>年龄大于20岁的学生:{{more20stu}}</h2>
    <h2>年龄小于20岁的学生:{{$store.getters.small20stu}}</h2>
    <h2>年龄小于20岁的学生的个数:{{$store.getters.small20stuLength}}</h2>
    <h2>年龄小于18岁的学生的个数:{{$store.getters.moreAgeStu(18)}}</h2>
    <button @click="addCount(5)">+5</button>

    <h2>------Hello Vuex 的内容------</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex"

export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    HelloVuex
  },
  methods:{
    addition(){
      this.$store.commit("increment")
    },
    subtraction(){
      this.$store.commit("decrement")
    },
    addCount(count){
      // 1.普通的提交封装
      // this.$store.commit("incrementCount", count)

      // 2.特殊的提交封装
      this.$store.commit({
        type: "incrementCount",
        count: count
      })
    },
    upinfo(){
      // 使用 matation 修改
      // this.$store.commit("upinfo")
      // 使用 action 异步修改
      this.$store.dispatch("aUpdateInfo")
    }
  },
  computed:{
    // 使用计算属性获取
    more20stu(){
      return this.$store.state.students.filter(s => {
        return s.age >= 20
      })
    }
  }
}
</script>

<style>
  body{
    font-size: 9px;
  }
</style>
