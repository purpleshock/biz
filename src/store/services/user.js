import axios from 'axios'

export function login (mail, password) {
  return axios.post('/api/v1/admins/session', {
    mail,
    password
  })
}
