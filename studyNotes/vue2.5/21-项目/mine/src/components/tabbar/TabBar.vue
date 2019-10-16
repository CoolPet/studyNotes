<template>
  <van-tabbar v-model="active" class="active_tab">
    <van-tabbar-item
      v-for="(item,index) in tabbars"
      :key="index"
      @click="tab(index,item.name)"
    >
      <span :class="currIndex == index ? active:''">{{item.title}}</span>
      <template slot="icon" slot-scope="props">
        <img :src="props.active ? item.active : item.normal">
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      currIndex: 0,
      active: 0,
      tabbars: [
        {
          name: "home",
          title: "首页",
          normal: require("@/assets/img/tabbar/home.svg"),
          active: require("@/assets/img/tabbar/home_active.svg")
        },
        {
          name: "category",
          title: "分类",
          normal: require("@/assets/img/tabbar/category.svg"),
          active: require("@/assets/img/tabbar/category_active.svg")
        },
        {
          name: "cart",
          title: "购物车",
          normal: require("@/assets/img/tabbar/shopcart.svg"),
          active: require("@/assets/img/tabbar/shopcart_active.svg")
        },
        {
          name: "profile",
          title: "个人中心",
          normal: require("@/assets/img/tabbar/profile.svg"),
          active: require("@/assets/img/tabbar/profile_active.svg")
        }
      ]
    };
  },
  methods: {
    tab(index, val) {
      this.currIndex = index;
      this.$router.push(val);
    }
  }
};
</script>

<style scoped>
.active_tab img {
  width: 26px;
  height: 26px;
}

.van-tabbar-item--active {
  color: #e10f02;
}
</style>