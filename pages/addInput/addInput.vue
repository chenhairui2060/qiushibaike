<template>
	<view>
		<!-- 自定义导航栏 -->
		<uni-nav-bar :statusBar="true" rightText="发布" left-icon="arrowleft" @click-right="submit" @click-left="back" class="u-f-ajc">
			<view class="u-f-ajc" style="margin: 0 auto;" @tap="changelock">
				{{ yinsi }}
				<view class="icon iconfont icon-xialazhankai "></view>
			</view>
		</uni-nav-bar>
		<!-- 多行输入框 -->
		<view class="uni-textarea"><textarea v-model="text" placeholder="说一句话吧" /></view>
		<!-- 上传多图 -->
		<up-load-imgs @uploud="uploud"></up-load-imgs>

	</view>
</template>

<script>
let changelock = ['所有人可见', '仅自己可见'];
import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
import upLoadImgs from '../../components/common/uploadImgs.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue'
export default {
	components: {
		uniNavBar,
		upLoadImgs,
		uniPopup
	},
	data() {
		return {
			isget:false,
			yinsi: changelock[0],
			text: '111',
			imageList: [],
			show: false,
			type: ''	
		};
	},
	onLoad() {

	},
	onBackPress() {
		if(this.isget){
			uni.showModal({
				content:'是否要保存为草稿？',
				cancelText:'不保存',
				confirmText:'保存',
				success: res => {
					if(res.confirm){
						console.log('保存')
					}else{
						console.log('不保存')
					}
					this.isget=true;
					uni.navigateBack({
						delta:1
					})
				}
			})
			return true;
		}
	},
	methods: {
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		//发布
		submit() {
			console.log('我点击了发布');
		},
		//隐私
		changelock() {
			console.log('我点击了隐私');
			uni.showActionSheet({
				itemList: changelock,
				success: res => {
					this.yinsi = changelock[res.tapIndex];
				}
			});
		},
		uploud(arr) {
			this.imageList = arr;
			console.log(this.imageList);
		},
	}
};
</script>

<style scoped>
.uni-textarea {
	border: 1upx solid #eeeeee;
}
.cell-pd {
	padding: 22upx 30upx;
}

.list-pd {
	margin-top: 50upx;
}

</style>
