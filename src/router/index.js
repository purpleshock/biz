import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/Login'
import Dashboard from '@/components/pages/Dashboard'
import Voucher from '@/components/pages/Voucher'
import { needLogin, needAnnoymous } from './checkAuth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      beforeEnter: needAnnoymous()
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: needLogin()
    },
    {
      path: '/voucher/:voucherCode',
      name: 'Voucher',
      component: Voucher,
      beforeEnter: needLogin()
    }
  ]
})
