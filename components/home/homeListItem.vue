<template>
	<view class="u-f-jsb home-list-item" hover-class="home-list-hover" @tap="openEvent(item)">
		<view class="u-f-ac">
			<view v-if="item.icon" class="icon iconfont mr-1" :class="['icon-' + item.icon]"></view>
			{{ item.name }}
		</view>
		<view class="icon iconfont icon-jinru"></view>
	</view>
</template>

<script>
export default {
	props: {
		item: Object,
		index: Number
	},
	methods: {
		openEvent(item) {
			switch (item.clicktype) {
				case 'navigateTo':
					if (item.url) {
						uni.navigateTo({
							url: item.url
						});
					}
					break;
				case 'switchTab':
					if (item.url) {
						uni.switchTab({
							url: item.url
						})
					}
					break;
			}
		}
	}
};
</script>

<style scoped>
.home-list-item {
	padding: 20upx;
	border-bottom: 1upx solid #f4f4f4;
}
.home-list-item > view:last-child {
	color: #cccccc;
}
.home-list-item > view:first-child {
	color: #333333;
}
.home-list-hover {
	background: #f4f4f4;
}
</style>
