import moment from 'moment'
import * as voucherHistoryApi from '../services/voucherHistory'

const CREATED_LAST_MONTH = 'CREATED_LAST_MONTH'

const mutations = {
  [CREATED_LAST_MONTH] (state, payload) {
    if (payload && payload.length > 0) {
      state.lastMonth = payload
    } else {
      state.lastMonth = false
    }
  }
}

const actions = {
  async [CREATED_LAST_MONTH] ({ commit }) {
    const to = moment().startOf('day')
    const from = moment(to).subtract(1, 'month')
    const histories = await voucherHistoryApi.getHistory(from, to)
    commit(CREATED_LAST_MONTH, histories)
  }
}

export default {
  namespaced: true,
  state: {
    lastMonth: false
  },
  mutations,
  actions
}
