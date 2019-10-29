<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease inner icon-remove_circle_outline" v-show="food.count>0" @click.stop="decreaseCart">
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop="addCart"></div>
  </div>
</template>

<script>
  export default {
    name: "Cartcontrol",
    props: {
      food:{
        type: Object
      }
    },
    methods: {
      addCart(){
        if(!this.food.count){
          this.$set(this.food, 'count', 1)
        }else{
          this.food.count++
        }
        this.$emit("cartAdd", event.target)
      },
      decreaseCart(){
        if(this.food.count){
          this.food.count--
        }
      }
    }
  }
</script>

<style>
  .cartcontrol{
    display: flex;
    align-items: center;
    font-size: .267rem;
  }
  .cart-decrease{
    transition: all .4s linear;
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  .move-enter, .move-leave-to{
    opacity: 0;
    transform: translate3d(24px, 0, 0);
  }
  .cart-count{
    width: .32rem;
    text-align: center;
    color: rgb(147, 153, 159);
  }
  .cart-decrease, .cart-add{
    padding: .16rem;
    font-size: .64rem;
    color: rgb(0, 160, 220);
  }
</style>