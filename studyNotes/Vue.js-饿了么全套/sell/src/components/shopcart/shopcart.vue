<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'highlight':totalCount > 0}">
            <i class="icon-shopping_cart" :class="{'highlight':totalCount > 0}"></i>
          </div>
          <div class="num" v-show="totalCount > 0">{{totalCount}}</div>
        </div>
        <div class="price" :class="{'priceHighLight':totalCount > 0}">￥{{totalPrice}}</div>
        <div class="desc">另需配送费{{deliveryPrice}}元</div>
      </div>
      <div class="content-right" :class="{'enough':totalPrice >= minPrice}">
        <div class="pay" :class="{'enough':totalPrice >= minPrice}">{{payDesc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Shopcart",
    props: {
      selectFoods:{
        type: Array,
        default: [{count:1,price:20}]
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
        if(count <= 99){
          return count
        }
        return '99+'
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
      }
    }
  }
</script>

<style scoped>
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
</style>