<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" 
          :key=index
          :class="{active : currentIndex == index}"
          @click="titleClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"

  export default {
    name: "DetailNavBar",
    data(){
      return{
        titles: ["商品", "参数", "评论", "推荐"],
        currentIndex: 0
      }
    },
    components:{
      NavBar
    },
    methods:{
      titleClick(e){
        this.currentIndex = e
        this.$emit("titleClick", e)
      },
      backClick(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .title{
    display: flex;
    justify-content: space-around;
    font-size: 13px;
  }
  .active{
    color: var(--color-high-text)
  }
  .back{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>