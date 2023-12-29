import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})
