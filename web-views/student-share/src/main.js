// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTouch from 'vue-touch'
import { store } from './store'

// 滑动时间
Vue.use(VueTouch, { name: 'v-touch' })
Vue.config.productionTip = false

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.http.options.emulateJSON = true
Vue.http.options.emulateHTTP = true
Vue.http.options.crossOrigin = true // 跨域访问

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
