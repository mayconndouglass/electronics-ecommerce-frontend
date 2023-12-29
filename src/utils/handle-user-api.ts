import { AxiosError } from 'axios'
import { api } from '../services/api'

export const handleUserApi = {
  validateToken: async (token: string) => {
    try {
      const response = await api.get(
        '/me',
        { headers: { Authorization: `Bearer ${token}` } }
      )

      return response.data
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.message)
        return
      }

      console.log('Erro na requisição:', error)
    }

  },
  signin: async (email: string, password: string) => {
    try {
      const response = await api.post('/sessions', { email, password })

      return response.data
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.message)
        return
      }

      console.log('Erro na requisição:', error)
    }
  },
  signup: async (name: string, email: string, password: string) => {
    try {
      const response = await api.post('/users', { name, email, password })

      return response.status
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.message)
      }

      console.log('Erro na requisição:', error)
    }
  }
}
