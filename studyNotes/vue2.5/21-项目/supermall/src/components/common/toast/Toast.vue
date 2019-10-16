<template>
  <div v-show="isShow" class="toast">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    // props:{
    //   message:{
    //     type: String,
    //     defualt: ""
    //   },
    //   isShow:{
    //     type: Boolean,
    //     defualt: false
    //   }
    // },
    data(){
      return{
        message: "",
        isShow: false
      }
    },
    methods:{
      show(message, duration=3000){
        this.isShow = true 
        this.message = message

        setTimeout(() => {
          this.isShow = false
        }, duration)
      }
    }
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .75);
    padding: 8px 10px;
    color: #fff;
    border-radius: 5px;
    z-index: 1000;
  }
</style>