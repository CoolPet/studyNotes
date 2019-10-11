<template>
  <div class="star" :class="starType">
    <span v-for="(item, index) in itemClasses" class="starItem" :class="item" :key="index"></span>
  </div>
</template>

<script>
  const LENGTH = 5
  const CLS_ON = "on"
  const CLS_HALF = "half"
  const CLS_OFF = "off"

  export default {
    name: "Star",
    props: {
      size:{
        type: Number,
        default: 0
      },
      score:{
        type: Number,
        default: 0
      }
    },
    computed: {
      starType(){
        return 'star-' + this.size
      },
      itemClasses(){
        let result = []
        let score = Math.floor(this.score*2) / 2
        let hasDecimal = score % 1 !==0 
        let integer = Math.floor(score)
        for(let i = 0; i < integer; i++){
          result.push(CLS_ON)
        }
        if(hasDecimal){
          result.push(CLS_HALF)
        }
        while(result.length < LENGTH){
          result.push(CLS_OFF)
        }
        return result
      }
    }
  }
</script>

<style scoped>
  .star{
    font-size: 0;
  }
  .starItem{
    display: inline-block;
    background-repeat: no-repeat;
  }
  .star-48 .starItem{
    width: .533rem;
    height: .533rem;
    margin-right: .587rem;
    background-size: .533rem .533rem;
  }
  .star-48 .starItem:last-child{
    margin-right: 0;
  }
  .star-48 .on{
    background-image: url("~@/assets/star/star48_on@3x.png");
  }
  .star-48 .half{
    background-image: url("~@/assets/star/star48_half@3x.png");
  }
  .star-48 .off{
    background-image: url("~@/assets/star/star48_off@3x.png");
  }
  .star-36 .starItem{
    width: .4rem;
    height: .4rem;
    margin-right: .16rem;
    background-size: .4rem .4rem;
  }
  .star-36 .starItem:last-child{
    margin-right: 0;
  }
  .star-36 .on{
    background-image: url("~@/assets/star/star36_on@3x.png");
  }
  .star-36 .half{
    background-image: url("~@/assets/star/star36_half@3x.png");
  }
  .star-36 .off{
    background-image: url("~@/assets/star/star36_off@3x.png");
  }
  .star-24 .starItem{
    width: .267rem;
    height: .267rem;
    margin-right: .08rem;
    background-size: .267rem .267rem;
  }
  .star-24 .starItem:last-child{
    margin-right: 0;
  }
  .star-24 .on{
    background-image: url("~@/assets/star/star24_on@3x.png");
  }
  .star-24 .half{
    background-image: url("~@/assets/star/star24_half@3x.png");
  }
  .star-24 .off{
    background-image: url("~@/assets/star/star24_off@3x.png");
  }
</style>