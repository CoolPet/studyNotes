<template>
  <van-swipe :autoplay="3000" indicator-color="red">
    <van-swipe-item v-for="(item, index) in topImages" :key="index">
      <img v-lazy="item" class="banner"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  export default {
    name: "DetailSwiper",
    props:{
      topImages:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .banner{
    width: 100%;
    display: block;
  }
  .van-swipe__indicator{
    width: 8px;
    height: 8px;
    opacity: 1;
    background-color: #fff;
  }
  .van-swipe-item{
    height: 300px!important;
    overflow: hidden;
  }
</style>