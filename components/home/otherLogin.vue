<template>
	<view class="other-login u-f-ac">
		<view class="u-f-ajc flex-1"><view class="icon iconfont icon-weixin"></view></view>
		<view class="u-f-ajc flex-1"><view class="icon iconfont icon-xinlangweibo"></view></view>
		<view class="u-f-ajc flex-1"><view class="icon iconfont icon-QQ"></view></view>
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	.other-login {
		padding: 20upx 40upx;
	}
	.other-login > view > view {
		height: 100upx;
		width: 100upx;
		border: 1px solid;
		border-radius: 100%;
		font-size: 55upx;
		text-align: center;
		color: #ffffff;
	}
	.icon-weixin {
		background: #2bd19b;
	}
	.icon-xinlangweibo {
		background: #fc7729;
	}
	.icon-QQ {
		background: #2caefc;
	}
</style>
