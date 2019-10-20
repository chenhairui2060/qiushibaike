<template>
	<view class="home-info u-f-ac" @tap="ToUserSpace">
		<image :src="homeInfo.userpic" mode="widthFix" lazy-load></image>
		<view class="flex-1">
			<view>
				{{homeInfo.username}}
			</view>
			<view>
				总访客 {{homeInfo.totalnum}} 今日 {{homeInfo.todaynum}}
			</view>
		</view>
		<view class="icon iconfont icon-jinru">
			
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			homeInfo:Object
		},
		methods:{
			ToUserSpace(){
				uni.navigateTo({
					url:"/pages/userSpace/userSpace"
				})
			}
		}
	}
</script>

<style scoped>
	.home-info{
		padding: 20upx 40upx;
	}
	.home-info>view:first-of-type>view:first-child{
		font-size: 32upx;
	}
	.home-info>view:first-of-type>view:last-child{
		color: #BBBBBB;
	}
	.home-info>view:last-of-type{
		height: 100%;
	}
	.home-info>image{
		flex-shrink: 0;
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		margin-right: 15upx;
	}
</style>
