<template>
  <van-swipe :autoplay="3000" indicator-color="red">
    <van-swipe-item v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" class="banner" @load="imgLoad"/>
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  export default {
    name: "HomeSwiper",
    data(){
      return{
        isLoad: false
      }
    },
    props:{
      banner:{
        type: Array,
        default(){
          return []
        }
      }
    },
    methods:{
      imgLoad(){
        if(!this.isLoad){
          this.$emit("swiperImageLoad")
          this.isLoad = true
        }
      }
    }
  }
</script>

<style>
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
</style>