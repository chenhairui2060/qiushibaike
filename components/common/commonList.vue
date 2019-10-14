<template>
	<view class="common-list u-f">
		<view class="common-list-lt"><image :src="item.userpic" mode="widthFix" lazy-load></image></view>
		<view class="common-list-rt">
			<view class="u-f-ac u-f-jsb">
				<view class="u-f-ac">
					{{item.username}}
					<view 
					:class="[item.sex==0?'icon-nan':'icon-nv']"
					class="tag-sex icon iconfont ">{{item.age}}</view>
				</view>
				<view class="icon iconfont icon-zengjia" v-show="!item.isguanzu">关注</view>
			</view>
			<view>
				{{item.title}}
			</view>
			<view class="u-f-ajc">
				<!-- 图片 -->
				<image v-if="item.titlepic" :src="item.titlepic" mode="widthFix" lazy-load></image>
				<!-- 视频 -->
				<template v-if="item.video">
					<view class="common-list-play icon iconfont icon-bofang"></view>
					<view class="common-list-playInfo">{{item.video.looknum}}次播放 {{item.video.long}}</view>
				</template>
				<!-- 分享样式 -->
				<view class="common-list-share u-f-ac" v-if="item.share">
					<image :src="item.share.titlepic" mode="widthFix" lazy-load></image>
					<view >
						{{item.share.title}}
					</view>
				</view>
			</view>
			
			<view class="u-f-ac u-f-jsb">
				<view>{{item.path}}</view>
				<view class="u-f-ac">
					<view class="icon iconfont icon-zhuanfa">{{item.sharenum}}</view>
					<view class="icon iconfont icon-pinglun1">{{item.commentnum}}</view>
					<view class="icon iconfont icon-dianzan1">{{item.goodnum}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		item:Object,
		index:Number
	},
	data() {
		return {};
	},
	onLoad() {},
	methods: {
		
	}
};
</script>

<style scoped>
	@import url("../../common/commonList.css");
</style>
