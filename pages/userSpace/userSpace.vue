<template>
	<view>
		<!-- 背景图+用户基本信息 -->
		<user-space-head :userinfo="userinfo"></user-space-head>
		<!-- 统计 -->
		<view class="user-space-content"><home-data :homeData="homeData"></home-data></view>
		<view style="height: 20upx;background: #F4F4F4;"></view>
		<!-- tab导航 -->
		<swiper-tab scrollItemStyle="width:33.33%;" scrollStyle="border-bottom: 0;" :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiper-tab>
		<!-- 主页 -->
		<user-space-info :userinfo="userinfo"></user-space-info>
	</view>
</template>

<script>
import userSpaceHead from '@/components/userSpace/userSpaceHead.vue';
import homeData from '@/components/home/homeData.vue';
import swiperTab from '@/components/index/swiperTab/swiper-tab.vue';
import userSpaceInfo from "@/components/userSpace/userSpaceInfo.vue";

export default {
	components: {
		userSpaceHead,
		homeData,
		swiperTab,
		userSpaceInfo
	},
	data() {
		return {
			userinfo: {
				bgimg: 1,
				userpic: '/static/demo/userpic/11.jpg',
				username: '曲调',
				sex: 0,
				age: 18,
				isguanzhu: false,
				regtime:'2019-01-11',
				qinggan: '未婚',
				zhiye: 'IT',
				id:1316,
				birthday: '1999-12-18',	
				path:'广东广州'
			},
			homeData: [
				{
					name: '获赞',
					num: '10K'
				},
				{
					name: '关注',
					num: 11
				},
				{
					name: '粉丝',
					num: 12
				}
			],
			tabIndex: 0,
			tabBars: [{ classname: '主页', id: 'zhuye' }, { classname: '糗事', id: 'qiushi' }, { classname: '动态', id: 'dongtai' }]
		};
	},
	methods: {
		tabtap(index) {
			this.tabIndex = index;
		}
	}
};
</script>

<style scoped>
.user-space-content {
	background: #ffffff;
	position: relative;
	z-index: 10;
	border-top-left-radius: 20upx;
	border-top-right-radius: 20upx;
	margin-top: -20upx;
}

</style>
