import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false

import { dialogAlert } from '@/common'
Vue.use(dialogAlert)

import { store } from '@/store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  dialogAlert, // message dialog
  router,
  components: { App },
  template: '<App/>'
})
