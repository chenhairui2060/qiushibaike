import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
//挂载全局方法
import config from "./common/config.js"
Vue.prototype.config=config
import User from "./common/user.js"
Vue.prototype.User=User
import request from "./common/request.js"
Vue.prototype.$http=request
App.mpType = 'app'

const app = new Vue({
    ...App,
	config
})
app.$mount()
