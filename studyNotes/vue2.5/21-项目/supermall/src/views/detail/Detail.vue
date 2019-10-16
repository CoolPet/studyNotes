<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
    <scroll class="wrapper" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommends" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addCart="addBuy"/>
    <back-top @click.native="backClick" v-show="isShow"/>
    <!-- <toast :message="message" :isShow="show"/> -->
  </div>
</template>

<script>
  import DetailNavBar from "./childComponents/DetailNavBar"
  import DetailSwiper from "./childComponents/DetailSwiper"
  import DetailBaseInfo from "./childComponents/DetailBaseInfo"
  import DetailShopInfo from "./childComponents/DetailShopInfo"
  import DetailGoodsInfo from "./childComponents/DetailGoodsInfo"
  import DetailParamInfo from "./childComponents/DetailParamInfo"
  import DetailCommentInfo from "./childComponents/DetailCommentInfo.vue"
  import DetailBottomBar from "./childComponents/DetailBottomBar"

  import Scroll from "components/common/scroll/Scroll"
  import GoodsList from "components/content/goods/GoodsList"
  // import Toast from "components/common/toast/Toast"

  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from "network/detail"
  import {itemListenerMixin, backTopMixin} from "common/mixin"

  import { mapActions } from "vuex"

  export default {
    name: "Detail",
    data(){
      return{
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        itemImgListener: null,
        themeTopYs: [],
        currentIndex: 0,
        // message: "",
        // show: false
      }
    },
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      Scroll,
      GoodsList,
      // Toast
    },
    mixins: [itemListenerMixin, backTopMixin],
    created(){
      // 1.保存传入的 id
      this.iid = this.$route.params.id

      // 2.根据 id 请求详情数据
      getDetail(this.iid).then(res => {
        const data = res.result
        // 1.获取顶部的图片轮播数据
        this.topImages = data.itemInfo.topImages

        // 2.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 3.获取商家信息
        this.shop = new Shop(data.shopInfo)

        // 4.保存商品的详情数据
        this.detailInfo = data.detailInfo

        // 5.获取参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        // 6.取出评论信息
        if(data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0]
        }
        
        // 1.第一次获取,值不对
        // 值不对的原因: this.$refs.params.$el 压根没有渲染
        // this.themeTopYs = []
        // this.themeTopYs.push(0)
        // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)

        // this.$nextTick(() => {
        //   2.第二次获取：值不对
        //   值不对的原因：图片没有计算在内
        //   根据最新的数据,对应的 DOM 是已经被渲染出来
        //   但是图片依然是没有加载完(目前获取到 offsetTop 不包含其中的图片)
        //   offsetTop 值不对的时候,一般都是因为图片的问题
        //   this.themeTopYs = []
        //   this.themeTopYs.push(0)
        //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
        // })
      })

      // 3.请求推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list
      })
    },
    methods:{
      ...mapActions(["addCart"]),
      imageLoad(){
        this.$refs.scroll.refresh()
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
        // 使用 hack 方法的话,需要使用一个最大值
        // Number.MAX_VALUE 是 js 方法中所能获取到的最大的值
        this.themeTopYs.push(Number.MAX_VALUE)
      },
      titleClick(e){
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[e], 200)
      },
      contentScroll(position){
        // 3.显示返回顶部
        this.isShow = -(position) > 1000
        // 1.获取 y 值
        const positionY = -position
        // 2.positionY 和主题中值进行对比
        let length = this.themeTopYs.length
        for(let i = 0; i < length; i++){
          // 普通做法:
          // 条件: this.currentIndex !== i
          // 作用:防止赋值的过程过于频繁
          // 条件:((i < length -1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i === length -1 && positionY >= this.themeTopYs[i]))
          // 条件一:(i < length -1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])
          // 作用:判断区间,在 0 和 某个数字之间(i < length -1)
          // 条件二:(i === length -1 && positionY >= this.themeTopYs[i])
          // 作用:判断大于等于(i === length -1)
          // if(this.currentIndex !== i && 
          // ((i < length -1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || 
          // (i === length -1 && positionY >= this.themeTopYs[i]))){
          //   this.currentIndex = i
          //   this.$refs.nav.currentIndex = this.currentIndex
          // }

          // hack 做法:
          if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
      },
      addBuy(){
        // 1.获取购物车需要展示的信息
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid

        // 2.将商品添加到购物车里(使用 Vuex)
        // 使用 Promise 函数
        // this.$store.commit("addCart", product)
        // this.$store.dispatch("addCart", product).then(res => {
        //   console.log(res)
        // })
        // 使用 mapActions 映射
        this.addCart(product).then(res => {
          // this.message = res
          // this.show = true
          // setTimeout(() => {
          //   this.show = false
          //   this.message = ""
          // }, 1500)
          this.$toast.show(res, 1500)
        })
      }
    },
    destroyed(){
      this.$bus.$off("itemImageLoad", this.itemImgListener)
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 1000;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav{
    position: relative;
    top: 0;
    background-color: #fff;
    z-index: 9;
  }
  .wrapper{
    height: calc(100vh - 44px - 58px);
    overflow: hidden;
  }
</style>