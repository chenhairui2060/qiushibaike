<template>
	<view class="uni-padding-wrap">
		<!-- 评论区 start -->
		<view class="uni-comment">
			<block v-for="(item, index) in comment.list" :key="index">
				<view class="uni-comment-list" :class="{ 'uni-comment-list-child': item.fid > 0 }">
					<view class="uni-comment-face"><image :src="item.userpic" mode="widthFix"></image></view>
					<view class="uni-comment-body">
						<view class="uni-comment-top">
							<text>{{ item.username }}</text>
						</view>
						<view class="uni-comment-content">{{ item.data }}</view>
						<view class="uni-comment-date">
							<view>{{ item.time }}</view>
							<view class="uni-comment-replay-btn">5回复</view>
						</view>
					</view>
				</view>
			</block>
		</view>
		<!-- 评论区 end -->
	</view>
</template>

<script>
	export default{
		props:{
			comment:Object
		}
	}
</script>

<style scoped>
	.uni-comment-list-child {
		background: #f4f4f4;
		padding: 20upx;
		border-bottom: 1upx solid #eeeeee;
		box-sizing: border-box;
		margin: 0;
		margin-left: 70upx;
		width: auto;
	}
</style>
