<template>
	<view class="page">
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view class="">头像</view>
			<view class="u-f-ac" @tap="changeImg">
				<image :src="userpic" mode="aspectFill" lazy-load></image>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view class="">昵称</view>
			<view class="u-f-ac">
				<input type="text" v-model="username" />
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view class="">性别</view>
			<view class="u-f-ac" @tap="changeOne('sex')">
				<view class="">{{ sex }}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view class="">生日</view>
			<picker mode="date" :value="birthday" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="u-f-ac">
					<view class="ml-2">{{ birthday }}</view>
					<view class="icon iconfont icon-bianji1"></view>
				</view>
			</picker>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view class="">情感</view>
			<view class="u-f-ac" @tap="changeOne('qinggan')">
				<view class="">{{ qinggan }}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view class="">职业</view>
			<view class="u-f-ac" @tap="changeOne('zhiye')">
				<view class="">{{ zhiye }}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view class="">家乡</view>
			<view class="u-f-ac" @click="showMulLinkageThreePicker">
				<view class="">中国广州</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>

		<button type="primary" class="user-set-btn" @tap="submit">完成</button>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import mpvueCityPicker from "@/components/mpvue-citypicker/mpvueCityPicker.vue";
let sex = ['不限', '男', '女'];
let qinggan = ['秘密', '未婚', '已婚'];
let zhiye = ['秘密', 'IT', '老师'];
export default {
	components:{
		mpvueCityPicker
	},
	data() {
		return {
			userpic: '/static/demo/demo66.jpg',
			username: '曲调',
			sex: '不限',
			qinggan: '未婚',
			zhiye: 'IT',
			birthday: '1999-12-18',
			themeColor: '#007AFF',
			cityPickerValueDefault: [0, 0, 1]
		};
	},
	computed: {
		startDate() {
			return this.getDate('start');
		},
		endDate() {
			return this.getDate('end');
		}
	},
	methods: {
		changeImg() {
			uni.chooseImage({
				count: 1,
				sizeType: ['compressed'],
				success: res => {
					console.log(res);
					this.userpic = res.tempFilePaths[0];
				}
			});
		},
		submit() {},
		//单列选择
		changeOne(type) {
			let arr = [];
			switch (type) {
				case 'sex':
					arr = sex;
					break;
				case 'qinggan':
					arr = qinggan;
					break;
				case 'zhiye':
					arr = zhiye;
					break;
			}
			uni.showActionSheet({
				itemList: arr,
				success: res => {
					console.log(res);
					let tapIndex = res.tapIndex;
					switch (type) {
						case 'sex':
							this.sex = arr[tapIndex];
							break;
						case 'qinggan':
							this.qinggan = arr[tapIndex];
							break;
						case 'zhiye':
							this.zhiye = arr[tapIndex];
							break;
					}
				}
			});
		},
		bindDateChange: function(e) {
			this.birthday = e.target.value;
		},
		getDate(type) {
			const date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();

			if (type === 'start') {
				year = year - 60;
			} else if (type === 'end') {
				year = year + 2;
			}
			month = month > 9 ? month : '0' + month;
			day = day > 9 ? day : '0' + day;
			return `${year}-${month}-${day}`;
		},
		// 三级联动选择
		showMulLinkageThreePicker() {
			this.$refs.mpvueCityPicker.show();
		},
		onConfirm(e) {
			this.pickerText = JSON.stringify(e)
		}
	},
	// onBackPress() {
	//   if (this.$refs.mpvuePicker.showPicker) {
	//   	this.$refs.mpvuePicker.pickerCancel();
	//     return true;
	//   }
	//   if (this.$refs.mpvueCityPicker.showPicker) {
	//   	this.$refs.mpvueCityPicker.pickerCancel();
	//     return true;
	//   }
	// },
	// 	onUnload() {
	// 		if (this.$refs.mpvuePicker.showPicker) {
	// 			this.$refs.mpvuePicker.pickerCancel()
	// 		}
	// 		if (this.$refs.mpvueCityPicker.showPicker) {
	// 			this.$refs.mpvueCityPicker.pickerCancel()
	// 		}
	// 	}
	// }
};
</script>

<style scoped>
.user-set-userinfo-list {
	padding: 20upx;
	border-bottom: 1upx solid #f4f4f4;
}
.user-set-userinfo-list > view:first-child {
	font-size: 32upx;
	font-weight: bold;
	color: #9b9b9b;
}
.user-set-userinfo-list > view:last-child > view:last-of-type {
	margin-left: 20upx;
	color: #9b9b9b;
}
.user-set-userinfo-list > view:last-child > image {
	height: 80upx;
	width: 80upx;
	border-radius: 100%;
}
.user-set-userinfo-list > view:last-child > input {
	text-align: right;
	font-size: 28upx;
}
</style>
