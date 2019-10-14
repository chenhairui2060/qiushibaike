<template>
	<view>
		<!-- 自定义导航栏 -->
		<uni-nav-bar :fixed="true" :statusBar="true" @click-right="submit" @click-left="back" class="u-f-ajc">
			<!-- 左边 -->
			<block slot="left">
				<view class="nav-left"><view class="icon iconfont icon-qiandao"></view></view>
			</block>
			<!-- 中间 -->
			<block>
				<view class="nav-tab-bar u-f-ajc">
					<block v-for="(tab, index) in tabBars" :key="tab.id">
						<view class="u-f-ajc" :class="{ active: tabIdx == index }" @tap="changeTab(index)">
							{{ tab.name }}
							<view v-if="tabIdx == index" class="nav-tab-bar-line"></view>
						</view>
					</block>
				</view>
			</block>
			<!-- 右边 -->
			<block slot="right">
				<view class="nav-right"><view class="icon iconfont icon-bianji1"></view></view>
			</block>
		</uni-nav-bar>
		<!-- 列表 -->
		<block v-for="(item,index) in list" :key="item.id">
			<common-list :item="item" :index="index"></common-list>
		</block>
	
	</view>
</template>

<script>
import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
import commonList from '../../components/common/commonList.vue';
export default {
	components: {
		uniNavBar,
		commonList
	},
	data() {
		return {
			tabIdx: 0,
			tabBars: [{ name: '关注', id: 'guanzhu' }, { name: '话题', id: 'huati' }],
			list:[
				{
					id:0,
					userpic:'/static/demo/demo66.jpg',
					username:'曲调',
					sex:0,//0 男 1 女
					age:25,
					isguanzhu:false,
					title:'我的标题',
					titlepic:'/static/demo/datapic/15.jpg',
					video:false,
					share:false,
					path:'深圳 龙岗',
					sharenum:20,
					commentnum:30,
					goodnum:20
				},
				{
					id:1,
					userpic:'/static/demo/demo66.jpg',
					username:'曲调',
					sex:0,//0 男 1 女
					age:25,
					isguanzhu:false,
					title:'我的标题',
					titlepic:'/static/demo/datapic/15.jpg',
					video:{
						looknum:"20w",
						long:'2:47'
					},
					share:false,
					path:'深圳 龙岗',
					sharenum:20,
					commentnum:30,
					goodnum:20
				},
				{
					id:2,
					userpic:'/static/demo/demo66.jpg',
					username:'曲调',
					sex:1,//0 男 1 女
					age:25,
					isguanzhu:false,
					title:'我的标题',
					video:false,
					share:{
						title:'标题',
						titlepic:'/static/demo/datapic/15.jpg'
					},
					path:'深圳 龙岗',
					sharenum:20,
					commentnum:30,
					goodnum:20
				}
			]
		};
	},
	methods: {
		changeTab(index) {
			this.tabIdx = index;
		}
	}
};
</script>

<style scoped>
.nav-left > view,
.nav-right > view {
	font-size: 40upx;
}
.nav-left > view {
	color: #ff9619;
}
.nav-left {
	margin-left: 16upx;
}
.nav-right {
	width: 100%;
}
.nav-tab-bar {
	/* border: 1px solid; */
	width: 100%;
	margin-left: -20upx;
	position: relative;
}
.nav-tab-bar > view {
	font-size: 32upx;
	padding: 0 15upx;
	font-weight: bold;
	color: #969696;
}
.active {
	color: #333 !important;
}
.nav-tab-bar-line {
	border-bottom: 5upx solid #fede33;
	border-top: 5upx solid #fede33;
	width: 60upx;
	border-radius: 20upx;
	position: absolute;
	bottom: -3upx;
}


</style>
