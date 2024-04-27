import { getItemProps } from '../types/get-items-api'
import { api } from '../services/api'
import { CartItemProps } from '../store/useCart'
import { AxiosError } from 'axios'

type ItemCartProps = {
  productId: string
  quantity: number
  price: string
}

type handleCartApiProps = {
  getItems: (token: string) => Promise<getItemProps> | null
  updateItems: (token: string, items: CartItemProps[]) => Promise<number>
  addItemToCart: (itemProps: ItemCartProps, token: string) => void
  changeQuantity: (productId: string, quantity: number, token: string) => void
  removeItemFromCart: (productId: string, token: string) => void
  removeAllItems: (token: string) => void
}

//TODO: Precisa tratar erros aqui ?
export const handleCartApi = <handleCartApiProps>{
  getItems: async (token) => {
    try {
      const response = await api.get(
        '/cart/items',
        { headers: { Authorization: `Bearer ${token}` } }
      )

      return response.data
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
  updateItems: async (token, cartItems) => {
    try {
      const response = await api.patch(
        '/cart/update-cart-items',
        { items: [...cartItems] },
        { headers: { Authorization: `Bearer ${token}` } }
      )

      return response.status
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.message)
        return
      }

      console.log('Erro na requisição:', error)
    }
  },
  addItemToCart: async (itemProps, token) => {
    await api.post(
      '/cart/add-to-cart',
      itemProps,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  },
  changeQuantity: async (productId, quantity, token) => await api.patch(
    '/cart/item/change-quantity',
    { itemId: productId, quantity },
    { headers: { Authorization: `Bearer ${token}` } }
  ),
  removeItemFromCart: (productId, token) => api.delete(
    `/cart/remove-item/${productId}`,
    { headers: { Authorization: `Bearer ${token}` } }
  ),
  removeAllItems: (token) => api
    .delete(
      '/cart/remove-all-items',
      { headers: { Authorization: `Bearer ${token}` } }
    )
}
