(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userList/userList"],{3231:function(e,n,u){"use strict";var t=u("de95"),a=u.n(t);a.a},"742e":function(e,n,u){"use strict";u.r(n);var t=u("cdc3"),a=u.n(t);for(var s in t)"default"!==s&&function(e){u.d(n,e,function(){return t[e]})}(s);n["default"]=a.a},"823e":function(e,n,u){"use strict";var t=function(){var e=this,n=e.$createElement;e._self._c},a=[];u.d(n,"a",function(){return t}),u.d(n,"b",function(){return a})},9245:function(e,n,u){"use strict";u.r(n);var t=u("823e"),a=u("742e");for(var s in a)"default"!==s&&function(e){u.d(n,e,function(){return a[e]})}(s);u("3231");var i=u("2877"),c=Object(i["a"])(a["default"],t["a"],t["b"],!1,null,"6ab93733",null);n["default"]=c.exports},"9a0e":function(e,n,u){"use strict";(function(e){u("b59d"),u("921b");t(u("66fd"));var n=t(u("9245"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,u("6e42")["createPage"])},cdc3:function(e,n,u){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){return u.e("components/common/loadmore").then(u.bind(null,"54a2"))},s=function(){return u.e("components/common/noThing").then(u.bind(null,"a62c"))},i=function(){return u.e("components/uni-badge/uni-badge").then(u.bind(null,"b9b8"))},c={components:{loadMore:a,noThing:s,uniBadge:i},data:function(){return{tabBars:[{name:"互关",num:0},{name:"关注",num:3},{name:"粉丝",num:30}],tabIndex:0,swiperheight:"",newsList:[{loadtext:"上拉加载更多",list:[{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:20,sex:0,isguanzhu:!0},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:21,sex:1,isguanzhu:!1},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:20,sex:0,isguanzhu:!0},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:21,sex:1,isguanzhu:!1},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:20,sex:0,isguanzhu:!0},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:21,sex:1,isguanzhu:!1},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:20,sex:0,isguanzhu:!0},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:21,sex:1,isguanzhu:!1},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:21,sex:1,isguanzhu:!1}]},{loadtext:"上拉加载更多",list:[{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:20,sex:0,isguanzhu:!0},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:21,sex:1,isguanzhu:!1}]},{loadtext:"上拉加载更多",list:[{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:20,sex:0,isguanzhu:!0},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:21,sex:1,isguanzhu:!1}]}]}},onNavigationBarSearchInputClicked:function(){e.navigateTo({url:"../search/search"})},onNavigationBarButtonTap:function(n){0==n.index&&e.navigateBack({delta:1})},onLoad:function(){var n=this;e.getSystemInfo({success:function(u){var t=u.windowHeight-e.upx2px(100);n.swiperheight=t}})},methods:{changeTab:function(e){this.tabIndex=e},tabChange:function(e){this.tabIndex=e.detail.current},loadmore:function(e){console.log(t("上拉了"," at pages\\userList\\userList.vue:204")),console.log(t(e," at pages\\userList\\userList.vue:205"))}}};n.default=c}).call(this,u("6e42")["default"],u("0de9")["default"])},de95:function(e,n,u){}},[["9a0e","common/runtime","common/vendor"]]]);