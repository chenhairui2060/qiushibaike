<template>
	<view>
		<!-- 消息列表 -->
		<template v-if="list.length">
			<block v-for="(item, index) in list" :key="index"><msg-list :item="item" :index="index"></msg-list></block>
		</template>
		<template v-else>
			<no-thing></no-thing>
		</template>
		<!-- 弹出层 -->
		<uni-popup ref="popup" :type="type">
			<view class="u-f-ajc  border mb-1" hover-class="bg-light" @tap="popupEvent('friend')">
				<text class="icon iconfont icon-sousuo mr-1"></text>
				添加好友
			</view>
			<view class="u-f-ajc border" hover-class="bg-light" @tap="popupEvent('clear')">
				<text class="icon iconfont icon-qingchu mr-1"></text>
				清除列表
			</view>
		</uni-popup>
	</view>
</template>

<script>
const demo = [
	{
		avatar: '/static/demo/demo66.jpg',
		username: '曲调',
		upaate_time: 1571187167,
		data: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
		noread: 20
	},
	{
		avatar: '/static/demo/demo5.jpg',
		username: '阿拉善',
		upaate_time: 1571187190,
		data: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
		noread: 18
	},
	{
		avatar: '/static/demo/demo5.jpg',
		username: '阿拉善',
		upaate_time: 1571187212,
		data: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
		noread: 18
	},
	{
		avatar: '/static/demo/demo5.jpg',
		username: '阿拉善',
		upaate_time: 1571187264,
		data: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
		noread: 18
	}
];
import msgList from '@/components/msg/msgList.vue';
import noThing from '@/components/common/noThing.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
export default {
	components: {
		msgList,
		noThing,
		uniPopup
	},
	data() {
		return {
			list: [
				{
					avatar: '/static/demo/demo5.jpg',
					username: '阿拉善',
					upaate_time: 1571187264,
					data: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
					noread: 18
				}
			],
			type: 'top'
		};
	},
	//监听下拉刷新
	onPullDownRefresh() {
		this.refresh();
	},
	//监听原生导航栏按钮事件
	onNavigationBarButtonTap(e) {
		console.log(e);
		switch (e.index) {
			case 0: //左边
			    this.User.navigate({url:"../userList/userList"})
				this.$refs.popup.close();
				break;
			case 1: //右边
				this.$refs.popup.open();
				break;
		}
	},
	onLoad() {
		// console.log($T)
	},
	methods: {
		//下拉刷新
		refresh() {
			setTimeout(() => {
				this.list = demo;
				//停止下拉刷新
				uni.stopPullDownRefresh();
			}, 2000);
		},
		popupEvent(e) {
			switch (e) {
				case 'friend':
					console.log('添加好友');
					break;
				case 'clear':
					console.log('清除列表');
					break;
			}
			//关闭弹出层
			this.$refs.popup.close();
		}
	}
};
</script>

<style></style>
