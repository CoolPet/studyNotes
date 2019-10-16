<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/index.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/activeIndex.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/classify.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/activeClassify.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/cart.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/activeCart.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/profile.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/activeProfile.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "./components/tabbar/TabBar"
  import TabBarItem from "./components/tabbar/TabBarItem"
  export default {
    name: 'App',
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
</style>
