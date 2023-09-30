export type Product = {
  id: string
  name: string
  description: string
  created_at: string
  price: string
  promotional_price?: string
  discount?: number
  category_id: string
  colors: [
    {
      id: string,
      hexadecimal: string
    }
  ],
  images: [
    {
      id: string,
      url
    }
  ]
}
