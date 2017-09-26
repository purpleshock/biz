import axios from 'axios'

export function createVouchers (formData) {
  return axios.post('/api/v1/batches', {
    num: formData.numVouchers,
    amount: formData.voucherAmount
  })
  .then(response => response.data)
}
