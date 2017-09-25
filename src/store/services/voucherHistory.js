import axios from 'axios'
import querystring from 'querystring'

export function getHistory (from, to) {
  return axios.get('/api/v1/batches', querystring.stringify({
    from: from.unix(),
    to: to.unix()
  }))
  .then(response => response.data)
}
