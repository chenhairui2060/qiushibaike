<template>
	<view>
		<uni-nav-bar :fixed="true" :statusBar="true" :border="false" @click-right="navAdd" @click-left="back" class="u-f-ajc">
			<!-- 左边 -->
			<block slot="left">
				<view class="nav-left"><view class="icon iconfont icon-qiandao"></view></view>
			</block>
			<!-- 中间 -->
			<block>
				<view class="nav-tab-bar u-f-ajc">
					<block v-for="(tab, index) in tabBars" :key="tab.id">
						<view class="u-f-ajc" :class="{ active: tabIndex == index }" @tap="changeTab(index)">
							{{ tab.name }}
							<view v-if="tabIndex == index" class="nav-tab-bar-line"></view>
						</view>
					</block>
				</view>
			</block>
			<!-- 右边 -->
			<block slot="right">
				<view class="nav-right"><view class="icon iconfont icon-bianji1"></view></view>
			</block>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from "../uni-nav-bar/uni-nav-bar.vue";
export default {
	components:{
		uniNavBar
	},
	name:'newsNavBar',
	props:{
		tabIndex:Number,
		tabBars:Array
	},
	data() {
		return {
			
		};
	},
	onLoad() {
		
	},
	methods: {
		changeTab(index) {
			// this.tabIdx = index;
			this.$emit("changeTab",index)
		},
		navAdd(){
			uni.navigateTo({
				url:"../../pages/addInput/addInput"
			})
		},
		
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
