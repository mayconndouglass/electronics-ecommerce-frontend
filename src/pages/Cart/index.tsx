import { Banner } from '../../components/Banner'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
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
