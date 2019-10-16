<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index" class="recommend-item">
      <a :href=item.link>
        <img v-lazy=item.image alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props:{
      recommend:{
        type: Array,
        defualt(){
          return []
        }
      }
    }
  }
</script>

<style>
  .recommend{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 12px;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>