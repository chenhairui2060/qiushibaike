<template>
	<view>
		<detail-info :item="detail"></detail-info>
		<view class="u-comment-title">最新评论</view>
		<comment-list :comment="comment"></comment-list>
		<!-- 分享样式 -->
		<more-share :show="showshare" @togle="togle"></more-share>
	</view>
</template>

<script>
import detailInfo from '@/components/detail/detailInfo.vue';
import commentList from '@/components/detail/commentList.vue';
import time from '@/common/time.js';
import moreShare from '@/components/common/moreShare.vue';
let demoList = [
	{
		//一级评论
		id: 1,
		userpic: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png',
		username: '小猫咪',
		time: 1571646513,
		data: '支持国产，支持DCloud!',
		fid: 0
	},
	{
		//子级评论
		id: 2,
		userpic: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png',
		username: '小猫咪',
		time: 1571646513,
		data: '支持国产，支持DCloud!',
		fid: 1
	},
	{
		//子级评论
		id: 3,
		userpic: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png',
		username: '小猫咪',
		time: 1571646513,
		data: '支持国产，支持DCloud!',
		fid: 1
	},
	{
		//一级评论
		id: 1,
		userpic: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png',
		username: '小猫咪',
		time: 1571646513,
		data: '支持国产，支持DCloud!',
		fid: 0
	}
];
export default {
	components: {
		detailInfo,
		commentList,
		moreShare
	},
	data() {
		return {
			showshare:false,
			comment: {
				count: 20,
				list: []
			},
			detail: {
				userpic: '/static/demo/userpic/12.jpg',
				username: '哈哈',
				sex: 0, //0 男 1 女
				age: 25,
				isguanzhu: false,
				title: '我是标题',
				titlepic: '/static/demo/datapic/13.jpg',
				morepic: ['/static/demo/datapic/13.jpg', '/static/demo/datapic/14.jpg', '/static/demo/datapic/15.jpg'],
				video: false,
				share: false,
				path: '深圳 龙岗',
				sharenum: 20,
				commentnum: 30,
				goodnum: 20
			}
		};
	},
	onLoad(e) {
		// console.log(e)
		let detailData = JSON.parse(e.detailData);
		// console.log(detailData)
		this.initData(detailData);
		this.getcomment();
	},
	onNavigationBarButtonTap(e) {
		console.log(e);
		switch (e.index) {
			case 0:
				console.log('分享');
				this.showshare=!this.showshare;
				break;
		}
	},
	methods: {
		//获取评论
		getcomment() {
			for (let i = 0; i < demoList.length; i++) {
				demoList[i].time = time.gettime.gettime(demoList[i].time);
			}
			this.comment.list = demoList;
			console.log(this.comment);
		},
		initData(obj) {
			uni.setNavigationBarTitle({
				title: obj.title
			});
		},
		togle(){
			this.showshare=!this.showshare;
		},
		femx(){
			console.log('点击了')
			this.showshare=true
		}
	}
};
</script>

<style scoped>
	
.u-comment-title {
	padding: 20upx;
	font-size: 30upx;
	font-weight: bold;
}

</style>
