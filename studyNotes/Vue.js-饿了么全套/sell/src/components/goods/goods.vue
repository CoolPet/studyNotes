<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menu">
      <ul>
        <li v-for="(item, index) in goods" :key="index" class="menu-item">
          <span class="text">
            <span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foods">
      <ul>
        <li v-for="(item, index) in goods" :key="index" class="foods-list foods-list-hook">
          <h1 class="foods-title">{{item.name}}</h1>
          <ul>
            <li v-for="(foods, index) in item.foods" :key="index"  class="foods-item">
              <div class="foods-icon">
                <img :src="foods.icon" alt="">
              </div>
              <div class="foods-content">
                <h2 class="foods-name">{{foods.name}}</h2>
                <p class="foods-desc">{{foods.description}}</p>
                <div class="foods-extra">
                  <span class="foods-count">月售{{foods.sellCount}}</span><span>好评率{{foods.rating}}%</span>
                </div>
                <div class="foods-price">
                  <span class="newPrice">￥{{foods.price}}</span><span v-show="foods.oldPrice" class="oldPrice">￥{{foods.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"

  export default {
    name: "Goods",
    props: {
      seller:{
        type: Object,
        default: ""
      }
    },
    data(){
      return{
        goods: [],
        listHeight: [],
        scrollY: 0
      }
    },
    computed: {
      currentIndex(){
        for(let i = 0; i< this.listHeight.length; i++){
          let height1 = this.listHeight[i]
          let height2 = this.listHeight[i+1]
        }
      }
    },
    created () {
      this.$axios.get("/api/goods").then((res) => {
        if(res.data.errno === 0){
          this.goods = res.data.goods
          this.$nextTick(() => {
            this.initScroll()
            this.calculateHeight()
          })
        }
      })
      this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"]
    },
    methods: {
      initScroll(){
        this.menuScroll = new BScroll(this.$refs.menu, {})
        this.foodsScroll = new BScroll(this.$refs.foods, {
          probeType: 2
        }) 
        this.foodsScroll.on("scroll", (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y))
        })
      },
      calculateHeight(){
        let foodList = this.$refs.foods.getElementsByClassName("foods-list-hook")
        let height = 0
        this.listHeight.push(height)
        for(let item of foodList){
          height += item.offsetHeight
          this.listHeight.push(height)
        }
      }
    }
  }
</script>

<style scoped>
  .goods{
    position: absolute;
    top: 4.65rem;
    width: 100%;
    bottom: 1.23rem;
    display: flex;
    overflow: hidden;
  }
  .menu-wrapper{
    width: 2.13rem;
    background-color: #f3f5f7;
  }
  .menu-item{
    display: table;
    height: 1.44rem;
    width: 1.49rem;
    line-height: .37rem;
    margin: auto;
  }
  .icon{
    display: inline-block;
    width: .32rem;
    height: .32rem;
    margin-right: .053rem;
    background-size: .32rem .32rem;
    background-repeat: no-repeat;
  }
  .text{
    display: table-cell;
    width: 1.49rem;
    vertical-align: middle;
    font-size: .32rem;
    border-bottom: 1px solid rgba(7, 17, 27, .1)
  }
  .text:last-child{
    border-bottom: none;
  }
  .decrease{
    background-image: url("~@/assets/goods/decrease_3@3x.png");
  }
  .discount{
    background-image: url("~@/assets/goods/discount_3@3x.png");
  }
  .special{
    background-image: url("~@/assets/goods/special_3@3x.png");
  }
  .invoice{
    background-image: url("~@/assets/goods/invoice_3@3x.png");
  }
  .guarantee{
    background-image: url("~@/assets/goods/guarantee_3@3x.png");
  }
  .foods-wrapper{
    width: 100%;
  }
  .foods-title{
    padding-left: .373rem;
    height: .693rem;
    line-height: .693rem;
    border-left: .053rem solid #d9dde1;
    font-size: .32rem;
    color: rgb(147, 153, 159);
    background-color: #f3f5f7;
  }
  .foods-item{
    display: flex;
    margin: .48rem;
    padding-bottom: .48rem;
    border-bottom: .027rem solid rgba(7, 17, 27, .1);
  }
  .foods-item:last-child{
    border: none;
    margin-bottom: 0;
  }
  .foods-icon{
    width: 1.52rem;
    height: 1.57rem;
    margin-right: .267rem;
  }
  .foods-icon img{
    width: 1.52rem;
    height: 1.57rem;
  }
  .foods-content{
    width: 100%;
  }
  .foods-name{
    margin: .053rem 0 .213rem 0;
    font-size: .373rem;
    height: .373rem;
    line-height: .373rem;
    color: rgb(7, 17, 27);
  }
  .foods-desc{
    margin-bottom: .213rem;
    font-size: .267rem;
    line-height: .32rem;
    color: rgb(147, 153, 159)
  }
  .foods-extra{
    line-height: .267rem;
    font-size: .267rem;
    color: rgb(147, 153, 159)
  }
  .foods-count{
    margin-right: .32rem;
  }
  .foods-price{
    font-weight: 700;
    line-height: .64rem;
  }
  .newPrice{
    font-size: .373rem;
    color: rgb(240, 20, 20);
    margin-right: .213rem;
  }
  .oldPrice{
    text-decoration: line-through;
    font-size: .267rem;
    color: rgb(147, 153, 159);
  }
</style>