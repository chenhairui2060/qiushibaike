<template>
	<!-- 背景图+用户基本信息 -->
	<view class="user-space-head u-f-ajc">
		<image :src="getBgImg" mode="widthFix" lazy-load @tap="changeBgImg"></image>
		<view class="user-space-head-info u-f-ajc flex-column">
			<image src="/static/demo/userpic/11.jpg" mode="widthFix" lazy-load></image>
			<view class="u-f-ac">
				{{userinfo.username}}
				<view class="">
					<tag-sex-age :sex="userinfo.sex" :age="userinfo.age"></tag-sex-age>
				</view>
			</view>
			<view 
			@tap="guanzhu"
			:class="[isguanzhu?'active':'icon-zengjia']"
			class="icon iconfont user-space-head-btn">
				关注
			</view>
		</view>
	</view>
</template>

<script>
	import tagSexAge from "@/components/common/tagSexAge.vue";
	export default{
		components:{
			tagSexAge
		},
		props:{
			userinfo:Object
		},
		data(){
			return{
				isguanzhu:this.userinfo.isguanzhu,
				bgimg:this.userinfo.bgimg
			}
		},
		computed:{
			getBgImg(){
				return "/static/bgimg/"+this.bgimg+".jpg"
			},	
		},
		methods:{
			//切换背景图
			changeBgImg(){
				let num=parseInt(this.bgimg);
				this.bgimg= num<4 ?++num:1;
			},
			guanzhu(){
				this.isguanzhu=!this.isguanzhu;
			},
		}
	}
</script>

<style scoped>
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
	.user-space-head-btn{
		background:#FFE933 ;
		color: #333333;
		border: 1upx solid #FFE933;
		padding: 0 15upx;
		border-radius: 10upx;
		font-size: 28upx;
	}
	.active{
		background:none ;
		color: #FFFFFF;
		border: 1upx solid #FFFFFF;
	}
</style>
