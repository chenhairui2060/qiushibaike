<template>
	<view>
		<!-- 自定义导航栏 -->
	    <news-nav-bar :tabIdx="tabIdx" :tabBars="tabBars" @changeTab="changeTab"></news-nav-bar>
		<!-- 列表 -->
		<block v-for="(item,index) in list" :key="item.id">
			<common-list :item="item" :index="index"></common-list>
		</block>
	
	</view>
</template>

<script>
import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
import commonList from '../../components/common/commonList.vue';
import newsNavBar from "../../components/news/newsNavBar.vue"
export default {
	components: {
		uniNavBar,
		commonList,
		newsNavBar
	},
	data() {
		return {
			tabIdx: 0,
			tabBars: [{ name: '关注', id: 'guanzhu' }, { name: '话题', id: 'huati' }],
			list:[
				{
					id:0,
					userpic:'/static/demo/demo66.jpg',
					username:'曲调',
					sex:0,//0 男 1 女
					age:25,
					isguanzhu:false,
					title:'我的标题',
					titlepic:'/static/demo/datapic/15.jpg',
					video:false,
					share:false,
					path:'深圳 龙岗',
					sharenum:20,
					commentnum:30,
					goodnum:20
				},
				{
					id:1,
					userpic:'/static/demo/demo66.jpg',
					username:'曲调',
					sex:0,//0 男 1 女
					age:25,
					isguanzhu:false,
					title:'我的标题',
					titlepic:'/static/demo/datapic/15.jpg',
					video:{
						looknum:"20w",
						long:'2:47'
					},
					share:false,
					path:'深圳 龙岗',
					sharenum:20,
					commentnum:30,
					goodnum:20
				},
				{
					id:2,
					userpic:'/static/demo/demo66.jpg',
					username:'曲调',
					sex:1,//0 男 1 女
					age:25,
					isguanzhu:false,
					title:'我的标题',
					video:false,
					share:{
						title:'标题',
						titlepic:'/static/demo/datapic/15.jpg'
					},
					path:'深圳 龙岗',
					sharenum:20,
					commentnum:30,
					goodnum:20
				}
			]
		};
	},
	methods: {
		changeTab(index) {
			// console.log(index)
			this.tabIdx=index;
		}
	}
};
</script>

<style scoped>



</style>
