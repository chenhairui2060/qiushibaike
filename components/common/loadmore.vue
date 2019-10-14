<template>
	<view class="load-more">{{loadtext }}</view>
</template>

<script>
export default {
	props: {
		loadtext: String
	},
	data() {
		return {};
	},
	onLoad() {},
	methods: {
		
	}
};
</script>

<style scoped>
	.load-more{
		text-align: center;
		color: #aaaaaa;
		padding: 15upx;
	}
</style>
