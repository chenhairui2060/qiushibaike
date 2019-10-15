<template>
	<view class="page">
		<topic-info :item="item"></topic-info>
		<view class="p-2 u-f-ac border-bottom" v-for="(item, index) in hotList" :key="index">
			<text class="icon iconfont icon-xihuan1"></text>
			<text class="text-ellipsis">{{ item.title }}</text>
		</view>
		<!-- tab -->
		<view class="u-f-ac py-2">
			<block v-for="(item, index) in tabBars" :key="index">
				<view class="flex-1 u-f-ajc" :class="{ active: tabindex == index }" @tap="changeTab(index)">{{ item.name }}</view>
			</block>
		</view>
		<!-- 列表 -->
		<template v-if="listData.length > 0">
			<block v-for="(item, index) in listData" :key="index"><common-list :item="item" :index="index"></common-list></block>
		</template>
		<template v-else>
			<view class="nothing u-f-ajc">
				<image src="../../static/common/nothing.png"  mode=""></image>
			</view>
		</template>
		<!-- 上拉加载更多 -->
		<load-more :loadtext="loadText"></load-more>
	</view>
</template>

<script>
let demo = [
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
];
import topicInfo from '@/components/topicDetail/topicInfo.vue';
import commonList from '@/components/common/commonList.vue';
import loadMore from "@/components/common/loadmore.vue";
export default {
	components: {
		topicInfo,
		commonList,
		loadMore
	},
	data() {
		return {
			hotList: [
				{
					title: '【新人必读】 uni-app实战第二季商城类项目开发text-ellipsis'
				},
				{
					title: '【新人必读】 uni-app实战第二季商城类项目开发text-ellipsis'
				}
			],
			tabBars: [{ name: '默认' }, { name: '最新' }],
			//默认列表
			list1: [],
			//最新
			list2: [],
			tabindex: 0,
			loadText1:'上拉加载更多',
			loadText2:'上拉加载更多'
		};
	},
	computed: {
		listData() {
			return this.tabindex == 0 ? this.list1 : this.list2;
		},
		loadText(){
			return this.tabindex==0?this.loadText1:this.loadText2
		}
	},
	onLoad(e) {
		if (e.item) {
			let item = JSON.parse(e.item);
			this.item = item;
		}
		this.list1 = demo;
	},
	//触底事件
	onReachBottom() {
		// console.log('上拉加载更多。。。')
		this.loadMore()
	},
	methods: {
		changeTab(index) {
			this.tabindex = index;
		},
		//上拉加载更多
		loadMore(){
			let index=this.tabindex;
			if(this.loadText!=="上拉加载更多") return;
			//设置上拉加载状态处于加载中...
			this['loadText'+(index+1)]='加载中...'
			//请求数据
			setTimeout(()=>{
				this['list'+(index+1)]=[...this['list'+(index+1)],...this['list'+(index+1)]];
				this['loadText'+(index+1)]='上拉加载更多'
			},2000)
		}
	}
};
</script>

<style scoped>
@import url('topicDetail.css');
</style>
