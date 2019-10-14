<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		//当app被打开
		console.log('App Show');
	},
	onHide: function() {
		//当app被隐藏
		console.log('App Hide');
	}
};
</script>

<style>
/*每个页面公共css */
@import url('./common/uni.css');
/* 	引入自定义图标库 */
@import url('./common/icon.css');
/* 引入animate动画库 */
@import url('./common/animate.css');
/* 引入公共样式 */
@import url('./common/common.css');
</style>
