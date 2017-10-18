import axios from 'axios'
import { localStorage } from 'global/window'

export const getToken = () => localStorage.getItem('user.token')

export const removeToken = () => localStorage.removeItem('user.token')

export const setToken = token => {
  localStorage.setItem('user.token', token)
  axios.defaults.headers.common.Authorization = `JWT ${token}`
}

export const checkToken = () => {
  return axios
    .get('/api/v1/admins/token')
    .then(response => response.status === 200)
}
