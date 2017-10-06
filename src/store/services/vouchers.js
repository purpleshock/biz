import axios from 'axios'
import querystring from 'querystring'

export function createVouchers (formData) {
  return axios.post('/api/v1/batches', {
    num: formData.numVouchers,
    amount: formData.voucherAmount
  })
  .then(response => response.data)
}

export function getVoucherSuggests (term) {
  const query = querystring.stringify({
    term,
    size: 5
  })
  return axios.get(`/api/v1/vouchers?${query}`)
  .then(response => response.data)
}

export function getVoucher (code) {
  return axios.get(`/api/v1/vouchers/${code}`)
  .then(response => response.data)
}

export function getAvailableStatus (code) {
  return axios.get(`/api/v1/vouchers/status`)
  .then(response => response.data)
}
