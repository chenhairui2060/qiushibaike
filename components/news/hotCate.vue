<template>
	<view >
		<view class="u-f-jsb px-2">
			<text>热门分类</text>
			<view class="u-f-ac"  @tap="openMore">
				更多
				<text class="icon iconfont icon-jinru"></text>
			</view>
		</view>
		<view class="u-f-ac py-3 px-2 border-bottom">
			<block v-for="(item, index) in hotCate" :key="index">
				<view class="border rounded bg-light mx-1 px-2 text-secondary" @tap="openDetail(item)">{{ item.name }}</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			hotCate:Array
		},
		methods:{
			openMore(){
				console.log('更多')
				uni.navigateTo({
					url:"../../pages/topicNav/topicNav"
				})
			},
			openDetail(item){
				console.log(item)
			}
		}
	}
</script>

<style>
</style>
