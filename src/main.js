import Vue from 'vue'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
