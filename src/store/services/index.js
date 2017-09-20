import axios from 'axios'
import * as tokenApi from './token'

export function setupAxios () {
  // setup default host
  axios.defaults.baseURL = process.env.AP_HOST

  // setup default token
  const token = tokenApi.getToken()
  if (token) {
    axios.defaults.headers.common.Authorization = `JWT ${token}`
  }
}
