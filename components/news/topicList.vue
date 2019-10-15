<template>
	<view class="u-f-ac p-2" @tap="open">
		<image style="height: 150rpx;width: 150rpx;" class="rounded mr-2" :src="item.cover" mode=""></image>
		<view class="u-f flex-1 flex-column">
			<text>#{{ item.title }}#</text>
			<text class="text-secondary">{{ item.desc }}</text>
			<view class="u-f-ac text-secondary">
				<text class="mr-2">动态：{{ item.news_count }}</text>
				<text>今日：{{ item.today_count }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		  item: {
		      type: Object,
		      // 对象或数组且一定会从一个工厂函数返回默认值
		      default: ()=>{
				  return {}
			  }
		    },
			index:Number
	},
	data() {
		return {};
	},
	methods: {
		open(){
			uni.navigateTo({
				url:"../../pages/topicDetail/topicDetail?item="+JSON.stringify(this.item)
			})
		}
	}
};
</script>

<style></style>
