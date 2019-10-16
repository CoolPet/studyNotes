<template>
  <swiper>
    <swiper-item v-for="(item,i) in banners" :key="i">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/index'

  export default {
    name: "MainSwiper",
    components :{
      Swiper,
      SwiperItem
    },
    props:{
      banners:Array,
      default () {
        return []
      }
    }
  }
</script>

<style scoped>

</style>
