<template>
	<view>
		<!-- 未登录 -->
		<view class="u-f-ajc">登录糗事百科，体验更多功能</view>
		<!-- 第三方登录 -->
		<view class="other-login u-f-ac">
			<view class="u-f-ajc flex-1"><view class="icon iconfont icon-weixin"></view></view>
			<view class="u-f-ajc flex-1"><view class="icon iconfont icon-xinlangweibo"></view></view>
			<view class="u-f-ajc flex-1"><view class="icon iconfont icon-QQ"></view></view>
		</view>
		<!-- 账号密码登录 -->
		<view class="u-f-ajc">账号密码登录</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onNavigationBarButtonTap(e) {
		switch (e.index) {
			case 0:
				console.log('分享');
				break;
		}
	},
	methods: {}
};
</script>

<style scoped>
	.other-login{
		padding: 20upx 40upx;
	}
	.other-login>view>view{
		height: 100upx;
		width: 100upx;
		border: 1px solid;
		border-radius: 100%;
		font-size: 55upx;
		text-align: center;
		color: #FFFFFF;
	}
	.icon-weixin{
		background: #2bD19B;
	}
	.icon-xinlangweibo{
		background: #FC7729;
	}
	.icon-QQ{
		background: #2CAEFC;
	}
</style>
