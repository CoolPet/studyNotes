<template>
  <transition name="move">
    <div class="food" v-show="showFlag" ref="food">
      <div>
        <div class="food-content">
          <img :src=food.image alt="" class="image-header">
          <div class="back" @click="show">
            <i class="icon-arrow_lift"></i>
          </div>
          <div class="content">
            <h1 class="title">{{food.name}}</h1>
            <div class="detail">
              <span class="sell-count">月售{{food.sellCount}}</span>
              <span class="rating">好评率{{food.rating}}%</span>
            </div>
            <div class="price">
              <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
            </div>
            <div class="cartcontrol-wrapper">
              <cartcontrol :food="food" @cartAdd="addCart"></cartcontrol>
            </div>
            <transition name="fade">
              <div class="buy" @click="addFirst" v-show="!food.count || food.count===0">加入购物车</div>
            </transition>
          </div>
        </div>
        <split v-show="food.info"/>
        <div class="info" v-show="food.info">
          <h1 class="info-title">商品信息</h1>
          <p class="info-text">{{food.info}}</p>
        </div>
        <split />
        <div class="rating-details">
          <h1 class="rating-title">商品评价</h1>
          <ratingselect :selectType="selectType" 
            :onlyContent="onlyContent" 
            :desc="desc" 
            :ratings="food.ratings"
            @select="select"
            @toggle="toggle"/>
          <div class="rating-wrapper">
            <ul v-show="food.ratings && food.ratings.length">
              <li v-show="needShow(item.rateType, item.text)" v-for="(item, index) in food.ratings" :key="index" class="rating-item">
                <div class="rating-user">
                  <span class="rating-username">{{item.username}}</span>
                  <img :src=item.avatar class="rating-avatar">
                </div>
                <div class="rating-time">{{item.rateTime | formatDate}}</div>
                <p class="rating-text">
                  <span :class="{'icon-thumb_up':item.rateType===0, 'icon-thumb_down':item.rateType===1}"></span>
                  {{item.text}}
                </p>
              </li>
            </ul>
            <div class="no-rating" v-show="!food.ratings || !food.ratings.length">暂无评价</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import BScroll from "better-scroll"
  import cartcontrol from "@/components/cartcontrol/cartcontrol"
  import split from "@/components/split/split"
  import ratingselect from "@/components/ratingselect/ratingselect"
  // 日期的通用方法
  import {formatDate} from "@/common/js/date"

  // 好评
  const POSITIVE = 0
  // // 差评
  const NEFATIVE = 1
  // 全部评论
  const ALL = 2

  export default {
    name: "Food",
    props:{
      food:{
        type: Object
      }
    },
    components: {
      cartcontrol,
      split,
      ratingselect
    },
    data(){
      return{
        showFlag: false,
        selectType: ALL,
        onlyContent: true,
        desc:{
          all: "全部",
          positive: "推荐",
          negative: "吐槽"
        }
      }
    },
    methods: {
      show(){
        this.showFlag = !this.showFlag
        this.selectType = ALL
        this.onlyContent = true
        if(this.showFlag == true){
          this.$nextTick(() => {
            if(!this.scroll){
              this.scroll = new BScroll(this.$refs.food, {
                click: true
              })
            }else{
              this.scroll.refresh()
            }
          })
        }
      },
      addFirst(){
        this.$emit("cartAdd", event.target)
        this.$set(this.food, 'count', 1)
      },
      addCart(){
        this.$emit("cartAdd", event.target)
      },
      needShow(type, text){
        if(this.onlyContent && !text){
          return false
        }
        if(this.selectType === ALL){
          return true
        }else{
          return type === this.selectType
        }
      },
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
      formatDate(time){
        let date = new Date(time)
        return formatDate(date, "yyyy-MM-dd hh:mm")
      }
    }
  }
</script>

<style scoped>
  .food{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 1.28rem;
    margin: auto;
    z-index: 11;
    background-color: #ffffff;
    transform: translate3d(0, 0, 0);
  }
  .move-enter-active, .move-leave-active{
    transition: all 0.2s linear
  }
  .move-enter, .move-leave-active{
    transform: translate3d(100%, 0, 0)
  }
  .image-header{
    width: 100%;
    height: 100vw;
    display: block;
  }
  .back{
    position: absolute;
    top: .267rem;
    left: 0;
  }
  .icon-arrow_lift{
    padding: .267rem;
    font-size: .533rem;
    color: #ffffff;
  }
  .content{
    padding: .48rem;
    position: relative;
  }
  .title{
    font-size: .373rem;
    font-weight: 700;
    margin-bottom: .213rem;
    color: rgb(7, 17, 27);
  }
  .detail{
    margin-bottom: .48rem;
    font-size: .267rem;
    color: rgb(147, 153, 159);
  }
  .sell-count{
    margin-right: .32rem;
  }
  .price{
    font-weight: 700;
    font-size: 0;
  }
  .now{
    font-size: .373rem;
    color: rgb(240, 20, 20);
    margin-right: .213rem;
  }
  .old{
    text-decoration: line-through;
    font-size: .267rem;
    color: rgb(147, 153, 159);
  }
  .cartcontrol-wrapper{
    position: absolute;
    right: .32rem;
    bottom: .32rem;
  }
  .buy{
    position: absolute;
    right: .48rem;
    bottom: .48rem;
    z-index: 10;
    height: .64rem;
    line-height: .64rem;
    padding: 0 .32rem;
    box-sizing: border-box;
    font-size: .267rem;
    border-radius: .32rem;
    color: #ffffff;
    background-color: rgb(0, 160, 220);
  }
  .fade-enter-active, .fade-leave-active{
    transition: all .2s
  }
  .fade-enter, .fade-leave-active{
    opacity: 0;
    z-index: -1;
  }
  .info{
    padding: .48rem;
  }
  .info-title{
    margin-bottom: .427rem;
    font-size: .373rem;
    color: rgb(7, 17, 27);
    font-weight: 900;
  }
  .info-text{
    padding: 0 .213rem;
    font-size: .32rem;
    color: rgb(77, 85, 93);
    line-height: .64rem;
  }
  .rating-details{
    padding-top: .48rem;
  }
  .rating-title{
    margin-left: .48rem;
    font-size: .373rem;
    color: rgb(7, 17, 27)
  }
  .rating-wrapper{
    padding: 0 .48rem;
  }
  .rating-item{
    position: relative;
    padding: .427rem 0;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
  }
  .rating-user{
    position: absolute;
    right: 0;
    top: .427rem;
    font-size: 0;
    display: flex;
    align-items: center;
  }
  .rating-avatar{
    width: .32rem;
    height: .32rem;
    display: block;
    border-radius: 50%;
  }
  .rating-username{
    font-size: .267rem;
    color: rgb(147, 153, 159);
    margin-right: .16rem;
  }
  .rating-time{
    font-size: .267rem;
    color: rgb(147, 153, 159);
    margin-bottom: .16rem;
  }
  .rating-text{
    font-size: .32rem;
    color: rgb(7, 17, 27);
  }
  .icon-thumb_up, .icon-thumb_down{
    margin-right: .107rem;
    font-size: .32rem;
  }
  .icon-thumb_up{
    color: rgb(0, 160, 220);
  }
  .icon-thumb_down{
    color: rgb(147, 153, 159);
  }
  .no-rating{
    padding: .427rem;
    font-size: .32rem;
    color: rgb(147, 153, 159);
  }
</style>