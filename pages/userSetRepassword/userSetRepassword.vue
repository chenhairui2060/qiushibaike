<template>
	<view class="page">
		<input type="text" password v-model="oldpassword" value="" class="uni-input common-input" placeholder="输入旧密码" />
		<input type="text" password v-model="newpassword" value="" class="uni-input common-input" placeholder="输入新密码" />
		<input type="text" password v-model="renewpassword" value="" class="uni-input common-input" placeholder="输入确认密码" />
		<button type="primary" :loading="loading" :disable="disable" class="user-set-btn" :class="{'user-set-btn-disable':disable}" @tap="submit">完成</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			oldpassword:'',
			newpassword:'',
			renewpassword:'',
			disable:true,
			loading:false
		};
	},
	watch:{
		oldpassword(val){
			this.change()
		},
		newpassword(val){
			this.change()
		},
		renewpassword(val){
			this.change()
		}
	},
	methods: {
		//监听输入框
		change(){
			if(this.oldpassword&&this.newpassword&&this.renewpassword){
				this.disable=false;
			}else{
				this.disable=true;
			}
		},
		//验证层
		check(){
			if(!this.oldpassword||this.oldpassword==''){
				uni.showToast({
					title:"旧密码不能为空"
				})
				return false
			}
			if(!this.newpassword||this.newpassword==''){
				uni.showToast({
					title:"新密码不能为空"
				})
				return false
			}
			if(!this.renewpassword||this.renewpassword==''){
				uni.showToast({
					title:"重复密码不能为空"
				})
				return false
			}
			if(this.newpassword!==this.renewpassword){
				uni.showToast({
					title:"确认密码和新密码不一致"
				})
				return false
			}
			return true
		},		
		// 提交
		submit(){
			console.log('112')
			this.loading=true;
			if(!this.check()){ this.loading=false;  return};
			uni.showToast({
				title:"提交服务器"
			})
			this.loading=false;
			// this.disable=false;
		}
	}
};
</script>

<style>
.page {
	padding: 0 20upx;
}
</style>
