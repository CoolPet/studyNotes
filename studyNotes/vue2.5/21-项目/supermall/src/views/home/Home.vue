<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :title="title" 
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"/>
    <scroll class="wrapper" 
      ref="scroll" 
      :probe-type="3" 
      @scroll="contenScroll" 
      :pull-up-load="true"
      @getMore="getMore">
      <home-swiper :banner="banner" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature></feature>
      <tab-control
        :title="title" 
        @tabClick="tabClick"
        ref="tabControl2"
        v-show="!isTabFixed"/>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- .native 修饰符,可以直接监听组件的原生事件 -->
    <back-top @click.native="backClick" v-show="isShow"/>
  </div>
</template>

<script>
  import HomeSwiper from "./childComponents/HomeSwiper"
  import RecommendView from "./childComponents/RecommendView"
  import Feature from "./childComponents/Feature"

  import NavBar from "components/common/navbar/NavBar" 
  import TabControl from "components/content/tabControl/TabControl"
  import GoodsList from "components/content/goods/GoodsList"
  import Scroll from "components/common/scroll/Scroll"

  import {getHomeMultidata, getHomeGoods} from "network/home"
  import {itemListenerMixin, backTopMixin} from "common/mixin"

  export default {
    name: "Home",
    components:{
      HomeSwiper,
      RecommendView,
      Feature,
      NavBar,
      TabControl,
      GoodsList,
      Scroll
    },
    mixins: [itemListenerMixin, backTopMixin],
    data(){
      return{
        banner: [],
        recommend: [],
        title: ["流行", "新款", "精选"],
        goods:{
          "pop": {page: 0, list: []},
          "new": {page: 0, list: []},
          "sell": {page: 0, list: []}
        },
        currentType: "pop",
        isShow: false,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0,
        itemImgListener: null
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    created(){
      this.getHomeMultidata()
      // 流行
      this.getHomeGoods("pop")
      // 新款
      this.getHomeGoods("new")
      // 精选
      this.getHomeGoods("sell")
    },
    mounted(){
      // 这个地方 img 标签确实被挂载,但是其中的图片还没有占据高度
      // 防抖动函数的使用
      // const refresh = debounce(this.$refs.scroll.refresh, 100)
      // 监听 GoodsListItem 中图片加载完成
      // 对监听的事件进行保存
      // this.itemImgListener = () => {
      //   refresh()
      // }
      // this.$bus.$on("itemImageLoad", this.itemImgListener)
    },
    activated(){
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      // 1.保存 Y 值
      this.saveY = this.$refs.scroll.getScrollY()

      // 2.取消全局事件的监听
      // 注:这里不能只写全局事件监听的名字,那样会使得所有的监听事件都取消,需要在加上其所对应的函数
      this.$bus.$off("itemImageLoad", this.itemImgListener)
    },
    methods:{
      /**
       * 事件监听相关的方法
      */
      tabClick(e){
        // 1.if...else 写法
        // if(e == 0){
        //   this.currentType = "pop"
        // }else if(e == 1){
        //   this.currentType = "new"
        // }else{
        //   this.currentType = "sell"
        // }

        // 2.switch 写法
        switch(e){
          case 0:
            this.currentType = "pop"
            break;
          case 1:
            this.currentType = "new"
            break;
          case 2:
            this.currentType = "sell"
            break;
        }
        this.$refs.tabControl1.currentIndex = e
        this.$refs.tabControl2.currentIndex = e
      },

      // 监听滚动的位置
      contenScroll(data){
        // 1.判断 BackTop 是否显示
        this.isShow = -(data) > 1000

        // 2.决定 tabControl 是否吸顶(position: fixed)
        this.isTabFixed = -(data) > this.tabOffsetTop
      },

      // 返回顶部
      backClick(){
        this.$refs.scroll.scrollTo(0, 0, 500)
      },

      // 上拉加载更多
      getMore(){
        this.getHomeGoods(this.currentType)
      },

      // 监视轮播图图片是否加载完成
      swiperImageLoad(){
        // 获取 tabControl 的 offsetTop
        // 所以的组件都有一个属性 $el:用于获取组件中的元素
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },

      /**
       * 网络请求相关的方法
      */
      // 1.请求轮播图/选项栏等多个数据
      getHomeMultidata(){
        getHomeMultidata().then(res =>{
          this.banner = res.data.banner.list
          this.recommend = res.data.recommend.list
        })
      },
      // 2.请求商品数据
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          // 完成上拉加载更多
          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style>
  #home{
    height: 100vh;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    /* 在使用浏览器原生滚动时,为了不让导航不跟随一起滚动 */
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }
  /* .tab-control{
    css 设置 tab-control 到距高 44px 时,停止滚动
    position: sticky;
    top: 44px;
    z-index: 9;
  } */
  .wrapper{
    height: calc(100vh - 93px);
    overflow: hidden;
  }
</style>