<template>
  <div class="ratings" ref="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="score-title">服务态度</span>
            <star class="score-star" :size="36" :score="seller.serviceScore" />
            <span class="service-score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="score-title">商品评分</span>
            <star class="score-star" :size="36" :score="seller.foodScore" />
            <span class="food-score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="delivery-title">送达时间</span>
            <span class="delivery-time">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <split></split>
      <ratingselect :selectType="selectType" 
        :onlyContent="onlyContent" 
        :ratings="ratings"
        @select="select"
        @toggle="toggle"/>
      <div class="rating-wrapper">
        <ul>
          <li v-for="(item, index) in ratings" class="rating-item" :key="index">
            <div class="avatar">
              <img :src=item.avatar >
            </div>
            <div class="content">
              <h1 class="name">{{item.username}}</h1>
              <div class="star-warpper">
                <star class="star" :size="24" :score="item.score"></star>
                <span class="delivery" v-show="item.deliveryTime">{{item.deliveryTime}}分钟送达</span>
              </div>
              <p class="text">{{item.text}}</p>
              <div class="recommend" v-show="item.recommend && item.recommend.length">
                <span class="icon-thumb_up"></span>
                <span class="item" v-for="(items, index) in item.recommend" :key="index">{{items}}</span>
              </div>
              <div class="time">
                {{item.rateTime | formatDate}}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {formatDate} from '@/common/js/date'
  import star from "@/components/star/star"
  import ratingselect from "@/components/ratingselect/ratingselect"
  import split from "@/components/split/split"

  const ALL = 2
  const ERR_OK = 0

  export default {
    name: "Ratings",
    props:{
      seller:{
        type: Object
      }
    },
    data(){
      return{
        ratings: [],
        selectType: ALL,
        onlyContent: true
      }
    },
    created () {
      this.$http.get('/api/ratings').then((res) => {
        res = res.body
        if(res.errno === ERR_OK){
          this.ratings = res.ratings
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.ratings, {
              click: true
            })
          })
        }
      })
    },
    components: {
      star,
      ratingselect,
      split
    },
    methods: {
      select(e){
        this.selectType = e
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      },
      toggle(e){
        this.onlyContent = e
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    filters: {
      formatDate(time) {
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm');
      }
    }
  }
</script>

<style scoped>
  .ratings{
    position: absolute;
    top: 4.65rem;
    width: 100%;
    bottom: 0;
    overflow: hidden;
  }
  .overview{
    display: flex;
    padding: .48rem 0;
    align-items: center;
  }
  .overview-left{
    width: 36.7%;
    border-right: 1px solid rgba(7, 17, 27, .2);
    text-align: center;
    padding: .16rem 0;
  }
  .overview-right{
    width: 63.3%;
    padding-left: .64rem;
  }
  .score{
    font-size: .64rem;
    color: rgb(255, 153, 0);
    margin-bottom: .16rem;
  }
  .title{
    font-size: .32rem;
    color: rgb(7, 17, 27);
    margin-bottom: .213rem;
  }
  .rank{
    font-size: .267rem;
    color: rgb(147, 153, 159);
  }
  .score-wrapper{
    margin-bottom: .213rem;
    display: flex;
    align-items: center;
  }
  .score-title{
    font-size: .32rem;
  }
  .score-star{
    margin: 0 .32rem;
  }
  .service-score{
    font-size: .32rem;
    color: rgb(255, 153, 0);
  }
  .food-score{
    font-size: .32rem;
    color: rgb(255, 153, 0);
  }
  .delivery-wrapper{
    display: flex;
    align-items: center;
  }
  .delivery-title{
    font-size: .32rem;
  }
  .delivery-time{
    font-size: .32rem;
    color: rgb(147, 153, 159);
    margin-left: .32rem;
  }
  .rating-wrapper{
    padding: 0 .48rem;
  }
  .rating-item{
    display: flex;
    padding: .48rem 0;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
  }
  .avatar img{
    width: .747rem;
    height: .747rem;
    border-radius: 50%;
    margin-right: .32rem;
  }
  .content{
    position: relative;
    width: 100%;
  }
  .name{
    font-size: .267rem;
    color: rgb(7, 17, 27);
    margin-bottom: .107rem;
  }
  .star-warpper{
    margin-bottom: .16rem;
    display: flex;
    align-items: center;
  }
  .star{
    margin-right: .16rem;
  }
  .delivery{
    font-size: .267rem;
    color: rgb(147, 153, 159);
    margin-top: .053rem;
  }
  .text{
    font-size: .32rem;
    color: rgb(7, 17, 27);
    margin-bottom: .213rem;
  }
  .recommend{
    display: flex;
    flex-wrap: wrap;
  }
  .icon-thumb_up, .item{
    margin: 0 .213rem .107rem 0;
    font-size: .24rem;
  }
  .icon-thumb_up{
    color: rgb(0, 160, 200);
  }
  .item{
    padding: .053rem .16rem;
    border: 1px solid rgba(7, 17, 27, .1);
    border-radius: .053rem;
    color: rgb(147, 153, 159);
    background-color: #ffffff;
  }
  .time{
    position: absolute;
    top: 0;
    right: 0;
    font-size: .267rem;
    color: rgb(147, 153, 159);
  }
</style>