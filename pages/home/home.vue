<template>
	<view>
		<!-- 未登录 -->
		<template v-if="!isLogin">
			<view class="u-f-ajc">登录糗事百科，体验更多功能</view>
			<!-- #ifndef H5 -->
			<!-- 第三方登录 -->
			<other-login :providerList="providerList"></other-login>
			<!-- #endif -->
			<!-- 账号密码登录 -->
			<view class="u-f-ajc" @tap="openLogin">
				账号密码登录
				<view class="icon iconfont icon-jinru"></view>
			</view>
		</template>
		<!-- 登录 -->
		<template>
			<home-info :homeInfo="homeInfo"></home-info>
		</template>
		<!-- 数据 -->
		<home-data :homeData="homeData"></home-data>
		<!-- 广告位 -->
		<view class="home-adv u-f-ajc">
			<image src="/static/demo/datapic/1.jpg" mode="widthFix" lazy-load></image>
		</view>
		<!-- 功能列表 -->
		<view class="home-list">
			<block v-for="(item, index) in list" :key="index">
				<home-list-item :item="item" :index="index"></home-list-item>
			</block>
		</view>
	</view>
</template>

<script>
	import homeListItem from '@/components/home/homeListItem.vue';
	import homeInfo from '@/components/home/homeInfo.vue';
	import otherLogin from "@/components/home/otherLogin.vue"
	import homeData from '@/components/home/homeData.vue';
	export default {
		components: {
			homeListItem,
			homeInfo,
			homeData,
			otherLogin
		},
		data() {
			return {
				isLogin: false,
				list: [{
						icon: 'liulan',
						name: '浏览历史',
						clicktype: '',
						url: ''
					},
					{
						icon: 'huiyuanvip',
						name: '糗百认证',
						clicktype: '',
						url: ''
					},
					{
						icon: 'keyboard',
						name: '审核糗事',
						clicktype: '',
						url: ''
					}
				],
				homeInfo: {
					userpic: '/static/demo/demo66.jpg',
					username: '昵称',
					totalnum: 2,
					todaynum: 1
				},
				homeData: [{
						name: '糗事',
						num: 0
					},
					{
						name: '动态',
						num: 0
					},
					{
						name: '评论',
						num: 0
					},
					{
						name: '收藏',
						num: 0
					}
				],
				providerList: [], //当前端登录渠道
			};
		},
		onLoad() {
			this.getProvider()
			setTimeout(()=>{
				console.log(this.providerList)
			},200)
		},
		onNavigationBarButtonTap(e) {
			console.log('点击了这个方法')
			switch (e.index) {
				case 0:
					this.User.navigate({url: "../userSet/userSet"})
					break;
			}
		},
		methods: {
			openLogin() {
				uni.navigateTo({
					url: "../login/login"
				})
			},
			getProvider() {
				uni.getProvider({
					service: "oauth",
					success: (res) => {
						console.log(res)
						this.providerList = res.provider.map((value) => {
							let providerName = '';
							let icon = '';
							switch (value) {
								case 'weixin':
									providerName = "微信登录";
									icon = "weixin"
									break;
								case 'qq':
									providerName = "QQ登录";
									icon = "QQ"
									break;
								case 'sinaweibo':
									providerName = "新浪微博登录";
									icon = "xinlangweibo"
									break;
							}
							return{
								name:providerName,
								id:value,
								icon:icon
							}
						})
					}
				})
			}
		}
	};
</script>

<style scoped>
	.home-adv>image {
		border-radius: 20upx;
		height: 150upx;
	}

	.home-list {
		padding: 20upx;
	}
</style>
