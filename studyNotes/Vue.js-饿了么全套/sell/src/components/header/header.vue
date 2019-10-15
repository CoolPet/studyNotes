<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper"  @click="showDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="backgroud">
      <img :src="seller.avatar">
    </div>
    <transition name="fade">
      <div v-show="detailShow" class="detail">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="detail-name">{{seller.name}}</h1>
            <div class="star-wrapper">
              <star :size="48" :score="seller.score"/>
            </div>
            <div class="detail-title">
              <div class="detail-line"></div>
              <div class="detail-text">优惠信息</div>
              <div class="detail-line"></div>
            </div>
            <ul v-if="seller.supports" class="detail-supports">
              <li class="support-item" v-for="(item, index) in seller.supports" :key="index">
                <span class="detail-icon" :class="classMap[item.type]"></span>
                <span class="support-text">{{item.description}}</span>
              </li>
            </ul>
            <div class="detail-title">
              <div class="detail-line"></div>
              <div class="detail-text">商家公告</div>
              <div class="detail-line"></div>
            </div>
            <div class="bulletin">
              <p class="bulletin-content">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail-close">
          <i class="icon-close" @click="closeDetail"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Star from "@/components/star/star"

  export default {
    name: "Header",
    props:{
      seller:{
        type: Object,
        default: ""
      }
    },
    components: {
      Star
    },
    data(){
      return{
        detailShow: false
      }
    },
    created () {
      this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"]
    },
    methods: {
      showDetail(){
        this.detailShow = true
      },
      closeDetail(){
        this.detailShow = false
      }
    }
  }
</script>

<style scoped>
.header{
  color: #ffffff;
  position: relative;
  background-color: rgba(7, 17, 27, 0.5)
}
.content-wrapper{
  padding: 0.64rem 0.32rem 0.48rem 0.64rem;
  font-size: 0;
  position: relative;
}
.avatar{
  display: inline-block;
  vertical-align: top;
}
.avatar img{
  width: 1.71rem;
  height: 1.71rem;
  border-radius: 0.053rem;
}
.content{
  display: inline-block;
  margin-left: 0.43rem;
}
.title{
  margin: 0.053rem 0 0.213rem 0;
  display: flex;
  align-items: center;
}
.brand{
  display: inline-block;
  vertical-align: top;
  width: 0.8rem;
  height: 0.48rem;
  background-image: url("~@/assets/header/brand@3x.png");
  background-size: 0.8rem 0.48rem;
  background-repeat: no-repeat;
}
.name{
  margin-left: .16rem;
  font-size: 0.4rem;
  line-height: 0.48rem;
  font-weight: bold;
}
.description{
  margin-bottom: 0.27rem;
  line-height: 0.32rem;
  font-size: 0.32rem;
}
.support{
  display: flex;
  align-items: center;
}
.icon{
  display: inline-block;
  width: .32rem;
  height: .32rem;
  margin-right: .11rem;
  background-size: .32rem .32rem;
  background-repeat: no-repeat;
}
.decrease{
  background-image: url("~@/assets/header/decrease_1@3x.png");
}
.discount{
  background-image: url("~@/assets/header/discount_1@3x.png");
}
.special{
  background-image: url("~@/assets/header/special_1@3x.png");
}
.invoice{
  background-image: url("~@/assets/header/invoice_1@3x.png");
}
.guarantee{
  background-image: url("~@/assets/header/guarantee_1@3x.png");
}
.text{
  line-height: .32rem;
  font-size: .27rem;
}
.support-count{
  position: absolute;
  right: .32rem;
  bottom: .373rem;
  padding: 0 0.21rem;
  height: .64rem;
  line-height: .64rem;
  border-radius: .37rem;
  background-color: rgba(0, 0, 0, .2);
  text-align: center;
  display: flex;
  align-items: center;
}
.count{
  font-size: 0.27rem;
}
.support-count .icon-keyboard_arrow_right{
  font-size: .27rem;
  margin-left: .053rem;
}
.bulletin-wrapper{
  position: relative;
  height: .75rem;
  line-height: .75rem;
  padding: 0 .59rem 0 .32rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: rgba(7, 17, 27, 0.2);
  font-size: .27rem;
}
.bulletin-title{
  display: inline-block;
  vertical-align: top;
  margin-top: .21rem;
  width: .59rem;
  height: .32rem;
  background-image: url("~@/assets/header/bulletin@3x.png");
  background-size: .59rem .32rem;
  background-repeat: no-repeat;
}
.bulletin-text{
  vertical-align: top;
  margin: 0 .11rem;
  font-size: .27rem;
}
.bulletin-wrapper .icon-keyboard_arrow_right{
  position: absolute;
  font-size: .27rem;
  right: .32rem;
  top: .21rem;
}
.backgroud{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(.27rem);
}
.backgroud img{
  width: 100%;
  height: 100%;
}
.detail{
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  transition: all .5s;
  background-color: rgba(7, 17, 27, .8);
  backdrop-filter: blur(10px);
}
.fade-transiton{
  opacity: 1;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.clearfix{
  display: inline-block;
}
.clearfix::after{
  display: block;
  content: ".";
  height: 0;
  line-height: 0;
  clear: both;
  visibility: hidden;
}
.detail-wrapper{
  width: 100%;
  min-height: 100vh;
}
.detail-main{
  margin-top: 1.707rem;
  padding-bottom: 1.707rem;
}
.detail-close{
  position: relative;
  width: .853rem;
  height: .853rem;
  margin: -1.707rem auto 0 auto;
  clear: both;
  font-size: .853rem;
}
.detail-name{
  line-height: .427rem;
  text-align: center;
  font-size: .427rem;
  font-weight: 700;
}
.star-wrapper{
  margin-top: .48rem;
  padding: .053rem 0;
  text-align: center;
}
.detail-title{
  display: flex;
  align-items: center;
  width: 80%;
  margin: .747rem auto .64rem auto;
}
.detail-line{
  flex: 1;
  border-bottom: 1px solid rgba(255, 255, 255, .2)
}
.detail-text{
  padding: 0 .32rem;
  font-size: .373rem;
  font-weight: 700;
}
.detail-supports{
  width: 80%;
  margin: 0 auto;
}
.support-item{
  padding: 0 .32rem;
  margin-bottom: .32rem;
  font-size: 0;
  display: flex;
  align-items: center;
}
.support-item:last-child{
  margin-bottom: 0;
}
.detail-icon{
  display: inline-block;
  width: .427rem;
  height: .427rem;
  margin-right: .16rem;
  background-size: .427rem .427rem;
  background-repeat: no-repeat;
}
.support-text{
  font-size: .32rem;
  line-height: .32rem;
}
.support-item .decrease{
  background-image: url("~@/assets/header/decrease_2@3x.png");
}
.support-item .discount{
  background-image: url("~@/assets/header/discount_2@3x.png");
}
.support-item .special{
  background-image: url("~@/assets/header/special_2@3x.png");
}
.support-item .invoice{
  background-image: url("~@/assets/header/invoice_2@3x.png");
}
.support-item .guarantee{
  background-image: url("~@/assets/header/guarantee_2@3x.png");
}
.bulletin{
  width: 80%;
  margin: 0 auto;
}
.bulletin-content{
  padding: 0 .32rem;
  line-height: .64rem;
  font-size: .32rem;
}
</style>