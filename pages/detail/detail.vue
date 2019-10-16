<template>
	<view>
		文章详情页
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(e) {
			// console.log(e)
			let detailData=JSON.parse(e.detailData);
			// console.log(detailData)
			this.initData(detailData)
		},
		onNavigationBarButtonTap(e) {
			console.log(e)
			switch (e.index){
				case 0:
				console.log('分享')
				break;
			}
		},
		methods: {
			initData(obj){
				uni.setNavigationBarTitle({
					title:obj.title
				})
			}
		}
	}
</script>

<style>

</style>
