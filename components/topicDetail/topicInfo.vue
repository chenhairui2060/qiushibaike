<template>
	<view class="bg-white">
		<view >
			<image class="filter" :src="item.cover" mode="aspectFill" style="height: 300upx;width: 100%;"></image>
		</view>
		<view class="px-2 pb-2">
			<view class="u-f ">
				<image :src="item.cover" style="height: 150upx;width: 150upx; margin-top: -75upx;" class="rounded mr-2"></image>
				<text>#{{item.title}}#</text>
			</view>
			<view class="u-f-ac text-secondary">
				<text class="mr-2">动态：{{item.news_count}}</text>
				<text>今日：{{item.today_count}}</text>
			</view>
			<view class="text-secondary">{{item.desc}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			item:Object
		}
	}
</script>

<style scoped>
	.filter{
		filter: blur(10upx);
	}
	
	.page{
		height: 100%;
		width: 100%;
		background: #E5E5E5;
	}
</style>
