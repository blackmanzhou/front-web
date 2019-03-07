import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import LoginPage from '@/views/LoginPage'
import HomePage from '@/views/HomePage'
import ChangePwdPage from '@/views/ChangePasswordPage'

export default new Router({
  mode: 'history',
  base: '/lecturesheets-managerment-system',
  routes: [{
      path: '/login',
      name: '登录',
      component: LoginPage
    },
    {
      path: '/login/change-password',
      name: '修改密码',
      component: ChangePwdPage
    },
    {
      path: '/home',
      name: '主页',
      component: HomePage
    }
  ]
})
