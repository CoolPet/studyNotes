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
        <div class="rating">
          <h1 class="rating-title">商品评价</h1>
          <ratingselect :selectType="selectType" 
            :onlyContent="onlyContent" 
            :desc="desc" 
            :ratings="food.ratings"/>
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
          positive: "满意",
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
</style>