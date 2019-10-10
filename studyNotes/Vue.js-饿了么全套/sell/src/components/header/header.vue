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
          <span class="icon" :class="claaMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Header",
    props:{
      seller:{
        type: Object,
        default: ""
      }
    },
    created () {
      this.claaMap = ["decrease", "discount", "special", "invoice", "guarantee"]
    }
  }
</script>

<style scoped>
.header{
  color: #ffffff;
  background-color: #999;
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
</style>