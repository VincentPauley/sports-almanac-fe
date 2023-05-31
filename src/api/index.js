import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:3030'

const receiveRequest = req => {
  const { status, data } = req

  if (status > 299) {
    throw new Error('improper status returned')
  }

  return data
}

const API = {
  get(endpoint = '/') {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(BASE_URL + endpoint)
        const { status, data } = result

        if (status > 299) {
          throw new Error('improper status returned')
        }

        resolve(data)
      } catch (e) {
        reject(e)
      }
    })
  },
  delete(endpoint) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!endpoint) throw new Error('"endpoint" is required for delete')
        const result = await axios.delete(BASE_URL + endpoint)

        const data = receiveRequest(result)

        resolve(data)
      } catch (e) {
        reject(e)
      }
    })
  }
}

export default API
