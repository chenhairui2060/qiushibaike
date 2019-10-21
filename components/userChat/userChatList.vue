<template>
	<view >
		<view class="py-2 u-f-ajc text-secondary" v-if="shortTime">
			{{shortTime}}
		</view>
		<!-- 消息气泡 -->
		<view class="u-f align-start px-2 mx-2" :style="isSelf?'flex-direction:row-reverse;':''">
			<image style="height: 100upx;width: 100upx;" class="rounded-circle" :src="item.avatar" mode=""></image>
			<view class="bg-light p-2 rounded mx-2" style="max-width: 400upx;">
				{{item.data}}
			</view>
		</view>
	</view>
</template>

<script>
	import time from "@/common/time.js";
	//模拟当前登录用户的userId
	const uid=1;
	export default{
		props:{
			item:Object,
			index:Number,
			pretime:[Number,String]
		},
		computed:{
			isSelf(){
				return uid==this.item.userId
			},
			//转化时间
			shortTime(){
				return time.gettime.getChatTime(this.item.createTime,this.pretime)
			}
		}
	}
</script>

<style>
</style>
