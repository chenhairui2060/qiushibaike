<template>
	<view class="index-list animated fadeInLeft fast">
		<view class="index-list1 u-f-ac u-f-jsb">
			<view class="u-f-ac">
				<image :src="item.userpic" mode="widthFix" lazy-load></image>
				{{ item.username }}
			</view>
			<view class="u-f-ac" v-show="!isguanzhu" @tap="guanzhu">
				<view class="icon iconfont icon-zengjia"></view>
				关注
			</view>
		</view>
		<view class="index-list2" @tap="opendetail">{{ item.title }}</view>
		<view class="index-list3 u-f-ajc">
			<!-- 图片 -->
			<image :src="item.titlepic" mode="widthFix" lazy-load @tap="opendetail"></image>
			<!-- 视频 -->
			<template v-if="item.type === 'video'">
				<view class="index-list-play icon iconfont icon-bofang"></view>
				<view class="index-list-playinfo">{{ item.playnum }}次播放 {{ item.long }}</view>
			</template>
		</view>

		<view class="index-list4 u-f-ac u-f-jsb">
			<view class="u-f-ac">
				<view class="u-f-ac" :class="{ active:infonum.index == 1 }" @click="caozuo('ding')">
					<view class="icon iconfont icon-icon_xiaolian-mian"></view>
					<view>{{infonum.dingnum }}</view>
				</view>
				<view class="u-f-ac" :class="{ active: infonum.index == 2 }" @click="caozuo('cai')">
					<view class="icon iconfont icon-kulian"></view>
					<view>{{infonum.cainum }}</view>
				</view>
			</view>
			<view class="u-f-ac">
				<view class="u-f-ac">
					<view class="icon iconfont icon-xiaoxi"></view>
					<view>{{ item.commentnum }}</view>
				</view>
				<view class="u-f-ac">
					<view class="icon iconfont icon-zhuanfa"></view>
					<view>{{ item.sharenum }}</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	props: {
		item: Object,
		index: Number
	},
	data() {
		return {
			infonum:this.item.infonum,
			isguanzhu:this.item.isguanzhu
		};
	},
	onLoad() {},
	methods: {
		guanzhu() {
			this.isguanzhu = true;
			uni.showToast({
				title: '关注成功！'
			});
		},
		//操作
		caozuo(type) {
			// console.log('点击了');
			//不能直接修改父组件传过来的值
			switch (type) {
				case 'ding':
					if (this.infonum.index == 1) {
						return;
					}
					this.infonum.dingnum++;
					if (this.infonum.index == 2) {
						this.infonum.cainum--;
					}
					this.infonum.index = 1;
					break;
				case 'cai':
					if (this.infonum.index == 2) {
						return;
					}
					this.infonum.cainum++;
					if (this.infonum.index == 1) {
						this.infonum.dingnum--;
					}
					this.infonum.index = 2;
					break;
			}
		},
		//进入详情页
		opendetail(){
			// console.log('进入详情页')
			// this.$emit('opendetail',this.item)
			uni.navigateTo({
				url:"/pages/detail/detail?detailData="+JSON.stringify(this.item)
			})
		},

		
	}
};
</script>

<style scoped>
@import url('index-list.css');
</style>
