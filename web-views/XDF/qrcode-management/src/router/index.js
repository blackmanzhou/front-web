import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import ClassListPage from '@/views/ClassListPage'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/class-list',
      name: 'ClassList',
      component: ClassListPage
    }
  ]
})
