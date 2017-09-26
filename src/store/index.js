import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import dashboard from './modules/dashboard'
import vouchersEditor from './modules/vouchersEditor'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    dashboard,
    vouchersEditor
  }
})
