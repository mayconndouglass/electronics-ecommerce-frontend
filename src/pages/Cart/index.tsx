import { Banner } from '@/components'
import { Footer } from '@/components'
import { Header } from '@/components'

import { ProductCart } from './components/ProductCart'

export const Cart = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <ProductCart />
      </main>
      <Footer />
    </>
  )
}
