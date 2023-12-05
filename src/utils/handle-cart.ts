import axios from 'axios'
import { getItemProps } from '../types/get-items-api'

type addItemToCartProps = {
  user_id: string
  cart_id: string | undefined
  product_id: string
  quantity: number
  price: string
}

type handleCartProps = {
  getItems: (userId: string) => Promise<getItemProps>
  addItemToCart: (itemProps: addItemToCartProps) => void
  changeQuantity: (productId: string, quantity: number) => void
  removeItemFromCart: (productId: string, cartId: string) => void
  removeAllItems: (cartId: string) => void
}

const BASEURL = 'http://localhost:3333/'

export const handleCart = <handleCartProps>{
  getItems: async (userId) => {
    const response = await axios
      .get(`${BASEURL}cart/${userId}/items`)
    console.log('RESPONSE', response.data)
    return response.data
  },
  //TODO: pegar o id do carrinho por aqui
  addItemToCart: async (itemProps) => {
    await axios.post(`${BASEURL}cart/add-to-cart`, itemProps)
  },
  changeQuantity: async (productId, quantity) => await axios.patch(
    `${BASEURL}cart/item/change-quantity`,
    { itemId: productId, quantity }
  ),
  removeItemFromCart: (productId, cartId) => axios.delete(
    `${BASEURL}cart/remove-item`,
    { data: { id: productId, cartId } }
  ),
  removeAllItems: (cartId) => axios
    .delete(`${BASEURL}cart/${cartId}/remove-all-items`)
}
