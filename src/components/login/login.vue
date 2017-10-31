<template>
	<div class="login">
		<div class="fixed_bg" style="background:url('http://desk.fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/0F/07/ChMkJlauy1SIMceRAAZ8Rh2A1FAAAH80wMVWFoABnxe831.jpg')"></div>
		<div class="login-info">
			<p class="login_tips">用户名</p>
			<el-input class="input_info" v-model="name" placeholder="请输入内容"></el-input>
			<p class="login_tips">密码</p>
			<el-input class="input_info" v-model="input" type="password" placeholder="请输入内容"></el-input>
			<el-button class="submit" type="info">信息按钮</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				name: '',
				password: ''
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.login
		margin:0
		.fixed_bg
			position:absolute
			top:0
			left:0
			bottom:0
			right:0
			z-index:-2
			&:before
				content:''
				position:absolute
				top:0
				left:0
				bottom:0
				right:0
				background:rgba(0,0,0,0.3)
				z-index:-1
				backdrop-filter:blur(10px)
		.login-info
			width:300px
			position:absolute
			top:45%
			left:50%
			transform:translate3d(-50%,-50%,0)
			height:auto
			.login_tips
				height:50px
				line-height:50px
				margin:0
			.input_info
				color:#fff
				background:transparent
			.submit
				width: 100%
				height: 40px
				margin-top:40px
</style>