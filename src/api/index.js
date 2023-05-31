import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:3030'

const API = {
  get(endpoint = '/') {
    return axios.get(BASE_URL + endpoint)
  }
}

export default API
