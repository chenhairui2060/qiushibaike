<template>
	<view>
		<!-- 状态栏 -->
		<uni-status-bar bgcolor="#FFE933"></uni-status-bar>
		<!-- 关闭按钮 -->
		<view class="icon iconfont icon-guanbi" @tap="back"></view>
		<!-- 引入背景图 -->
		<image class="loginhead" src="/static/common/loginhead.png" mode="widthFix" lazy-load></image>
		<!-- 输入框加按钮 -->
		<view class="body">
			<!-- 账号密码登录 -->
			<template v-if="status">
			<input type="text" v-model="username" value="" class="uni-input common-input " placeholder="昵称手机号邮箱" />
				<view class="login-input-box">
					<input type="text" v-model="password" value="" class="uni-input common-input forget-input" placeholder="请输入密码" />
					<view class="forget u-f-ajc">忘记密码？</view>
				</view>
			</template>
			<!-- 手机号登录 -->
			<template v-else>
				<view class="login-input-box">
					<view class="phone u-f-ajc">+86</view>
					<input type="text" v-model="phone" value="" class="uni-input common-input phone-input" placeholder="手机号" />
				</view>
				<view class="login-input-box">
					<input v-model="checknum" type="text" value="" class="uni-input common-input forget-input" placeholder="请输入验证码" />
					<view class="forget u-f-ajc load-font-color yanzhenma"><view class="u-f-ajc py-1" @tap="getCheckNum">{{!codetime?'获取验证码':codetime+'s'}}</view></view>
				</view>
			</template>
			
			<button type="primary" :loading="loading" :disable="disable" class="user-set-btn" :class="{ 'user-set-btn-disable': disable }" @tap="submit">登录</button>
		</view>
		<!-- 登录状态切换 -->
		<view class="login-status u-f-ajc login-padding load-font-color" @tap="changeStatus">
			{{statusName}}
			<view class="icon iconfont icon-jinru"></view>
		</view>
		<!-- #ifndef H5 -->
		<!-- 第三方登录 -->
		<template>
			<view class="other-login-title u-f-ajc login-padding load-font-color" >第三方登录</view>
			<other-login :providerList="providerList"></other-login>
		</template>
		<!-- #endif -->
		<!-- 协议 -->
		<view class="login-rule u-f-ajc login-padding load-font-color">
			注册即代表您同意
			<view class="">《xxx协议》</view>
		</view>
	</view>
</template>

<script>
import uniStatusBar from '@/components/uni-status-bar/uni-status-bar.vue';
import otherLogin from '@/components/home/otherLogin.vue';
export default {
	components: {
		uniStatusBar,
		otherLogin
	},
	data() {
		return {
			disable: true,
			loading: false,
			status:false,//false代表账号密码登录，true代表手机验证码登录
			username:'',
			password:'',
			phone:'',
			checknum:'',
			codetime:0,
			providerList:[]
		};
	},
	watch:{
		username(val){
			this.OnBtnChange();
		},
		password(val){
			this.OnBtnChange();
		},
		phone(val){
			this.OnBtnChange();
		},
		checknum(val){
			this.OnBtnChange();
		},
	},
	computed:{
		statusName(){
			return this.status?"手机验证码登录":"账号密码登录"		
		}
	},
	onLoad() {
		uni.getProvider({
			service: 'oauth',
			success: (result) => {
				console.log('拿到支持的登录',result)
				this.providerList = result.provider.map((value) => {
					let providerName = '';
					let icon="";
					switch (value) {
						case 'weixin':
							providerName = '微信登录';
							icon='weixin';
							break;
						case 'qq':
							providerName = 'QQ登录';
							icon='QQ'
							break;
						case 'sinaweibo':
							providerName = '新浪微博登录';
							icon='xinlangweibo'
							break;
					}
					return {
						name: providerName,
						icon:icon,
						id: value
					}
				});
		
			},
			fail: (error) => {
				console.log('获取登录通道失败', error);
			}
		});
	},
	methods: {
		//返回上一步
		back() {
			console.log('返回上一步');
			uni.navigateBack({
				delta:1
			})
		},
		//提交登录
		submit() {
			if(this.status){
				//手机验证码登录
				//验证手机号合法性
				if(!this.isPhone()){
					uni.showToast({
						title:"请输入正确手机号",
						icon:"none"
					})
				}
			}else{
				//账号密码登录
			}
		},
		//切换登录状态
		changeStatus(){
			this.initInput();
			this.status=!this.status;
		},
		//改变按钮状态
		OnBtnChange(){
			if((this.username&&this.password)||(this.phone&&this.checknum)){
				this.disable=false;
			}else{
				this.disable=true;
			}
		},
		//初始化表单
		initInput(){
			this.username=""
			this.password="";
			this.phone="";
			this.checknum="";
		},
		//获取验证码
		getCheckNum(){
			if(this.codetime>0){
				uni.showToast({
					title:"不能重复获取验证码",
					icon:"none"
				})
				return
			}
			//验证手机号合法性
			if(!this.isPhone()){
				uni.showToast({
					title:"请输入正确手机号",
					icon:"none"
				})
			}
			//请求服务器，发送验证码
			//发送成功，开启倒计时
			this.codetime=10;
			let timer=setInterval(()=>{
				this.codetime--;
				if(this.codetime<1){
					clearInterval(timer);
					this.codetime=0;
				}
			},1000)
			
		},
		isPhone(){
			//验证手机号合法性
			let mPattern=/^1[34578]\d{9}$/;
			return mPattern.test(this.phone)
		}
	}
};
</script>

<style scoped>
.load-font-color {
	color: #cccccc;
}
.login-padding {
	padding: 20upx 0;
}
.loginhead {
	width: 100%;
}
.icon-guanbi {
	position: fixed;
	top: 60upx;
	left: 30upx;
	font-size: 40upx;
	font-weight: bold;
	z-index: 999;
	color: #333333;
}
.body {
	padding: 0 20upx;
}
.other-login-title {
	position: relative;
}
.other-login-title:before,
.other-login-title:after {
	content: '';
	position: absolute;
	height: 1upx;
	width: 100upx;
	background: #cccccc;
	top: 50%;
}
.other-login-title:before {
	left: 25%;
}
.other-login-title:after {
	right: 25%;
}
.login-input-box {
	position: relative;
}
.login-input-box .forget {
	position: absolute;
	right: 0;
	top: 0;
	height: 100%;
	width: 150upx;
	z-index: 999;
}
.forget-input {
	padding-right: 150upx;
}
.login-input-box .phone {
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 50upx;
	z-index: 999;
}
.login-input-box .phone-input {
	padding-left: 60upx;
}
.yanzhenma > view {
	background: #EEEEEE;
	border-radius: 10upx;
	font-size: 25upx;
	width: 150upx;
}
</style>
