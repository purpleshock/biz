import moment from 'moment'
import * as voucherHistoryApi from '../services/voucherHistory'

export const GET_DASHBOARD = 'GET_DASHBOARD'
const CREATED_LAST_MONTH = 'CREATED_LAST_MONTH'

const mutations = {
  [CREATED_LAST_MONTH] (state, payload) {
    state.lastMonth = payload
  }
}

const actions = {
  [GET_DASHBOARD] ({ dispatch }) {
    dispatch(CREATED_LAST_MONTH)
  },
  async [CREATED_LAST_MONTH] ({ commit }) {
    const to = moment().startOf('day')
    const from = moment(to).subtract(1, 'month')
    const histories = await voucherHistoryApi.getHistory(from, to, 1, 10)
    commit(CREATED_LAST_MONTH, histories)
  }
}

const getters = {
  lastMonthRecordsReady (state) {
    return !!state.lastMonth
  },
  lastMonthHasActivities (state) {
    return state.lastMonth && state.lastMonth.length > 0
  }
}

export default {
  namespaced: true,
  state: {
    lastMonth: false
  },
  mutations,
  actions,
  getters
}
