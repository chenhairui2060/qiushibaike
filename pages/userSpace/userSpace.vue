<template>
	<view>
		<!-- 背景图+用户基本信息 -->
		<view class="user-space-head u-f-ajc">
			<image src="/static/bgimg/1.jpg" mode="widthFix" lazy-load></image>
			<view class="user-space-head-info u-f-ajc flex-column">
				<image src="/static/demo/userpic/11.jpg" mode="widthFix" lazy-load></image>
				<view class="u-f-ac">
					昵称
					<view class="">
						<tag-sex-age :sex="1" :age="12"></tag-sex-age>
					</view>	
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tagSexAge from "@/components/common/tagSexAge.vue"
	export default {
		components:{
			tagSexAge
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.user-space-head{
	position: relative;
	height: 500upx;
	overflow: hidden;
}
.user-space-head>image{
	width: 100%;
}
.user-space-head-info{
	position: absolute;
	top: 150upx;
}
.user-space-head-info>image{
	height: 150upx;
	width: 150upx;
	border-radius: 100%;
}
.user-space-head-info>view:first-of-type{
	color: #FFFFFF;
	font-size: 35upx;
	font-weight: bold;
	text-shadow:2upx 2upx 10upx #333333;
}
</style>
