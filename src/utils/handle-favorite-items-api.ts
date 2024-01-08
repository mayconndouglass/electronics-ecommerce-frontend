import { AxiosError } from 'axios'
import { api } from '../services/api'
import { FavoriteItemProps } from '../store/useWishList'

type handleFavoriteItemsApiProps = {
  getItems: (token: string) => Promise<FavoriteItemProps[]> | null
  addItemToFavorites: (token: string, productId: string) => void
  removeItemFromFavorites: (token: string, productId: string) => void
  updateItems: (token: string, items: FavoriteItemProps[]) => Promise<number>
}

export const handleFavoriteItemsApi = <handleFavoriteItemsApiProps>{
  getItems: async (token) => {
    try {
      const response = await api.get(
        '/wish-list/favorite-items',
        { headers: { Authorization: `Bearer ${token}` } }
      )

      return response.data.items
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status == 404) {
        return null
      }

      if (error instanceof AxiosError) {
        console.log(error.response?.data.message)
        return
      }

      console.log('Erro na requisição:', error)
    }
  },
  addItemToFavorites: async (token, productId) => {
    try {
      await api.post(
        '/wish-list/add-item-to-favorites',
        { productId },
        { headers: { Authorization: `Bearer ${token}` } }
      )
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.message)
      }

      console.log('Erro na requisição:', error)
    }
  },
  removeItemFromFavorites: (token, productId) => {
    try {
      api.delete(
        `/wish-list/remove-item-from-favorites/${productId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.message)
      }

      console.log('Erro na requisição:', error)
    }
  },
  updateItems: async (token, items) => {
    try {
      const response = await api.patch(
        '/wish-list/update-favorite-items',
        { items: [...items] },
        { headers: { Authorization: `Bearer ${token}` } }
      )

      return response.status
    } catch (error) {
      console.log(error)
      if (error instanceof AxiosError) {
        console.log(error.response?.data.message)
        return
      }

      console.log('Erro na requisição:', error)
    }
  }
}
