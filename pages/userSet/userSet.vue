<template>
	<view class="body">
		<block v-for="(item, index) in list" :key="index"><home-list-item :item="item" :index="index"></home-list-item></block>
		<button type="primary" class="user-set-btn">退出登录</button>
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
					name: '账号与安全',
					clicktype:'navigateTo',
					url:'/pages/userSetRepassword/userSetRepassword'
				},
				{
					icon: '',
					name: '绑定邮箱',
					clicktype:'navigateTo',
					url:'/pages/userSetEmail/userSetEmail'
				},
				{
					icon: '',
					name: '资料编辑',
					clicktype:'navigateTo',
					url:'/pages/userSetUserinfo/userSetUserinfo'
				},
				{
					icon: '',
					name: '小纸条',
					clicktype:'',
					url:''
				},
				{
					icon: '',
					name: '清除缓存',
					clicktype:'',
					url:''
				},
				{
					icon: '',
					name: '意见反馈',
					clicktype:'navigateTo',
					url:'/pages/userSetHelp/userSetHelp'
				},
				{
					icon: '',
					name: '关于糗百',
					clicktype:'navigateTo',
					url:'/pages/userSetAbout/userSetAbout'
				}
			]
		};
	},
	methods: {
		
	}
};
</script>

<style scoped>
.body {
	padding: 0 20upx;
}

</style>
