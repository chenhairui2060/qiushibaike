<template>
	<view>
	<view class="page">
		<input type="text"  v-model="email" value="" class="uni-input common-input" placeholder="请输入邮箱" />
		<input type="text" password  v-model="password" value="" class="uni-input common-input" placeholder="输入密码" />
		<button type="primary" :loading="loading" :disable="disable" class="user-set-btn" :class="{'user-set-btn-disable':disable}" @tap="submit">完成</button>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				email:'',
				password:'',
				disable:true,
				loading:false
			}
		},
		watch:{
			email(val){
				this.change()
			},
			password(val){
				this.change()
			}
		},
		methods: {
			//监听输入框
			change(){
				if(this.email&&this.password){
					this.disable=false;
				}else{
					this.disable=true;
				}
			},
			//验证层
			check(){
				if(!this.email||this.email==''){
					uni.showToast({
						title:"邮箱不能为空"
					})
					return false
				}
				//验证邮箱是否合法
				let ePattern=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
				if(!ePattern.test(this.email)){
					uni.showToast({
						title:"请输入正确邮箱格式",
						icon:"none"
					})
					return false
				}
				if(!this.password||this.password==''){
					uni.showToast({
						title:"密码不能为空"
					})
					return false
				}
				return true
			},		
			// 提交
			submit(){
				this.loading=true;
				if(!this.check()){ this.loading=false;  return};
				uni.showToast({
					title:"提交服务器"
				})
				this.loading=false;
				// this.disable=false;
			}
		}
	}
</script>

<style scoped>
.page {
	padding: 0 20upx;
}
</style>
