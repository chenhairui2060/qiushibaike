<template>
	<view class="u-f-ajc p-2 border-bottom" @tap="navChat">
		<image class="rounded-circle mr-2" :src="item.avatar" style="height: 80upx;width: 80upx;" mode=""></image>
		<view class="u-f flex-column border flex-1">
			<view class="u-f-jsb">
				<text>{{item.username}}</text>
				<text class="text-secondary">{{item.upaate_time | formatTime}}</text>
			</view>
			<view class="u-f-jsb">
				<text class="text-secondary text-ellipsis" style="max-width: 500upx;">{{item.data}}</text>
				<uni-badge :text="item.noread+''" type="error" size="small"></uni-badge>
			</view>
		</view>
	</view>
</template>

<script>
	import uniBadge from "@/components/uni-badge/uni-badge.vue";
	import $T from "@/common/time.js"
	export default{
		components:{
			uniBadge
		},
		props:{
			item:{
				type:Object,
				default: ()=>{
					return {}
				}
			},
			index:Number
		},
		//过滤器
		filters:{
			formatTime(value){
				return $T.gettime.gettime(value)
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			navChat(){
				uni.navigateTo({
					url:"../../pages/userChat/userChat"
				})
			}
		}
	}
</script>

<style scoped>
</style>
