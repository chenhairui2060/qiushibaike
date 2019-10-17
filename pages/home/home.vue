<template>
	<view>
		<!-- 未登录 -->
		<template v-if="!isLogin">
			<view class="u-f-ajc">登录糗事百科，体验更多功能</view>
			<!-- 第三方登录 -->
			<other-login></other-login>
			<!-- 账号密码登录 -->
			<view class="u-f-ajc">
				账号密码登录
				<view class="icon iconfont icon-jinru"></view>
			</view>
		</template>
		<!-- 登录 -->
		<template>
			<home-info :homeInfo="homeInfo"></home-info>
		</template>
		<!-- 数据 -->
		<home-data :homeData="homeData"></home-data>
		<!-- 广告位 -->
		<view class="home-adv u-f-ajc"><image src="/static/demo/datapic/1.jpg" mode="widthFix" lazy-load></image></view>
		<!-- 功能列表 -->
		<view class="home-list">
			<block v-for="(item, index) in list" :key="index"><home-list-item :item="item" :index="index"></home-list-item></block>
		</view>
	</view>
</template>

<script>
import homeListItem from '@/components/home/homeListItem.vue';
import homeInfo from '@/components/home/homeInfo.vue';
import otherLogin from "@/components/home/otherLogin.vue"
import homeData from '@/components/home/homeData.vue';
export default {
	components: {
		homeListItem,
		homeInfo,
		homeData,
		otherLogin
	},
	data() {
		return {
			isLogin: true,
			list: [
				{
					icon: 'liulan',
					name: '浏览历史',
					clicktype:'',
					url:''
				},
				{
					icon: 'huiyuanvip',
					name: '糗百认证',
					clicktype:'',
					url:''
				},
				{
					icon: 'keyboard',
					name: '审核糗事',
					clicktype:'',
					url:''
				}
			],
			homeInfo: {
				userpic: '/static/demo/demo66.jpg',
				username: '昵称',
				totalnum: 2,
				todaynum: 1
			},
			homeData: [
				{
					name: '糗事',
					num: 0
				},
				{
					name: '动态',
					num: 0
				},
				{
					name: '评论',
					num: 0
				},
				{
					name: '收藏',
					num: 0
				}
			]
		};
	},
	onNavigationBarButtonTap(e) {
		switch (e.index) {
			case 0:
				// console.log('设置页');
				uni.navigateTo({
					url:"../userSet/userSet"
				})
				break;
		}
	},
	methods: {}
};
</script>

<style scoped>
.home-adv > image {
	border-radius: 20upx;
	height: 150upx;
}
.home-list {
	padding: 20upx;
}
</style>
