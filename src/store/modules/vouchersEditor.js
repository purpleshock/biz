import Vue from 'vue'
import * as vouchersApi from '../services/vouchers'

export const UPDATE = 'UPDATE'
export const SUBMIT = 'SUBMIT'

const mutations = {
  [UPDATE] (state, payload) {
    Vue.set(state, payload.field, payload.value)
  }
}

const actions = {
  async [SUBMIT] ({ commit, state }) {
    await vouchersApi.createVouchers(state)
  }
}

const getters = {
  isValid (state) {
    return (
      state.numVouchers > 0 &&
      state.voucherAmount > 0
    )
  }
}

export default {
  namespaced: true,
  state: {},
  mutations,
  actions,
  getters
}
