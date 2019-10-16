<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="cart-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>

    <!-- 商品列表 -->
    <cart-list />

    <!-- 底部汇总 -->
    <cart-bottom-bar />
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import CartList from "./childComponents/CartList"
  import CartBottomBar from "./childComponents/CartBottomBar"

  import {mapGetters} from "vuex"

  export default {
    name: "Cart",
    data(){
      return{

      }
    },
    components:{
      NavBar,
      CartList,
      CartBottomBar
    },
    computed:{
      // 1.普通方式
      // cartLength(){
      //   return this.$store.getters.cartLength
      // }
      // 2.使用 vuex 中的 mapGetters 辅助函数
      // 方式一:使用数组方式的话,需要组件中使用的计算属性名称和在 vuex 中 getters 定义的名称相同
      ...mapGetters([
        "cartLength"
      ])
      // 方式二:使用对象的方法,可以自定义组件中计算属性的名称
      // ...mapGetters({
      //   length: "cartLength"
      // })
    }
  }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .cart-bar{
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>