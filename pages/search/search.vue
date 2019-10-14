<template>
	<view>
		搜索页面
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		//监听搜索框文本变化
		onNavigationBarSearchInputChanged(e){
			console.log(e)
		},
		//监听点击搜索按钮事件
		onNavigationBarSearchInputConfirmed(e){
			console.log(e)
			let keyword=e.text;
		},
		methods: {
			//监听原生标题导航
			onNavigationBarButtonTap(e){
				//把对象变成字符串JSON.stringify(e)
				if(e.index==0){
					console.log('点击了取消')
					uni.navigateBack({
					    delta: 1
					});
				}
			},
			
		}
	}
</script>

<style>

</style>
