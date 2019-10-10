import Vue from 'vue'
import App from './App'
import router from "./router"
import axios from "axios"
import VueResource from "vue-resource"

// 引用 rem 自适应
import "./common/js/font"
import "./common/stylus/icon.css"
Vue.use(VueResource)
Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
