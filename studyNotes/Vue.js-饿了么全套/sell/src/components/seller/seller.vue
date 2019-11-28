<template>
  <div class="seller" ref="seller">
    <div class="seller-content">
      <div class="overview">
        <h1 class="seller-title">{{seller.name}}</h1>
        <div class="desc">
          <star :size="36" :score=seller.score />
          <span class="desc-text">({{seller.ratingCount}})</span>
          <span class="desc-text">月售{{seller.sellCount}}单</span>
        </div>
        <ul class="remark">
          <li class="remark-block">
            <h1 class="remark-title">起送价</h1>
            <div class="remark-content">
              <span class="remark-stress">{{seller.minPrice}}</span>元
            </div>
          </li>
          <li class="remark-block">
            <h1 class="remark-title">商家配送</h1>
            <div class="remark-content">
              <span class="remark-stress">{{seller.deliveryPrice}}</span>元
            </div>
          </li>
          <li class="remark-block">
            <h1 class="remark-title">平均配送时间</h1>
            <div class="remark-content">
              <span class="remark-stress">{{seller.deliveryTime}}</span>分钟
            </div>
          </li>
        </ul>
        <div class="favorite" @click="toggle">
          <span class="icon-favorite" :class="{'active': favorite}"></span>
          <span class="favorite-text">{{favoriteText}}</span>
        </div>
      </div>
      <split />
      <div class="bulletin">
        <h1 class="bulletin-title">公告与活动</h1>
        <div class="content-wrapper">
          <p class="bulletin-content">{{seller.bulletin}}</p>
        </div>
        <ul v-if="seller.supports" class="detail-supports">
          <li class="support-item" v-for="(item, index) in seller.supports" :key="index">
            <span class="detail-icon" :class="classMap[item.type]"></span>
            <span class="support-text">{{item.description}}</span>
          </li>
        </ul>
      </div>
      <split />
      <div class="pics">
        <h1 class="pics-title">商家实景</h1>
        <div class="pics-wrapper" ref="picWrapper">
          <ul class="pics-list" ref="picList">
            <li class="pics-item" v-for="(item, index) in seller.pics" :key="index">
              <img class="pics-img" :src=item>
            </li>
          </ul>
        </div>
      </div>
      <split />
      <div class="info">
        <h1 class="info-title">商家信息</h1>
        <ul>
          <li class="info-item" v-for="(item, index) in seller.infos" :key="index">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from "better-scroll"
  import star from "@/components/star/star"
  import split from "@/components/split/split"
  import {saveToLocal, loadFromLocal} from "@/common/js/store"
  import {formatDate} from "@/common/js/date"

  export default {
    name: "Seller",
    data () {
      return {
        favorite: (() => {
          return loadFromLocal(this.seller.id, "favorite", false)
        })()
      }
    },
    props: {
      seller:{
        type: Object
      }
    },
    components: {
      star,
      split
    },
    computed: {
      favoriteText(){
        return this.favorite ? "取消":"收藏"
      }
    },
    created () {
      this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"]
    },
    watch: {
      "seller"(){
        this.$nextTick(() => {
          this._initScroll()
          this._initPics()
        })
      }
    },
    mounted () {
      this.$nextTick(() => {
        this._initScroll()
        this._initPics()
      })
    },
    methods: {
      _initScroll(){
        if(!this.scroll){
          this.scroll = new BScroll(this.$refs.seller, {
            click: true
          })
        }else{
          this.scroll.refresh()
        }
      },
      _initPics(){
        if(this.seller.pics){
          // 每张图片的宽度
          let picWidth = 3.2
          // 图片的 margin
          let margin = .16
          // 计算中宽度
          let width = (picWidth + margin) * this.seller.pics.length -  margin
          this.$refs.picList.style.width = width + "rem"
          this.$nextTick(() => {
            if(!this.picScroll){
              this.picScroll = new BScroll(this.$refs.picWrapper, {
                scrollX: true,
                eventPassthrough: 'vertical'
              })
            }else{
              this.picScroll.refresh()
            }
          })
        }
      },
      toggle(){
        this.favorite = !this.favorite
        saveToLocal(this.seller.id, "favorite", this.favorite)
      }
    }
  }
</script>
<style scoped>
  .seller{
    position: absolute;
    top: 4.65rem;
    width: 100%;
    bottom: 0;
    overflow: hidden;
  }
  .overview{
    padding: .48rem;
  }
  .seller-title{
    margin-bottom: .213rem;
    font-size: .373rem;
    color: rgb(7, 17, 27);
  }
  .desc{
    padding-bottom: .48rem;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    display: flex;
    align-items: center;
  }
  .star{
    margin-right: .213rem;
  }
  .desc-text{
    margin-right: .32rem;
    font-size: .267rem;
    color: rgb(77, 85, 93);
  }
  .remark{
    display: flex;
    align-items: center;
    padding-top: .48rem;
  }
  .remark-block{
    text-align: center;
    flex: 1;
    border-right: 1px solid rgba(7, 17, 27, .1);
  }
  .remark-block:last-child{
    border: none;
  }
  .remark-title{
    margin-bottom: .107rem;
    color: rgb(147, 153, 159);
    font-size: .267rem;
  }
  .remark-content{
    color: rgb(7, 17, 27);
    font-weight: 200;
    font-size: .267rem;
  }
  .remark-stress{
    font-size: .64rem;
  }
  .bulletin{
    padding: .48rem .48rem 0 .48rem;
  }
  .bulletin-title{
    margin-bottom: .213rem;
    font-size: .373rem;
    color: rgb(7, 17, 27);
  }
  .content-wrapper{
    padding: 0 .32rem .427rem .32rem;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
  }
  .bulletin-content{
    font-size: .32rem;
    font-weight: 200;
    color: rgb(240, 20, 20);
    line-height: .64rem;
  }
  .support-item{
    padding: .427rem .32rem;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    display: flex;
    align-items: center;
  }
  .support-item:last-child{
    border: none;
  }
  .detail-icon{
    display: block;
    width: .427rem;
    height: .427rem;
    margin-right: .16rem;
    background-size: .427rem .427rem;
    background-repeat: no-repeat;
  }
  .support-text{
    font-size: .32rem;
    font-weight: 200;
    color: rgb(7, 17, 27);
    line-height: .427rem;
  }
  .decrease{
    background-image: url("~@/assets/seller/decrease_4@3x.png");
  }
  .discount{
    background-image: url("~@/assets/seller/discount_4@3x.png");
  }
  .special{
    background-image: url("~@/assets/seller/special_4@3x.png");
  }
  .invoice{
    background-image: url("~@/assets/seller/invoice_4@3x.png");
  }
  .guarantee{
    background-image: url("~@/assets/seller/guarantee_4@3x.png");
  }
  .pics{
    padding: .48rem;
  }
  .pics-title{
    margin-bottom: .32rem;
    font-size: .373rem;
    color: rgb(7, 17, 27);
  }
  .pics-wrapper{
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
  }
  .pics-list{
    display: flex;
    align-items: center;
  }
  .pics-item{
    width: 3.2rem;
    height: 2.4rem;
    margin-right: .16rem;
  }
  .pics-item:last-child{
    margin-right: 0;
  }
  .pics-img{
    width: 3.2rem;
    height: 2.4rem;
    display: block;
  }
  .info{
    padding: .48rem .48rem 0 .48rem;
  }
  .info-title{
    padding-bottom: .32rem;
    font-size: .373rem;
    color: rgb(7, 17, 27);
    border-bottom: 1px solid rgba(7, 17, 27, .1);
  }
  .info-item{
    padding: .427rem .32rem;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    color: rgb(7, 17, 27);
    font-size: .32rem;
    line-height: .427rem;
  }
  .info-item:last-child{
    border: none
  }
  .favorite{
    position: absolute;
    right: .48rem;
    top: .48rem;
    text-align: center;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
  .icon-favorite{
    color: #d4d6d9;
    font-size: .64rem;
    margin-bottom: .107rem;
  }
  .active{
    color: rgb(240, 20, 20);
  }
  .favorite-text{
    font-size: .267rem;
    color: rgb(77, 85, 93);
  }
</style>