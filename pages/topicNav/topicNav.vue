<template>
	<view class="page">
		<swiper-tab :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiper-tab>
		<view class="uni-tab-bar">
			<swiper @change="tabChange" :current="tabIndex" class="swiper-box" :style="{ height: swiperheight + 'px' }">
				<block v-for="(items, index) in tabBars" :key="index">
					<swiper-item>
						<scroll-view scroll-y class="list" @scrolltolower="loadmore(index)">
							<block v-for="(item,idx) in topicList" :key="idx">
								<topic-list :item="item" :index="idx"></topic-list>
							</block>		
						</scroll-view>
					</swiper-item>
				</block>
			</swiper>
		</view>
		
	</view>
</template>

<script>
import topicList from '@/components/news/topicList.vue';
import swiperTab from '@/components/index/swiperTab/swiper-tab.vue';
import loadMore from '@/components/common/loadmore.vue';
import noThing from '@/components/common/noThing.vue';
export default {
	components: {
		topicList,
		swiperTab,
		loadMore,
		noThing
	},
	data() {
		return {
			swiperheight: '',
			tabIndex: 0,
			tabBars: [
				{ name: '关注', id: 'guanzhu' },
				{ name: '推荐', id: 'tuijian' },
				{ name: '体育', id: 'tiyu' },
				{ name: '热点', id: 'redian' },
				{ name: '财经', id: 'caijing' },
				{ name: '娱乐', id: 'yule' }
			],
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
		tabtap(index) {
			this.tabIndex = index;
		},
		tabChange(e) {
			// console.log(JSON.stringify(e.detail.current));
			this.tabIndex = e.detail.current;
		},
		//上拉加载
		loadmore(index) {
			if (this.newsList[index].loadtext != '上拉加载更多') {
				return;
			}
			setTimeout(() => {
				let obj = {
					userpic: '/static/demo/userpic/1.jpg',
					username: '昵称',
					isguanzhu: false,
					title: '',
					type: 'img', //img:图文 video：视频
					titlepic: '/static/demo/datapic/1.jpg',
					infonum: {
						index: 0, //0:没有操作 1.顶 2.踩
						dingnum: 11,
						cainum: 10
					},
					commentnum: 2,
					sharenum: 10
				};
				this.newsList[index].list.push(obj);
				this.newsList[index].loadtext = '加载中...';
			}, 1000);
			// this.newsList[index].loadtext = '没有更多数据了';
		},
		//监听原生搜索框点击事件
		onNavigationBarSearchInputClicked() {
			// console.log('点击了搜索框')
			uni.navigateTo({
				url: '../search/search'
			});
		},
		onNavigationBarButtonTap(e) {
			switch (e.index) {
				case 0:
				console.log('进入签到页面')
					break;
				case 1:
				console.log('进入发布页面')
				uni.navigateTo({
					url:"../addInput/addInput"
				})
					break;
			}
		}
	}
};
</script>

<style>
@import url('topicNav.css');
.page {
	height: 100%;
	width: 100%;
	/* position: absolute; */
}
</style>
