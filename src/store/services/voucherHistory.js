import axios from 'axios'
import querystring from 'querystring'

export function getHistory (from, to, page, size) {
  return axios.get(`/api/v1/batches?${querystring.stringify({
    createDateFrom: from.unix(),
    createDateTo: to.unix(),
    page,
    size
  })}`)
  .then(response => response.data)
}
