import { localStorage } from 'global/window'

export const getToken = () => localStorage.getItem('user.token')
export const setToken = token => localStorage.getItem('user.token', token)
