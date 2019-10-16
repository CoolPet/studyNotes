<template>
  <div id="home">
    <tab-bar>
      <slot slot="navBarCenter">购物街</slot>
    </tab-bar>
    <scroll class="wrapper" ref="wrapper"
            :probeType="3"
            @scrollPosition="getScrollPosition"
            :pullUpLoad="true"
            @pullingUp="getMore">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend-information :recommends="recommends"></home-recommend-information>
      <home-feature></home-feature>
      <tab-control :title="['流行','新款','精选']" @getTabControlIndex="itemClick"></tab-control>
      <goods-list :goodslist="goods[currentTabType].list"></goods-list>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isMore1000"></back-top>

  </div>

</template>

<script>
  import TabBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backtop/BackTop'

  import HomeSwiper from './childComponents/HomeSwiper'
  import HomeRecommendInformation from './childComponents/RecommendInformation'
  import HomeFeature from './childComponents/HomeFeature'



  import {getHomeMultidata,getGoodsData} from 'network/home'

  export default {
    name: "Home",
    data() {
      return {
        banners:[],
        recommends:[],
        isMore1000:false,
        currentTabType:'pop',
        goods:{
          pop:{page:0,list:[]},
          new:{page:0,list:[]},
          sell:{page:0,list:[]}
        }
      }
    },
    components:{
      TabBar,
      HomeSwiper,
      HomeRecommendInformation,
      HomeFeature,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    created() {
      this.getHomeMultidata()
      this.getGoodsData('pop',1)
      this.getGoodsData('new',1)
      this.getGoodsData('sell',1)
    },
    methods:{
      /*
      * 网络请求的方法
      * */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getGoodsData(type) {
        const page = this.goods[type].page + 1;
        getGoodsData(type,page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          this.$refs.wrapper.scroll.finishPullUp()
        })
      },

      /*
      * 事件监听的方法
      * */
      itemClick(i) {
        switch (i) {
          case 0 :{
            this.currentTabType = 'pop';
            break;
          }
          case 1 :{
            this.currentTabType = 'new';
            break;
          }
          case 2 :{
            this.currentTabType = 'sell';
            break;
          }
        }

      },
      backTopClick() {
        this.$refs.wrapper.scroll.scrollTo(0,0,500)
      },
      getScrollPosition(position) {
        this.isMore1000 = -position.y > 1000;
      },
      getMore() {
        //加载更多数据
        this.getGoodsData(this.currentTabType)

        //解决使用better-scroll时，容易产生的 bug。由于页面加载就把能够滑动的距离计算好，所以滚到一定距离不能滚动
        this.$refs.wrapper.scroll.refresh();
      }

    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
  .wrapper {
    height: calc(100vh - 93px);
    overflow: hidden;
  }
</style>
