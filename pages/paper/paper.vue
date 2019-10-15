<template>
	<view>
		<!-- 消息列表 -->
		<block v-for="(item,index) in list" :key="index">
			<view class="u-f-ajc p-2 border-bottom">
				<image class="rounded-circle mr-2" :src="item.avatar" style="height: 80upx;width: 80upx;" mode=""></image>
				<view class="u-f flex-column border flex-1">
					<view class="u-f-jsb">
						<text>{{item.username}}</text>
						<text class="text-secondary">{{item.upaate_time}}</text>
					</view>
					<view class="u-f-jsb">
						<text class="text-secondary text-ellipsis" style="max-width: 500upx;">{{item.data}}</text>
						<uni-badge :text="item.noread+''" type="error" size="small"></uni-badge>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import uniBadge from "@/components/uni-badge/uni-badge.vue";
	export default {
		components:{
			uniBadge
		},
		data() {
			return {
				list:[
					{
						avatar:'/static/demo/demo66.jpg',
						username:'曲调',
						upaate_time:'12:20',
						data:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
						noread:20
					},
					{
						avatar:'/static/demo/demo5.jpg',
						username:'阿拉善',
						upaate_time:'14:43',
						data:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
						noread:18
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
