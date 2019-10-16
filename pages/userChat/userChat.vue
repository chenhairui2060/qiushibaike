<template>
	<view>
		<!-- 聊天列表 -->
		<scroll-view scroll-y="true" :style="'height:'+scrollH +'px;'">
			<block v-for="(item,index) in list" :key="index">
				<user-chat-list :item="item" :index="index"></user-chat-list>
			</block>
		</scroll-view>
		<!-- 底部操作条 -->
		<view style="height: 100upx;" class="fixed-bottom u-f-ac border-top bg-white px-2">
			<input type="text" value="" class=" flex-1 rounded bg-light p-1" placeholder="文明发言"/>
			<view class="icon iconfont icon-fabu u-f-ajc animated " hover-class="jello text-main"  style="width: 100upx;">
			</view>
		</view>
	</view>
</template>

<script>
	import userChatList from "@/components/userChat/userChatList.vue";
	//模拟当前登录用户的userId
	const uid=1;
	export default {
		components:{
			userChatList
		},
		data() {
			return {
				scrollH:500,
				list:[
					{
						userId:2,
						avatar:'/static/demo/demo66.jpg',
						username:'昵称',
						data:'你好啊',
						type:'text',
						createTime:1571215910
					}
				]
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success:(res)=>{
					this.scrollH=res.windowHeight-uni.upx2px(101);
				}
			})
		},
		
		methods: {
			
		}
	}
</script>

<style scoped>
.icon-fabu{
	font-size: 40upx;
}
</style>
