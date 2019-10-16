<template>
	<view class="u-f align-start px-2 mx-2" :style="isSelf?'flex-direction:row-reverse;':''">
		<image style="height: 100upx;width: 100upx;" class="rounded-circle" :src="item.avatar" mode=""></image>
		<view class="bg-light p-2 rounded mx-2" style="max-width: 400upx;min-width: 100upx;">
			{{item.data}}
		</view>
	</view>
</template>

<script>
	//模拟当前登录用户的userId
	const uid=1;
	export default{
		props:{
			item:Object,
			index:Number
		},
		computed:{
			isSelf(){
				return uid==this.item.userId
			}
		}
	}
</script>

<style>
</style>
