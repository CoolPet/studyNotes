<template>
  <div class="home">
    <!-- 标题 -->
    <nav-bar class="nav-bar">
      <div class="center" slot="center">
        购物街
      </div>
    </nav-bar>
    <!-- scroll -->
    <scroll class="content">
      <!-- 轮播 -->
      <swiper :banner="banner"/>
      <!-- 分类 -->
      <div class="recommend">
        <div v-for="(item, index) in recommend" :key="index">
          <a :href=item.link>
            <img v-lazy=item.image alt="">
            <div>{{item.title}}</div>
          </a>
        </div>
      </div>
      <!-- 本周流行大图 -->
      <img class="fashion" src="~@/assets/img/home/recommend_bg.jpg" alt="">
    </scroll>
  </div>
</template>

<script>
  import NavBar from "@/components/navbar/NavBar"
  import Swiper from "@/components/swiper/Swiper"
  import Scroll from "@/components/scroll/Scroll"

  import { getHomeMultidata } from "../../network/home"

  export default {
    name: "Home",
    data(){
      return {
        banner: [],
        recommend: []
      }
    },
    components:{
      NavBar,
      Swiper,
      Scroll
    },
    mounted(){
      this.getHomeMultidata()
    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          console.log(res)
          this.banner = res.data.banner.list
          this.recommend = res.data.recommend.list
        })
      }
    }
  }
</script>

<style scoped>
  .home{
    height: 100vh;
  }
  .nav-bar{
    background-color: var(--color-tint);
  }
  .center{
    font-size: 18px;
    text-align: center;
    color: #fff;
  }
  .recommend{
    display: flex;
    justify-content: space-around;
    font-size: 12px;
    text-align: center;
    padding: 8px 0 17px;
    border-bottom: 2.66667vw solid #eee;
  }
  .recommend img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-bottom: 9px;
  }
  .fashion{
    width: 100%;
    display: block;
  }
  .content{
    height: calc(100% - 44px - 50px);
    overflow: hidden;
  }
</style>