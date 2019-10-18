<template>
	<view>
		<view class="user-set-about u-f-ajc flex-column">
			<image src="/static/common/logo.png" mode="widthFix" lazy-load></image>
			<view class="">
				version1.0.0
			</view>
		</view>
				<block v-for="(item, index) in list" :key="index"><home-list-item :item="item" :index="index"></home-list-item></block>
	</view>
</template>

<script>
	import homeListItem from '@/components/home/homeListItem.vue';
	export default {
		components: {
			homeListItem
		},
		data() {
			return {
				list: [
					{
						icon: '',
						name: '新版本检测',
						clicktype:'',
						url:''
					},
					{
						icon: '',
						name: '糗事百科用户协议',
						clicktype:'',
						url:''
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.user-set-about{
		padding: 0 20upx;
	}
.user-set-about>image{
	width: 60%;
	margin-top: 30upx;
	margin-bottom: 20upx;
}
</style>
