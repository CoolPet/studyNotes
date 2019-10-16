import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from "vant"
import 'vant/lib/index.css';
import toast from "components/common/toast"
import FastClick from "fastclick"
import VueLazyLoad from "vue-lazyload"


Vue.use(Vant)

Vue.config.productionTip = false
// 安装 toast 插件
Vue.use(toast)

// 解决移动端 300ms 延迟
FastClick.attach(document.body)

// 使用懒加载插件
Vue.use(VueLazyLoad, {
  loading: require("./assets/img/common/placeholder.png")
})

// 创建 $bus 为事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
