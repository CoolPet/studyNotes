<template>
  <div class="tab-control">
    <div v-for="(item, index) in title" 
      :key="index" class="tab-control-item" 
      :class="{active : index === currentIndex}"
      @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      title:{
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentIndex: 0
      }
    },
    methods:{
      tabClick(e){
        this.currentIndex = e
        this.$emit("tabClick", e)
      }
    }
  }
</script>

<style>
  .tab-control{
    display: flex;
    justify-content: space-around;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
  }
  .tab-control span{
    padding: 5px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 2px solid var(--color-tint)
  }
</style>