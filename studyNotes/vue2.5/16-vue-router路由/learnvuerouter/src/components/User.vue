<template>
  <div>
		<h2>我是{{$route.params.id}}用户</h2>
	</div>
</template>

<script>
  export default {
    name: "User",
    created(){
      console.log("created")
    },
    destroyed(){
      console.log("destroyed")
    }
  }
</script>

<style>

</style>