<template>
	<view>
		<!-- 聊天列表 -->
		<scroll-view scroll-y="true" :style="'height:'+scrollH +'px;'">
			<block v-for="(item,index) in list" :key="index">
				<user-chat-list :item="item" :index="index" :pretime="index>0?list[index-1].createTime:0"></user-chat-list>
			</block>
		</scroll-view>
		<!-- 底部操作条 -->
		<view style="height: 100upx;" class="fixed-bottom u-f-ac border-top bg-white px-2">
			<input type="text" v-model="content"  value="" class=" flex-1 rounded bg-light p-1" placeholder="文明发言"/>
			<view class="icon iconfont icon-fabu u-f-ajc animated " hover-class="jello text-main"  style="width: 100upx;" @tap="submit">
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
				content:'',
				scrollH:500,
				list:[
					{
						userId:2,
						avatar:'/static/demo/demo66.jpg',
						username:'昵称',
						data:'你好啊',
						type:'text',
						createTime:1571215910
					},
					{
						userId:1,
						avatar:'/static/demo/demo66.jpg',
						username:'曲调',
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
			submit(){
				let obj={
					userId:1,
					avatar:'/static/demo/demo66.jpg',
					username:'曲调',
					data:this.content,
					type:'text',
					createTime:(new Date()).getTime()
				}
				if(this.content===""){
					return uni.showToast({
						title:"消息不能为空",
						icon:'none'
					})
				}
				this.list.push(obj)
			}
		}
	}
</script>

<style scoped>
.icon-fabu{
	font-size: 40upx;
}
</style>
