export type getItemProps = {
  cart: {
    totalPrice: number
    totalQuantity: number
    items: [
      {
        id: string
        name: string
        price: string
        imageUrl: string
        quantity: number
      }
    ]
  }
}
