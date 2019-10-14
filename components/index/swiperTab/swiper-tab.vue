<template>
	<view class="uni-tab-bar">
		<scroll-view scroll-x="true" class="uni-swiper-tab">
			<block v-for="(tab, index) in tabBars" :key="tab.id">
				<view :class="{ active: tabIndex == index }" @tap="tabtap(index)" class="swiper-tab-list">
					{{ tab.name }}
					<view class="swiper-tab-line"></view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
export default {
	props: {
		tabBars: Array,
		tabIndex: Number
	},
	data() {
		return {};
	},
	onLoad() {},
	methods: {
		tabtap(index) {
			// this.tabIndex = index;
			//向父组件传值
			this.$emit('tabtap', index);
		}
	}
};
</script>

<style>
@import url('swiper-tab.css');
</style>
