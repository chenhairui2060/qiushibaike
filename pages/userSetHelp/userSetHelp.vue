<template>
	<view class="page">
		<uni-collapse ref="add" class="warp">
			<block v-for="(item,index) in list" :key="index">
				<uni-collapse-item :key="index" :open="item.open" :show-animation="item.showAnimation"  :title="item.subName">
						<view class="p-3">
							{{item.content}}
						</view>
				</uni-collapse-item>
			</block>
			
		</uni-collapse>
		<button type="primary" class="user-set-btn" @tap="submit">完成</button>
	</view>
</template>

<script>
import uniCollapse from '@/components/uni-collapse/uni-collapse.vue';
import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue';
export default {
	components: {
		uniCollapse,
		uniCollapseItem
	},
	data() {
		return {
			list: [
				{
					subName: '客服什么时候上线？',
					open: false,
					showAnimation: true,
					content: '折叠内容主体，可自定义内容及样式'
				},
				{
					subName: '忘记账号/昵称/密码怎么办？',
					open: false,
					showAnimation: true,
					content: '折叠内容主体，可自定义内容及样式'
				},
				{
					subName: '怎么搜索/查找/关注/取消用户',
					open: false,
					showAnimation: true,
					content: '折叠内容主体，可自定义内容及样式'
				}
			]
		};
	},
	methods: {
		change(e) {
			//console.log(e)
		}
	}
};
</script>

<style></style>
