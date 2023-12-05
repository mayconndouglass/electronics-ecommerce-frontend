import { create } from 'zustand'
import { formatPriceForUSA } from '../utils/format-price-for-usa'
import { handleCart } from '../utils/handle-cart'

export type CartItemProps = {
  id: string,//Esse Id é do produto
  name: string,
  price: string,
  quantity: number,
  imageUrl: string
}

type useCartProps = {
  items: CartItemProps[]
  quantity: number
  total: number,
  getItems: () => void
  addItemToCart: (item: CartItemProps) => void
  decreaseItemQuantity: (itemId: string, quantity: number) => void
  removeItemFromCart: (itemId: string) => void
  removeAllItems: () => void
}

//TODO: Detalhe que só vai ser possível fazer essas requisições para o back end se o user estiver logado na sua conta, obviamente
//TODO: AInda decidir como que essas informações serão pegas do back end
const cartId: string | undefined = '0bc22c17-5b24-4537-9e82-7289decc3dfc'
const userId: string = 'a7011d22-2176-4c1d-af96-ae4d2b5f71c0'

export const useCart = create<useCartProps>((set) => ({
  items: [],
  quantity: 0,
  total: 0,
  getItems: async () => {
    try {
      const request = await handleCart.getItems(userId)

      set({
        items: [...request.cart.items],
        total: request.cart.totalPrice,
        quantity: request.cart.totalQuantity
      })
    } catch (error) {
      console.log(error)
    }
  },
  addItemToCart: (item) => {
    set((state) => {
      const itemIndex = state.items.findIndex(({ id }) => item.id === id)
      state.quantity += item.quantity

      const formattedPrice = formatPriceForUSA(item.price)

      state.total += item.quantity * formattedPrice

      if (itemIndex !== -1) {
        // Increase  item quantity
        state.items[itemIndex].quantity += item.quantity

        handleCart.changeQuantity(
          item.id,
          state.items[itemIndex].quantity
        )

        return { items: [...state.items] }
      }

      //TODO: QUando for a primeira vez, precisa receber o id do carrinho(na verdade retorna o cartItem) de alguma forma
      handleCart.addItemToCart({
        user_id: userId,
        cart_id: cartId,
        product_id: item.id,
        price: (formattedPrice * item.quantity)
          .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
        quantity: item.quantity,
      })

      return { items: [...state.items, item] }
    })
  },
  decreaseItemQuantity: (itemId, quantity) => {
    set((state) => {
      const itemFound = state.items.find(({ id }) => itemId === id)

      state.quantity -= quantity
      itemFound!.quantity -= quantity

      const formattedPrice =
        formatPriceForUSA(itemFound!.price)

      state.total -= quantity * formattedPrice
      handleCart.changeQuantity(itemFound!.id, itemFound!.quantity)

      return { items: [...state.items] }
    })
  },
  removeItemFromCart: (itemId) => {
    set((state) => {
      const productIndex = state.items
        .findIndex(({ id }) => itemId === id)

      if (productIndex === -1) {
        return { products: [...state.items] }
      }

      state.quantity -= state.items[productIndex].quantity

      const formattedPrice = formatPriceForUSA(
        state.items[productIndex].price
      )

      state.total -= state.items[productIndex].quantity * formattedPrice

      state.items.splice(productIndex, 1)

      handleCart.removeItemFromCart(itemId, cartId)

      return { items: [...state.items] }
    })
  },
  removeAllItems: () => {
    set((state) => {
      if (state.items) {
        handleCart.removeAllItems(cartId)
      }

      return {
        items: [],
        quantity: 0,
        total: 0
      }
    })
  }
}))

useCart.getState().getItems()
