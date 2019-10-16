<template>
  <van-swipe :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in banner" :key="index">
      <img  class="banner" v-lazy="item.image" alt="">
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  export default {
    name:"Swiper",
    props:{
      banner:{
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .banner{
    width: 100%;
    height: 195px;
    display: flex;
  }
</style>