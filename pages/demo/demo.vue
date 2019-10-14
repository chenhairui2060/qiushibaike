<template>
	<view class="page">
		<view class="box" data-index="0" @click="click">按钮</view>
		<view class="box1" @click="box1event">
			外面
			<view class="box2" @click.stop="box2event">里面</view>
		</view>
		<view class="font">{{ name }}</view>
		<view class="font">
			{{num}}
		</view>
		<view class="font">
			{{num>10?"优秀":"差"}}
		</view>
		<view class="font">
			{{zweihight}}
		</view>
		<view class="box"  @click="change">修改</view>
		<view class="box"  @click="add">增加</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			name: '我是一个名称',
			num:0,
			weihight:1200
		};
	},
	watch: {
		name(val) {
			console.log(val);
		}
	},
	computed:{
		zweihight(){
			return this.weihight>1000?(this.weihight/1000)+"kg":this.weihight+"g"
		}
	},
	methods: {
		click(e) {
			console.log(e);
			let index = e.currentTarget.dataset.index;
			console.log('我点击了');
		},
		box1event() {
			console.log('点击了外面');
		},
		box2event() {
			console.log('点击了里面');
		},
		change(){
			this.name="哈哈哈S"
		},
		add(){
			this.num++
		}
	}
};
</script>

<style>
.box {
	background: #09bb07;
	color: #ffffff;
	width: 80%;
	margin: auto;
	height: 80upx;
	font-size: 32upx;
	border-radius: 30upx;
	border: 1px solid #eeeeee;
	display: flex;
	align-items: center;
	justify-content: center;
}
.box1 {
	width: 100%;
	height: 500upx;
	background: #007aff;
	color: #ffffff;
	font-size: 40upx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.box2 {
	width: 300upx;
	height: 300upx;
	background: #09bb07;
	color: #ffffff;
	font-size: 40upx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.font {
	font-size: 50upx;
}
</style>
