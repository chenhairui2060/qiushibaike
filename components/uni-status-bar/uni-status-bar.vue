<template>
	<!-- 状态条 -->
	<view :style="{ height: statusBarHeight,background:bgcolor}" class="uni-status-bar">
		<slot />
	</view>
</template>

<script>
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
	export default {
		props:{
			bgcolor:{
				type:String,
				default:"#fff"
			}
		},
		name: 'UniStatusBar',
		data() {
			return {
				statusBarHeight: statusBarHeight
			}
		}
	}
</script>

<style>
	.uni-status-bar {
		display: block;
		width: 100%;
		height: 20px;
		height: var(--status-bar-height);
		
	}
</style>