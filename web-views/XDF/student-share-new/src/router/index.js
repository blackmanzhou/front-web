import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/views/FrontPage'
import NewStarShinePage from '@/views/NewStarShinePage'
import ExclusiveEnergyPage from '@/views/ExclusiveEnergyPage'
import SelfSpecialPage from '@/views/SelfSpecialPage'
import HelpProcessPage from '@/views/HelpProcessPage'
import WonderfulMomentsPage from '@/views/WonderfulMomentsPage'
import ProcessWayPage from '@/views/ProcessWayPage'
import SharePage from '@/views/SharePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'FrontPage',
      component: FrontPage
    },
    {
      path: '/new-star-shine',
      name: 'NewStarShinePage',
      component: NewStarShinePage
    },
    {
      path: '/exclusive-energy',
      name: 'ExclusiveEnergyPage',
      component: ExclusiveEnergyPage
    },
    {
      path: '/self-special',
      name: 'SelfSpecialPage',
      component: SelfSpecialPage
    },
    {
      path: '/help-process',
      name: 'HelpProcessPage',
      component: HelpProcessPage
    },
    {
      path: '/wonderful-moments',
      name: 'WonderfulMomentsPage',
      component: WonderfulMomentsPage
    },
    {
      path: '/process-way',
      name: 'ProcessWayPage',
      component: ProcessWayPage
    },
    {
      path: '/share',
      name: 'SharePage',
      component: SharePage
    }
  ]
})
