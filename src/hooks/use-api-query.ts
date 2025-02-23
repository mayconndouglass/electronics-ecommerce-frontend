import { useQuery } from 'react-query'
import { api } from '../services/api'

export function UseApiQuery<T>(url: string) {//TODO: Mover isso aqui par uma pasta hook
  return useQuery<T>(url, async () => {
    const response = await api.get(url)

    return response.data
  }, { staleTime: 1000 * 60 * 10 })
}
