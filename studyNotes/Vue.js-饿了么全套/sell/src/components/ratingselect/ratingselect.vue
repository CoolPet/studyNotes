<template>
  <div class="ratingselect">
    <div class="rating-type">
      <span @click="select(2)" class="block positive" :class="{'active':selected==2}">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
      <span @click="select(0)" class="block positive" :class="{'active':selected==0}">{{desc.positive}}<span class="count">{{positives.length}}</span></span>
      <span @click="select(1)" class="block negative" :class="{'active':selected==1}">{{desc.negative}}<span class="count">{{negatives.length}}</span></span>
    </div>
    <div @click="toggleContent" class="switch" :class="{'on': only}">
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
        only: this.onlyContent,
        selected: this.selectType
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
    },
    computed: {
      positives(){
        return this.ratings.filter((rating) => {
          return rating.rateType === POSITIVE
        })
      },
      negatives(){
        return this.ratings.filter((rating) => {
          return rating.rateType === NEFATIVE
        })
      }
    },
    methods: {
      select(type){
        this.selected = type
        this.$emit('select', type)
      },
      toggleContent(){
        this.only = !this.only 
        this.$emit('toggle', this.only)
      }
    }
  }
</script>

<style scoped>
  .rating-type{
    padding: .48rem 0;
    margin: 0 .48rem;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    font-size: 0;
  }
  .block{
    display: inline-block;
    padding: .213rem .32rem;
    margin-right: .213rem;
    border-radius: 1px;
    color: rgb(77, 85, 93);
    font-size: .32rem;
  }
  .block.active{
    color: #ffffff;
  }
  .count{
    font-size: .213rem;
    margin-left: .053rem
  }
  .positive{
    background-color: rgba(0, 160, 220, .2);
  }
  .positive.active{
    background-color: rgba(0, 160, 220);
  }
  .negative{
    background-color: rgba(77, 85, 93, .2);
  }
  .negative.active{
    background-color: rgb(77, 85, 93);
  }
  .switch{
    padding: .32rem .48rem;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    color: rgb(147, 153, 159);
    font-size: 0;
    display: flex;
    align-items: center;
  }
  .icon-check_circle{
    font-size: .64rem;
    margin-right: .107rem;
  }
  .text{
    font-size: .32rem;
  }
  .on .icon-check_circle{
    color: #00c850;
  }
</style>