<template>
	<!-- 主页 -->
	<view class="user-space-userinfo">
		<view class="user-space-userinfo-item">
			<view class="">账号信息</view>
			<view class="">糗龄：{{getRegAge}}</view>
			<view class="">糗事ID:{{userinfo.id}}</view>
		</view>
		<view class="user-space-userinfo-item">
			<view class="">个人信息</view>
			<view class="">星座：{{getXingZuo}}</view>
			<view class="">职业:{{userinfo.zhiye}}</view>
			<view class="">故乡:{{userinfo.path}}</view>
			<view class="">情感:{{userinfo.qinggan}}</view>
		</view>
	</view>
</template>

<script>
	import time from "@/common/time.js"
	export default{
		props:{
			userinfo:Object
		},
		computed:{
			getRegAge(){
				return time.gettime.sumAge(this.userinfo.regtime)
			},
			getXingZuo(){
				return time.gettime.getHoroscope(this.userinfo.birthday)
			}
		}
	}
</script>

<style scoped>
	.user-space-userinfo {
		padding: 0 30upx;
	}
	.user-space-userinfo-item {
		padding: 20upx 0;
		border-bottom: 1upx solid #eeeeee;
	}
	.user-space-userinfo-item > view {
		color: #aaaaaa;
	}
	.user-space-userinfo-item > view:first-child {
		color: #333333;
		font-size: 35upx;
		padding: 15upx 0;
	}
</style>
