import axios from 'axios'
import { config } from 'config/config'

export const request = axios.create({
  baseURL: config.baseUrl,
  responseType: 'json',
})
