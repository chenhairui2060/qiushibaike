import config from "./config.js";
import User from "./user.js";
export default {
	config: {
		baseUrl: config.webUrl,
		header: {
			"Content-Type": "application/json;chareset=UTF-8",
			"Content-Type": "application/x-www-form-urlencoded"
		},
		data: {},
		method: "GET",
		dataType: "json"
	},
	request(options = {}) {
		options.header = options.header || this.config.header;
		options.method = options.method || this.config.method;
		options.dataType = options.dataType || this.config.dataType;
		// #ifdef H5
		options.url = "/api/v1/" + options.url;
		// #endif
		// #ifndef H5
		options.url = this.config.baseUrl + options.url;
		// #endif
		//如果需要验证token
		if (options.token) {
			//如果需要验证checkToken 和用户没有登录!User.token
			if (options.checkToken && !User.token) {
				uni.showToast({
					title: "请先登录",
					icon: "none"
				})
				return uni.navigateTo({
					url: "/pages/login/login"
				});
			}
			options.header.token = User.token;
		}
		return uni.request(options)
	},
	get(url, data, options = {}) {
		options.url = url;
		options.data = data;
		options.method = "GET";
		return this.request(options);
	},
	post(url, data, options = {}) {
		options.url = url;
		options.data = data;
		options.method = "POST";
		return this.request(options);
	}
}

// async getpostclass() {
// 	let url = '';
// 	// #ifdef H5
// 	url = "/api/v1/postclass"
// 	// #endif
// 	// #ifndef H5
// 	url = this.config.webUrl + "postclass";
// 	// #endif
// 	let options = {
// 		url: url,
// 		method: "GET"
// 	}
// 	//返回的是Promise对象
// 	let [err, res] = await uni.request(options);
// 	console.log(res)
// }
