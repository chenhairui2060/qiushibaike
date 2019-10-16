<template>
	<view>
		<!-- tab -->
		<view class="u-f-ac py-2">
			<block v-for="(item, index) in tabBars" :key="index">
				<view class="flex-1 u-f-ajc" :class="{ active: tabIndex == index }" @tap="changeTab(index)">
					{{ item.name }}
					<text v-if="item.num > 0" class="ml-1">{{ item.num }}</text>
				</view>
			</block>
		</view>
			<view class="uni-tab-bar">
		<swiper @change="tabChange" :current="tabIndex" class="swiper-box" :style="{ height: swiperheight + 'px' }">
			<block v-for="(items, index) in newsList" :key="index">
				<swiper-item>
					<scroll-view scroll-y class="list" @scrolltolower="loadmore(index)">
						<template v-if="items.list.length > 0">
							<!-- 图文列表 -->
							<block v-for="(item,idx) in items.list" :key="idx">
								<view class="p-2 u-f-ac border-bottom">
									<image style="height: 100upx;width: 100upx;" class="rounded-circle mr-2" :src="item.userpic" mode=""></image>
									<view class="u-f flex-column flex-1">
										<text>{{item.username}}</text>
										<view>
											<uni-badge :text="item.age+''" type="error" size="small"><text class="icon iconfont  text-white font-sm mr-1" :class="item.sex==0?'icon-nan':'icon-nv'"></text></uni-badge>
										</view>
									</view>
									<view v-show="item.isguanzhu" class="uni-icon uni-icon-checkbox-filled text-secondary"></view>
								</view>
							</block>
							<!-- 上拉加载 -->
							<load-more v-if="items.list.length>8" :loadtext="items.loadtext"></load-more>
						</template>
						<template v-else>
							<!-- 无内容默认 -->
							<view ><no-thing></no-thing></view>
						</template>
					</scroll-view>
				</swiper-item>
			</block>
		</swiper>
		</view>
	</view>
</template>

<script>
import loadMore from '@/components/common/loadmore.vue';
import noThing from '@/components/common/noThing.vue';
import uniBadge from '@/components/uni-badge/uni-badge.vue';
export default {
	components: {
		loadMore,
		noThing,
		uniBadge
	},
	data() {
		return {
			tabBars: [{ name: '互关', num: 0 }, { name: '关注', num: 3 }, { name: '粉丝', num: 30 }],
			tabIndex: 0,
			swiperheight: '',
			newsList: [
				{
					loadtext: '上拉加载更多',
					list: [
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '昵称',
							age: 20,
							sex: 0,
							isguanzhu: true
						},
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '昵称',
							age: 21,
							sex: 1,
							isguanzhu: false
						},
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '昵称',
							age: 20,
							sex: 0,
							isguanzhu: true
						},
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '昵称',
							age: 21,
							sex: 1,
							isguanzhu: false
						},
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '昵称',
							age: 20,
							sex: 0,
							isguanzhu: true
						},
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '昵称',
							age: 21,
							sex: 1,
							isguanzhu: false
						},
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '昵称',
							age: 20,
							sex: 0,
							isguanzhu: true
						},
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '昵称',
							age: 21,
							sex: 1,
							isguanzhu: false
						},
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '昵称',
							age: 21,
							sex: 1,
							isguanzhu: false
						}
					]
				},
				{
					loadtext: '上拉加载更多',
					list: [
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '昵称',
							age: 20,
							sex: 0,
							isguanzhu: true
						},
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '昵称',
							age: 21,
							sex: 1,
							isguanzhu: false
						}
					]
				},
				{
					loadtext: '上拉加载更多',
					list: [
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '昵称',
							age: 20,
							sex: 0,
							isguanzhu: true
						},
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '昵称',
							age: 21,
							sex: 1,
							isguanzhu: false
						}
					]
				}
			]
		};
	},
	//监听点击输入框事件
	onNavigationBarSearchInputClicked() {
		uni.navigateTo({
			url: '../search/search'
		});
	},
	onNavigationBarButtonTap(e) {
		// console.log(e)
		if (e.index == 0) {
			uni.navigateBack({
				delta: 1
			});
		}
	},
	onLoad() {
		let that = this;
		uni.getSystemInfo({
			success: function(res) {
				let height = res.windowHeight - uni.upx2px(100);
				that.swiperheight = height;
				// console.log(height);
			}
		});
	},
	methods: {
		changeTab(index) {
			this.tabIndex = index;
		},
		tabChange(e) {
			// console.log(JSON.stringify(e.detail.current));
			this.tabIndex = e.detail.current;
		},
		loadmore(index){
			console.log('上拉了')
			console.log(index)
		}
	}
};
</script>

<style scoped>
.active {
	color: #e80080;
	font-size: 40upx;
	font-weight: bold;
}
</style>
