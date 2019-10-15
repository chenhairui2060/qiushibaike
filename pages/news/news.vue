<template>
	<view>
		<!-- 自定义导航栏 -->
		<news-nav-bar :tabIndex="tabIndex" :tabBars="tabBars" @changeTab="changeTab"></news-nav-bar>
		<view class="uni-tab-bar">
			<swiper @change="tabChange" :current="tabIndex" class="swiper-box" :style="{ height: swiperheight + 'px' }">
				<swiper-item>
					<scroll-view scroll-y class="list">
						<!-- 关注 列表-->
						<block v-for="(item, index) in list" :key="item.id"><common-list :item="item" :index="index"></common-list></block>
					</scroll-view>
				</swiper-item>
				<!-- 话题 -->
				<swiper-item>
					<scroll-view scroll-y class="list">
						<!-- 热门分类 -->
						<hot-cate :hotCate="hotCate"></hot-cate>
						<!-- 搜索框 -->
						<view class="p-2">
							<view class="u-f-ajc bg-light rounded py-2 text-secondary">
								<text class="icon iconfont icon-sousuo mr-2"></text>
								搜索话题
							</view>
						</view>
						<!-- 轮播图 -->
						<swiper class="px-2" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
							<swiper-item>
								<image src="/static/demo/banner2.jpg" mode="" style="height: 600upx;width: 100%;" class="rounded"></image>
							</swiper-item>
						</swiper>
						<!--最近更新 -->
						<view class="p-2">
							最近更新
						</view>
						<block v-for="(item,index) in topicList" :key="index">
							<topic-list :item="item" :index="index"></topic-list>
						</block>	
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import commonList from '@/components/common/commonList.vue';
import newsNavBar from '@/components/news/newsNavBar.vue';
import noThing from '@/components/common/noThing.vue';
import hotCate from "@/components/news/hotCate.vue";
import topicList from "@/components/news/topicList.vue";
export default {
	components: {
		uniNavBar,
		commonList,
		newsNavBar,
		noThing,
		hotCate,
		topicList
	},
	data() {
		return {
			tabIndex: 0,
			swiperheight: '',
			tabBars: [{ name: '关注', id: 'guanzhu' }, { name: '话题', id: 'huati' }],
			list: [
				{
					id: 0,
					userpic: '/static/demo/demo66.jpg',
					username: '曲调',
					sex: 0, //0 男 1 女
					age: 25,
					isguanzhu: true,
					title: '我的标题',
					titlepic: '/static/demo/datapic/15.jpg',
					video: false,
					share: false,
					path: '深圳 龙岗',
					sharenum: 20,
					commentnum: 30,
					goodnum: 20
				},
				{
					id: 1,
					userpic: '/static/demo/demo66.jpg',
					username: '曲调',
					sex: 0, //0 男 1 女
					age: 25,
					isguanzhu: true,
					title: '我的标题',
					titlepic: '/static/demo/datapic/15.jpg',
					video: {
						looknum: '20w',
						long: '2:47'
					},
					share: false,
					path: '深圳 龙岗',
					sharenum: 20,
					commentnum: 30,
					goodnum: 20
				},
				{
					id: 2,
					userpic: '/static/demo/demo66.jpg',
					username: '曲调',
					sex: 1, //0 男 1 女
					age: 25,
					isguanzhu: true,
					title: '我的标题',
					video: false,
					share: {
						title: '标题',
						titlepic: '/static/demo/datapic/15.jpg'
					},
					path: '深圳 龙岗',
					sharenum: 20,
					commentnum: 30,
					goodnum: 20
				}
			],
			hotCate: [{ name: '关注' }, { name: '推荐' }, { name: '体育' }, { name: '热点' }, { name: '财经' }, { name: '娱乐' }],
			topicList:[{
				cover:'/static/demo/datapic/15.jpg',
				title:'话题名称',
				desc:'话题描述',
				today_count:0,
				news_count:10
			},
			{
				cover:'/static/demo/datapic/15.jpg',
				title:'话题名称',
				desc:'话题描述',
				today_count:0,
				news_count:10
			},
			{
				cover:'/static/demo/datapic/15.jpg',
				title:'话题名称',
				desc:'话题描述',
				today_count:0,
				news_count:10
			}]
		};
	},
	onLoad() {
		let that = this;
		uni.getSystemInfo({
			success: function(res) {
				let height = res.windowHeight - uni.upx2px(100);
				that.swiperheight = height;
				console.log(height);
			}
		});
	},
	methods: {
		changeTab(index) {
			// console.log(index)
			this.tabIndex = index;
		},
		tabChange(e) {
			this.tabIndex = e.detail.current;
		}
	}
};
</script>

<style scoped></style>
