<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from "@/components/header/header"

  export default {
    data(){
      return{
        seller: {}
      }
    },
    components:{
      "v-header": Header
    },
    created(){
      this.$axios.get("/api/seller").then((res) => {
        if(res.data.errno === 0){
          this.seller = res.data.seller
        }
      })
    }
  }
</script>

<style scoped>
  .tab{
    width: 100%;
    height: 1.07rem;
    line-height: 1.07rem;
    display: flex;
    position: relative;
  }
  .tab::after{
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    border-bottom: 0.027rem solid rgba(7, 17, 27, 0.1);
    content: " ";
  }
  .tab-item{
    flex: 1;
    text-align: center;
  }
  a{
    display: block;
    font-size: 0.37rem;
    color: rgb(77, 85, 93)
  }
  .active{
    color: rgb(240, 20, 20)
  }
</style>