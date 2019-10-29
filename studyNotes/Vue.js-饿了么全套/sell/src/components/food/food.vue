<template>
  <transition name="move">
    <div class="food" v-show="showFlag" ref="food">
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
        </div>
        <div class="cartcontrol-wrapper">
          <cartcontrol :food="food"></cartcontrol>
        </div>
        <div class="buy" v-show="!food.count || food.count===0">加入购物车</div>
      </div>
    </div>
  </transition>
</template>

<script>
  import BScroll from "better-scroll"
  import cartcontrol from "@/components/cartcontrol/cartcontrol"

  export default {
    name: "Food",
    props:{
      food:{
        type: Object
      }
    },
    components: {
      cartcontrol
    },
    data(){
      return{
        showFlag: false
      }
    },
    methods: {
      show(){
        this.showFlag = !this.showFlag
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
</style>