import * as userApi from '../services/user'

export const UPDATE = 'UPDATE'
export const LOGIN = 'LOGIN'

const mutations = {
  [UPDATE] (state, payload) {
    const { field, value } = payload
    state[field] = value
  },
  [LOGIN] (state, payload) {
    state.isLogin = true
    state.token = payload.token
  }
}

const actions = {
  async [LOGIN] ({ commit, state }) {
    const { mail, password } = state
    const userInfo = await userApi.login(mail, password)
    commit(LOGIN, userInfo)
  }
}

const getters = {
  isReadyForLogin (state) {
    const isMailValid = !!state.mail
    const isPasswordValid = !!state.password
    return isMailValid && isPasswordValid
  }
}

export default {
  namespaced: true,
  state: {
    mail: '',
    password: '',
    isLogin: false
  },
  mutations,
  actions,
  getters
}
