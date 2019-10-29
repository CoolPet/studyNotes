<template>
  <div class="all">
    <div class="shopcart">
      <div class="content">
        <div class="content-left" @click="toggleList">
          <div class="logo-wrapper">
            <div class="logo" :class="{'highlight':totalCount > 0}">
              <i class="icon-shopping_cart" :class="{'highlight':totalCount > 0}"></i>
            </div>
            <div class="num" v-show="totalCount > 0">{{totalCount}}</div>
          </div>
          <div class="price" :class="{'priceHighLight':totalCount > 0}">￥{{totalPrice}}</div>
          <div class="desc">另需配送费{{deliveryPrice}}元</div>
        </div>
        <div class="content-right" :class="{'enough':totalPrice >= minPrice}" @click="pay">
          <div class="pay" :class="{'enough':totalPrice >= minPrice}">{{payDesc}}</div>
        </div>
      </div>
      <div class="ball-container">
        <transition name="drop" 
          v-for="(ball, index) in balls" 
          :key="index" 
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter">
          <div v-show="ball.show" class="ball">
            <div class="inner inner-hook"></div>
          </div>
        </transition>
      </div>
      <transition name="fold">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="empty">清空</span>
          </div>
          <div class="list-content" ref="listContent">
            <ul>
              <li class="food" v-for="(item, index) in selectFoods" :key="index">
                <span class="name">{{item.name}}</span>
                <div class="food-right">
                  <div class="food-price">
                    <span>￥{{item.price*item.count}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <cartcontrol :food=item></cartcontrol>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div class="list-mask" @click="hideList" v-show="listShow"></div>
    </transition>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  import cartcontrol from "@/components/cartcontrol/cartcontrol"

  export default {
    name: "Shopcart",
    components: {
      BScroll,
      cartcontrol
    },
    data(){
      return{
        balls:[
          {
            show: false
          },{
            show: false
          },{
            show: false
          },{
            show: false
          },{
            show: false
          }
        ],
        dropBall: [],
        fold: true
      }
    },
    props: {
      selectFoods:{
        type: Array,
        default: []
      },
      deliveryPrice:{
        type: Number,
        default: 0
      },
      minPrice:{
        type: Number,
        default: 0
      }
    },
    computed: {
      totalPrice(){
        let total = 0
        this.selectFoods.forEach((food) => {
          total += food.price * food.count
        })
        return total
      },
      totalCount(){
        let count = 0
        this.selectFoods.forEach((food) => {
          count += food.count
        })
        return count
      },
      payDesc(){
        if(this.totalPrice === 0){
          return `￥${this.minPrice}起送`
        }else if(this.totalPrice < this.minPrice){
          let diff = this.minPrice - this.totalPrice
          return `还差￥${diff}起送`
        }else{
          return '去结算'
        }
      },
      listShow(){
        if(!this.totalCount){
          this.fold = true
          return false
        }
        let show = !this.fold
        if(show){
          this.$nextTick(() => {
            if(!this.scroll){
              this.scroll = new BScroll(this.$refs.listContent, {
                click: true
              })
            }else{
              this.scroll.refresh()
            }
          })
        }
        return show
      }
    },
    methods: {
      drop(target){
        for(let i=0; i<this.balls.length; i++){
          let ball = this.balls[i]
          if(!ball.show){
            ball.show = true
            ball.el = target
            this.dropBall.push(ball)
            return
          }
        }
      },
      beforeEnter(el){
        let count = this.balls.length
        while(count--){
          let ball = this.balls[count]
          if(ball.show){
            let rect = ball.el.getBoundingClientRect()
            let x = rect.left - 32
            let y = -(window.innerHeight - rect.top - 22)
            el.style.display = ""
            el.style.webkitTransform = `translate3d(0, ${y}px, 0)`
            el.style.transform = `translate3d(0, ${y}px, 0)`
            let inner = el.getElementsByClassName("inner-hook")[0]
            inner.style.webkitTransform = `translate3d(${x}px, 0, 0)`
            inner.style.transform = `translate3d(${x}px, 0, 0)`
          }
        }
      },
      hideList(){
        this.fold = true
      },
      pay(){
        if(this.totalPrice < this.minPrice){
          return
        }
        alert("支付" + this.totalPrice + "元")
      },
      enter(el, done){
        let rf = el.offestHeight
        this.$nextTick(() => {
          el.style.webkitTransform = 'translate3d(0, 0, 0)'
          el.style.transform = 'translate3d(0, 0, 0)'
          let inner = el.getElementsByClassName("inner-hook")[0]
          inner.style.webkitTransform = 'translate3d(0, 0, 0)'
          inner.style.transform = 'translate3d(0, 0, 0)'
          el.addEventListener('transitionend', done);
        })
      },
      afterEnter(el){
        let ball = this.dropBall.shift()
        if(ball){
          ball.show = false
          el.style.display = "none"
        }
      },
      toggleList(){
        if(!this.totalCount){
          return
        }
        this.fold = !this.fold
      },
      empty(){
        // this.selectFoods.forEach((food) => {
        //   food.count = 0
        // })
        for(let item of this.selectFoods){
          item.count = 0
        }
      }
    }
  }
</script>

<style scoped>
  .all{
    position: fixed;
    bottom: 0;
    z-index: 12;
  }
  .shopcart{
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 50;
    height: 1.28rem;
  }
  .content{
    display: flex;
    background-color: #141d27;
    height: 100%;
    font-size: 0;
  }
  .content-left{
    width: 100%;
    display: flex;
    align-items: center;
  }
  .logo-wrapper{
    display: inline-block;
    position: relative;
    top: -.267rem;
    margin: 0 .32rem;
    padding: .16rem;
    width: 1.493rem;
    height: 1.493rem;
    box-sizing: border-box;
    vertical-align: top;
    border-radius: 50%;
    background-color: #141d27;
  }
  .logo{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #2b343c;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon-shopping_cart{
    font-size: .64rem;
    color: #80858a;
  }
  .highlight{
    background-color: rgb(0, 160, 220);
    color: #fff;
  }
  .num{
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: .64rem;
    height: .427rem;
    border-radius: .427rem;
    font-size: .24rem;
    font-weight: 700;
    color: #fff;
    background-color: rgb(240, 20, 20);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .4)
  }
  .price{
    display: inline-block;
    padding-right: .32rem;
    box-sizing: border-box;
    border-right: 1px solid rgba(255, 255, 255, .1);
    font-size: .427rem;
    font-weight: 700;
    color: rgba(255, 255, 255, .4);
  }
  .priceHighLight{
    color: #fff;
  }
  .desc{
    display: inline-block;
    margin-left: .32rem;
    color: rgba(255, 255, 255, .4);
    font-size: .267rem;
  }
  .content-right{
    width: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2b333b;
  }
  .pay{
    font-size: .32rem;
    font-weight: 700;
    color: rgba(255, 255, 255, .4);
  }
  .enough{
    background-color: #00b43c;
    color: #fff;
  }
  .ball{
    position: fixed;
    left: .853rem;
    bottom: .587rem;
    z-index: 200;
    transition: all .4s cubic-bezier(.49, -.29, .75, .41);
  }
  .inner{
    width: .427rem;
    height: .427rem;
    border-radius: 50%;
    background-color: rgb(0, 160, 220);
    transition: all .4s linear;
  }
  .shopcart-list{
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    transform: translate3d(0, -100%, 0)
  } 
  .fold-enter-active, .fold-leave-active{
    transition: all 0.5s
  }
  .fold-enter, .fold-leave-active{
    transform: translate3d(0, 0, 0)
  }
  .list-header{
    height: 1.067rem;
    padding: 0 .48rem;
    background-color: #f3f5f7;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title{
    font-size: .373rem;
    color: rgb(7, 17, 27)
  }
  .empty{
    font-size: .32rem;
    color: rgb(0, 160, 220);
  }
  .list-content{
    padding: 0 .48rem;
    max-height: 5.787rem;
    background-color: #fff;
    overflow: hidden;
  }
  .food{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .32rem 0;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(7, 17, 27, .1)
  }
  .food:last-child{
    border: none; 
  }
  .name{
    font-size: .373rem;
    color: rgb(7, 17, 27);
  }
  .food-right{
    display: flex;
    align-items: center;
  }
  .food-price{
    font-size: .373rem;
    font-weight: 700;
    color: rgb(240, 20, 20);
  }
  .list-mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
    opacity: 1;
    background-color: rgba(7, 17, 27, .6);
    backdrop-filter: blur(10px);
  }
  .fade-enter-active, .fade-leave-active{
    transition: all .5s;
  }
  .fade-enter, .fade-leave-active{
    opacity: 0;
    background-color: rgba(7, 17, 27, 0)
  }
</style>