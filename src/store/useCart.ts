import { create } from 'zustand'
import { ProductType, ProductTypeTwo } from '../types/product'
import { getTheCorrectPriceFormattedForUSA } from '../utils/get-the-correct-price-formatted-for-USA'

type ProductWithQuantity = (ProductType | ProductTypeTwo) & { quantity: number }

type useCartProps = {
  products: ProductWithQuantity[]
  quantity: number
  subtotal: number
  addToCart: (product: ProductWithQuantity) => void
}

export const useCart = create<useCartProps>((set) => ({
  products: [],
  quantity: 0,
  subtotal: 0,
  addToCart: (product) => {
    set((state) => {
      const foundProduct = state.products.findIndex(({ id }) => product.id === id)
      state.quantity += product.quantity

      const formattedPrice = getTheCorrectPriceFormattedForUSA(
        product.price,
        product.promotional_price
      )

      state.subtotal += product.quantity * formattedPrice

      if (foundProduct !== -1) {
        state.products[foundProduct].quantity += product.quantity

        return { products: [...state.products] }
      }

      return { products: [...state.products, product] }
    })
  }
}))
