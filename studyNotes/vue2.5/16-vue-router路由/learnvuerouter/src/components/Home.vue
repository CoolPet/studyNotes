<template>
	<div>
		<h2>我是首页</h2>
		<p>我是首页,哈哈哈哈</p>
		<router-link to="/home/news">新闻</router-link>
		<router-link to="/home/message">消息</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
  export default {
		name: "Home",
		data(){
			return{
				path: "/home/news"
			}
		},
		// 组件创建
		created() {
			console.log("created")
		},
		// 组件销毁
		destroyed() {
			console.log("destroyed")
		},
		// 活跃组件,只有该组件被保持了状态使用了 kee-alive 时,才是有效的
		activated(){
			this.$router.push(this.path)
		},
		// 组件内导航守卫
		beforeRouteLeave(to, from, next){
			this.path = this.$route.path
			next()
		}
  }
</script>

<style>

</style>