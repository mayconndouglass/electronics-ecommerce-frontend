import * as S from './styles.ts'

import { Header } from '../../components/Header/index.tsx'
import { Banner } from '../../components/Banner/index.tsx'
import { Promotions } from '../../components/Promotions/index.tsx'
import { Footer } from '../../components/Footer/index.tsx'
import { ToSign } from '../../components/ToSign/index.tsx'
import { ProductDetails } from './components/ProductDetails/index.tsx'

export const IndividualProduct = () => {
  return (
    <S.Container>
      <Header />
      <main>
        <Banner />
        <ProductDetails />
        <Promotions $typeCard='normal' />
        <ToSign />
      </main>
      <Footer />
    </S.Container>
  )
}
