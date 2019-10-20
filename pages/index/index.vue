<template>
	<view class="page">
		<swiper-tab :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiper-tab>
		<view class="uni-tab-bar">
			<swiper @change="tabChange" :current="tabIndex" class="swiper-box" :style="{ height: swiperheight + 'px' }">
				<block v-for="(items, index) in newsList" :key="index">
					<swiper-item>
						<scroll-view scroll-y class="list" @scrolltolower="loadmore(index)">
							<template v-if="items.list.length > 0">
								<!-- 图文列表 -->
								<block v-for="(item, idx) in items.list" :key="idx">
									<index-list :item="item" :index="idx"></index-list>
								</block>
								<!-- 上拉加载 -->
								<view v-if="items.list.length > 10">
									<load-more :loadtext="items.loadtext"></load-more>
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
				tabBars: [],
				newsList: [{
						loadtext: '上拉加载更多',
						list: [{
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
							},
							{
								userpic: '/static/demo/userpic/1.jpg',
								username: '昵称',
								isguanzhu: true,
								title: '我是标题',
								type: 'video', //img:图文 video：视频
								titlepic: '/static/demo/datapic/1.jpg',
								playnum: '20w',
								long: '2:17',
								infonum: {
									index: 1, //0:没有操作 1.顶 2.踩
									dingnum: 11,
									cainum: 10
								},
								commentnum: 2,
								sharenum: 10
							},
							{
								userpic: '/static/demo/userpic/1.jpg',
								username: '昵称',
								isguanzhu: true,
								title: '我是标题',
								type: 'video', //img:图文 video：视频
								titlepic: '/static/demo/datapic/1.jpg',
								playnum: '20w',
								long: '2:17',
								infonum: {
									index: 2, //0:没有操作 1.顶 2.踩
									dingnum: 11,
									cainum: 10
								},
								commentnum: 2,
								sharenum: 10
							}
						]
					},
					{
						loadtext: '上拉加载更多',
						list: [{
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
						}]
					},
					{
						loadtext: '上拉加载更多',
						list: []
					},
					{
						loadtext: '上拉加载更多',
						list: []
					},
					{
						loadtext: '上拉加载更多',
						list: []
					},
					{
						loadtext: '上拉加载更多',
						list: []
					}
				]
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
			this.getpostclass()
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
			getpostclass() {
				let url = '';
				// #ifdef H5
				url = "/api/v1/postclass"
				// #endif
				// #ifndef H5
				url = "http://ceshi2.dishait.cn/api/v1/postclass";
				// #endif
				console.log('网站',url)
				uni.request({
					url: url,
					method: "GET",
					success: (res) => {
						console.log(res)
						this.tabBars = res.data.data.list;
					},
					fail: (err) => {
						console.log(err)
					}
				})
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
