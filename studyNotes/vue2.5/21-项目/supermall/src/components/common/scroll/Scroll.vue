<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default {
    name: "Scroll",
    props:{
      probeType:{
        type: Number,
        default: 0
      },
      pullUpLoad:{
        type: Boolean,
        default: false
      }
    },
    data(){
      return{
        scroll: null
      }
    },
    mounted(){
      // 1.创建 BScroll 对象
      this.scroll  = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      // 2.监听滚动的位置
      this.scroll.on("scroll", (position) => {
        // console.log(position)
        this.$emit("scroll", position.y)
      })
      // 3.监听 scroll 滚动到底部
      this.scroll.on("pullingUp", () => {
        this.$emit("getMore")
      })
    },
    methods:{
      // 返回顶部
      scrollTo(x, y, time){
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      // scroll 滚动重置
      refresh(){
        this.scroll && this.scroll.refresh()
      },
      // 上拉加载完毕
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      },
      // 获取当前滚动的位置
      getScrollY(){
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>
  .wrapper{
    position: relative;
  }
</style>
