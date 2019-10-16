import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"

Vue.config.productionTip = false

// 使用 Vant
import Vant from "vant"
import 'vant/lib/index.css';
Vue.use(Vant)
// 使用 Vant 的 导航栏
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);

// 使用懒加载
import VueLazyLoad from "vue-lazyload"
Vue.use(VueLazyLoad, {
  loading: require("./assets/img/common/placeholder.png")
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
