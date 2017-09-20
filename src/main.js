import Vue from 'vue'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'
import App from './App'
import router from './router'
import store from './store'
import { setupAxios } from './store/services'

Vue.config.productionTip = false

sync(store, router)

setupAxios()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
