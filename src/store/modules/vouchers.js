import Vue from 'vue'
import * as vouchersApi from '../services/vouchers'

export const SUGGEST = 'SUGGEST'
export const CLEAR_SUGGEST = 'CLEAR_SUGGEST'

const mutations = {
  [SUGGEST] (state, payload) {
    state.suggests = payload
  },
  [CLEAR_SUGGEST] (state) {
    state.suggests = []
  }
}

const actions = {
  async [SUGGEST] ({ commit, state }, term) {
    const suggests = await vouchersApi.getVoucherSuggests(term)
    commit(SUGGEST, suggests)
  },
  [CLEAR_SUGGEST] ({ commit }) {
    commit(CLEAR_SUGGEST)
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
  state: {
    suggests: []
  },
  mutations,
  actions,
  getters
}
