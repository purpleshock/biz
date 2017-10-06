import Vue from 'vue'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'
import App from './App'
import router from './router'
import store from './store'
import { setupAxios } from './store/services'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VModal from 'vue-js-modal'
import ClickOutside from './plugins/ClickOutside'

Vue.use(VModal)
Vue.component('icon', Icon)

Vue.use(ClickOutside)

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
