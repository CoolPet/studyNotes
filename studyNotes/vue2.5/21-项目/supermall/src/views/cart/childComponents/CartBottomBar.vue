<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :is-checked="isSelectAll" class="check-button" @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div>
      合计:￥{{totalPrice}}
    </div>
    <div class="calculate" :class="{noCalculate : !buttonShow}" @click="calcClick">去计算({{checkLength}})</div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton"

  export default {
    name: "CartBottomBar",
    components:{
      CheckButton
    },
    computed:{
      totalPrice(){
        return this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0)   // 这里的 0 为初始值
      },
      checkLength(){
        return this.$store.state.cartList.filter(item => item.checked).length
      },
      buttonShow(){
        if(this.checkLength == 0) return false
        return true
      },
      isSelectAll(){
        if(this.$store.state.cartList.length === 0) return false
        // 1.使用 filter 函数找到所有 !item.checked(性能低)
        // return !(this.$store.state.cartList.filter(item => !item.checked).length)
        // 2.使用 find 函数只要找到一个有 !item.checked(性能高)
        return !this.$store.state.cartList.find(item => !item.checked)
        // 3.使用 for 循环遍历判断是否有 !item.checked
        // for(let item of this.$store.state.cartList){
        //   if(!item.checked){
        //     return false
        //   }
        // }
        // return true
      }
    },
    methods:{
      checkClick(){
        if(this.isSelectAll){   // 全部选择的情况下
          this.$store.state.cartList.forEach(item => item.checked = false)
        }else{    // 部分或全部不选择的情况下
          this.$store.state.cartList.forEach(item => item.checked = true)
        }
      },
      calcClick(){
        console.log(this.buttonShow)
        if(!this.isSelectAll){
          this.$toast.show("请选择购买的商品", 2000)
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    height: 40px;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
  }
  .check-content{
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .check-button{
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
  }
  .calculate{
    width: 90px;
    height: 40px;
    background-color: red;
    line-height: 40px;
    text-align: center;
    color: #fff;
  }
  .noCalculate{
    background: #99a2aa;
  }
</style>