import axios from 'axios'
import setBaseURL from './config'

const httpinstance = axios.create({
  baseURL: setBaseURL(process.env.NODE_ENV),
  headers: {
    'Content-Type': 'application/json'
  }
})

export default httpinstance
