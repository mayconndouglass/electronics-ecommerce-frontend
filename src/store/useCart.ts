import { create } from 'zustand'
import { formatPriceForUSA } from '../utils/format-price-for-usa'
import { handleCartApi } from '../utils/handle-cart-api'
import { handleLocalStorageToken } from '../utils/handle-local-storage-token'

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
  updateItems: () => void
  addItemToCart: (item: CartItemProps) => void
  decreaseItemQuantity: (itemId: string, quantity: number) => void
  removeItemFromCart: (itemId: string) => void
  removeAllItems: () => void
}

export const useCart = create<useCartProps>((set, get) => ({
  items: [],
  quantity: 0,
  total: 0,
  getItems: async () => {
    //TODO: Aqui deve dar para solucionar usando then também, só que aí tem que pegar o user do useUser
    const tokenExists = handleLocalStorageToken().getToken()

    if (tokenExists) {
      const cartData = await handleCartApi.getItems(tokenExists)

      if (cartData) {
        const { cart: { items, totalPrice, totalQuantity } } = cartData

        set({
          items: [...items],
          total: totalPrice,
          quantity: totalQuantity
        })
      }
    }
  },
  updateItems: () => {
    const token = handleLocalStorageToken().getToken()

    if (token) {
      handleCartApi.updateItems(token, get().items)
        .then(
          () => get().getItems()
        )
    }
  },
  addItemToCart: (item) => {
    set((state) => {
      const tokenExists = handleLocalStorageToken().getToken()

      const itemIndex = state.items.findIndex(({ id }) => item.id === id)
      state.quantity += item.quantity

      const formattedPrice = formatPriceForUSA(item.price)

      state.total += item.quantity * formattedPrice

      if (itemIndex !== -1) {
        // Increase  item quantity
        state.items[itemIndex].quantity += item.quantity

        if (tokenExists) {
          handleCartApi.changeQuantity(
            item.id,
            state.items[itemIndex].quantity,
            tokenExists
          )
        }

        return { items: [...state.items] }
      }

      if (tokenExists) {
        handleCartApi.addItemToCart({
          productId: item.id,
          price: (formattedPrice * item.quantity)
            .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
          quantity: item.quantity,
        }, tokenExists!)
      }

      return { items: [...state.items, item] }
    })
  },
  decreaseItemQuantity: (itemId, quantity) => {
    set((state) => {
      const tokenExists = handleLocalStorageToken().getToken()

      const itemIndex = state.items.find(({ id }) => itemId === id)

      state.quantity -= quantity
      itemIndex!.quantity -= quantity

      const formattedPrice =
        formatPriceForUSA(itemIndex!.price)

      state.total -= quantity * formattedPrice

      if (tokenExists) {
        handleCartApi.changeQuantity(
          itemIndex!.id,
          itemIndex!.quantity,
          tokenExists
        )
      }

      return { items: [...state.items] }
    })
  },
  removeItemFromCart: (itemId) => {
    set((state) => {
      const tokenExists = handleLocalStorageToken().getToken()

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

      if (tokenExists) {
        handleCartApi.removeItemFromCart(itemId, tokenExists)
      }

      return { items: [...state.items] }
    })
  },
  removeAllItems: () => {
    set((state) => {
      const token = handleLocalStorageToken().getToken()

      if (state.items && token) {
        handleCartApi.removeAllItems(token)
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
