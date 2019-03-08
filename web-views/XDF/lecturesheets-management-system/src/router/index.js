import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import IndexPage from '@/views/IndexPage'
import LoginPage from '@/views/LoginPage'
import HomePage from '@/views/HomePage'
import ChangePwdPage from '@/views/ChangePasswordPage'

// 用户信息管理
import UserManagementPage from '@/views/UserManagement/Index'
import SchoolAuntPage from '@/views/UserManagement/SchoolAuntPage'
import SchoolAdminPage from '@/views/UserManagement/AdministratorPage'

// 校区管理
import SchoolManagementPage from '@/views/SchoolAreaManagement/Index'

// 讲义管理
import LectureManagementPage from '@/views/LectureManagement/Index'

export default new Router({
  mode: 'history',
  base: '/lecturesheets-managerment-system',
  routes: [
    {
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
      path: '/',
      name: '',
      component: IndexPage,
      redirect: '/login',
      children: [
        {
          path: 'home',
          name: '首页',
          component: HomePage
        },
        {
          path: 'user-management',
          name: '用户管理',
          component: UserManagementPage,
          children: [
            {
              path: 'school-admin',
              name: '校区管理员',
              component: SchoolAdminPage
            },
            {
              path: 'school-aunt',
              name: '校区阿姨',
              component: SchoolAuntPage
            },
            {
              path: '/',
              redirect: 'school-admin'
            }
          ]
        },
        {
          path: 'school-management',
          name: '校区管理',
          component: SchoolManagementPage
        },
        {
          path: 'lecture-management',
          name: '讲义管理',
          component: LectureManagementPage
        }
      ]
    }
  ]
})
