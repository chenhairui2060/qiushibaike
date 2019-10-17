<template>
	<view class="home-data u-f-ac">
		<block v-for="(item,index) in homeData" :key="index">
			<view class="flex-1 u-f-ac flex-column">
				<view class="">{{item.num}}</view>
				{{item.name}}
			</view>
		</block>	
	</view>
</template>

<script>
	export default{
	props:{
		homeData:Array
	}
	}
</script>

<style scoped>
	.home-data {
		padding: 20upx 40upx;
		color: #989898;
		font-size: 32upx;
	}
	.home-data > view > view {
		color: #333333;
	}
	.home-adv {
		padding: 20upx;
	}
</style>
