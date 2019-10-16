<template>
  <div id="app"> 
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="{path:'/profile',query:{name:'why',age:18,height:1.88}}">档案</router-link>
    <router-link to="/user/123">123用户</router-link>
    <router-link to="/user/456">456用户</router-link>
    <router-link :to='"/user/" + userId'>动态用户</router-link>
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return{
        userId: "李四"
      }
    },
    methods:{
      homeClick(){
        // 通过 js 代码的方式修改路由 vue-router
        this.$router.push("/home")
      },
      aboutClick(){
        this.$router.replace("/about")
      },
      userClick(){
        this.$router.push("/user/"+this.userId)
      },
      profileClick(){
        this.$router.push({
          path:"/profile",
          query:{
            name: "coder",
            age: 18,
            height: 1.88
          }
        })
      }
    }
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-size: 8px
}
.active{
  color: red;
}
</style>
