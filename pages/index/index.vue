<template>
	<view class="page">
		<swiper-tab :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiper-tab>
		<view class="uni-tab-bar">
			<swiper @change="tabChange" :current="tabIndex" class="swiper-box" :style="{ height: swiperheight + 'px' }">
				<block v-for="(items, index) in newsList" :key="index">
					<swiper-item>
						<scroll-view scroll-y class="list" @scrolltolower="loadmore(index)">
							<template v-if="items.list.length != 0">
								<!-- 图文列表 -->
								<block v-for="(item, idx) in items.list" :key="idx"><index-list :item="item" :index="idx"></index-list></block>
								<!-- 上拉加载 -->
								<view v-if="items.list.length > 10"><load-more :loadtext="items.loadtext"></load-more></view>
							</template>
							<template v-else-if="!items.firstload">
								<view style="font-size: 50upx;color: #C0C0C0;font-weight: bold;padding-top: 100upx;text-align: center;width: 100%;" class="u-f-ajc">
									Loading...
								</view>
							</template>
							<template v-else>
								<!-- 无内容默认 -->
								<no-thing></no-thing>
							</template>
						</scroll-view>
					</swiper-item>
				</block>
			</swiper>
		</view>
	</view>
</template>

<script>
let demodata = [
	{
		loadtext: '上拉加载更多',
		list: [
			{
				userpic: '/static/demo/userpic/1.jpg',
				username: '昵称',
				isguanzhu: false,
				title: '我是标题',
				type: 'img', //img:图文 video：视频
				titlepic: '/static/demo/datapic/1.jpg',
				infonum: {
					index: 0, //0:没有操作 1.顶 2.踩
					dingnum: 11,
					cainum: 10
				},
				commentnum: 2,
				sharenum: 10
			}
		]
	}
];
import indexList from '../../components/index/indexList/index-list.vue';
import swiperTab from '../../components/index/swiperTab/swiper-tab.vue';
import loadMore from '../../components/common/loadmore.vue';
import noThing from '../../components/common/noThing.vue';
export default {
	components: {
		indexList,
		swiperTab,
		loadMore,
		noThing
	},
	data() {
		return {
			swiperheight: '',
			tabIndex: 0,
			tabBars: [], //文章分类
			newsList: []
		};
	},
	onLoad() {
		let that = this;
		uni.getSystemInfo({
			success: function(res) {
				let height = res.windowHeight - uni.upx2px(101);
				that.swiperheight = height;
				console.log(height);
			}
		});
		this.getpostclass();
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
			console.log('上拉加载');
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
					console.log('进入签到页面');
					break;
				case 1:
					console.log('进入发布页面');
					uni.navigateTo({
						url: '../addInput/addInput'
					});
					break;
			}
		},
		async getpostclass() {
			//返回的是Promise对象
			let [err, res] = await this.$http.get('postclass');
			if (err) {
				return uni.showToast({
					title: '获取信息失败',
					icon: 'none'
				});
			}
			if (res.data.errorCode) {
				return uni.showToast({
					title: res.data.msg,
					icon: 'none'
				});
			}
			this.tabBars = res.data.data.list;
			let arr = [];
			for (let i = 0; i < res.data.data.list.length; i++) {
				arr.push({
					loadtext: '上拉加载更多',
					list: [],
					page: 1,
					firstload: false
				});
			}
			this.newsList = arr;
			console.log(arr);
			if (this.tabBars.length != 0) {
				this.getnewsList();
			}
		},
		//获取指定话题分类
		async getnewsList() {
			let url = `topic/${this.tabBars[this.tabIndex].id}/post/${this.newsList[this.tabIndex].page}`;
			let [err, res] = await this.$http.get(url, {}, { token: true });
			if (err) {
				return uni.showToast({
					title: '获取信息失败',
					icon: 'none'
				});
			}
			if (res.data.errorCode) {
				return uni.showToast({
					title: res.data.msg,
					icon: 'none'
				});
			}
			let arr = [];
			let list = res.data.data.list;
			for (let i = 0; i < list.length; i++) {
				arr.push(this.format(list[i]));
			}
			this.newsList[this.tabIndex].list = this.newsList[this.tabIndex].page > 1 ? this.newsList[this.tabIndex].list.concat(arr) : arr;
			this.newsList[this.tabIndex].firstload = true;
			if (list.length < 10) {
				this.newsList[this.tabIndex].loadtext = '没有更多数据了';
			} else {
				this.newsList[this.tabIndex].loadtext = '上拉加载更多';
			}
			console.log('指定话题底下分类', res);
		},
		//格式转换
		format(item) {
			return {
				userid: item.user_id,
				userpic: item.user.userpic,
				username: item.user.username,
				isguanzhu: false,
				id: item.id,
				title: item.title,
				type: 'img', //img:图文，video:视频
				titlepic: item.titlepic,
				video: false,
				path: item.path,
				share: !!item.share,
				infonum: {
					index: item.support.length > 0 ? item.support[0].type + 1 : 0, //0：没有操作，1：顶，2，踩
					dingnum: item.ding_count,
					cainum: item.cai_count
				},
				commentnum: item.comment_count,
				sharenum: item.sharenum
			};
		}
	}
};
</script>

<style>
@import url('index.css');

.page {
	height: 100%;
	width: 100%;
	/* 	overflow: hidden; */
	/* position: absolute; */
}
</style>
