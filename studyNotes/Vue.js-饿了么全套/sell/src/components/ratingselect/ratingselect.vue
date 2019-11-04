<template>
  <div class="ratingselect">
    <div class="rating-type">
      <span>{{desc.all}}</span>
      <span>{{desc.positive}}</span>
      <span>{{desc.negative}}</span>
    </div>
    <div class="switch">
      <span class="icon-check_circle"></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
  // 好评
  const POSITIVE = 0
  // // 差评
  const NEFATIVE = 1
  // 全部评论
  const ALL = 2

  export default {
    name: "ratingselect",
    data(){
      return{

      }
    },
    props: {
      ratings:{
        type: Array,
        default(){
          return []
        }
      },
      selectType:{
        type: Number,
        default: ALL
      },
      onlyContent:{
        type: Boolean,
        default: false
      },
      desc:{
        type: Object,
        default(){
          return{
            all: "全部",
            positive: "满意",
            negative: "不满意"
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>