// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import VueTouch from 'vue-touch'
import VueResource from 'vue-resource'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts

// 滑动时间
Vue.use(VueTouch, { name: 'v-touch' })
Vue.config.productionTip = false

Vue.use(VueResource)

Vue.http.options.emulateJSON = true
Vue.http.options.emulateHTTP = true
Vue.http.options.crossOrigin = true // 跨域访问

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  echarts,
  router,
  components: { App },
  template: '<App/>'
})
