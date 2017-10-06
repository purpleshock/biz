import Vue from 'vue'
import * as vouchersApi from '../services/vouchers'

export const SUGGEST = 'SUGGEST'
export const CLEAR_SUGGEST = 'CLEAR_SUGGEST'
export const GET_VOUCHER = 'GET_VOUCHER'
export const GET_AVAILABLE_STATUS = 'GET_AVAILABLE_STATUS'

const mutations = {
  [SUGGEST] (state, payload) {
    state.suggests = payload
  },
  [CLEAR_SUGGEST] (state) {
    state.suggests = []
  },
  [GET_VOUCHER] (state, voucher) {
    Vue.set(state, 'detail', voucher)
  }
}

const actions = {
  async [SUGGEST] ({ commit, state }, term) {
    const suggests = await vouchersApi.getVoucherSuggests(term)
    commit(SUGGEST, suggests)
  },
  [CLEAR_SUGGEST] ({ commit }) {
    commit(CLEAR_SUGGEST)
  },
  async [GET_VOUCHER] ({ commit }, code) {
    const voucher = await vouchersApi.getVoucher(code)
    const availableStatus = await vouchersApi.getAvailableStatus()
    commit(GET_VOUCHER, {
      ...voucher,
      availableStatus
    })
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
