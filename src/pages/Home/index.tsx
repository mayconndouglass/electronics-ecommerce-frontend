import { Footer, Header, Posters, Promotions, ToSign } from '@/components'

import {
  Categories,
  Experience,
  ExploreOurProducts,
  HeaderTop,
  MainCarousel,
  Testimonials,
  WayUs
} from './components'

export const Home = () => {
  return (
    <>
      <HeaderTop />
      <Header $homeStyle={true} />
      <main>
        <MainCarousel />
        <Categories />
        <Experience />
        <ExploreOurProducts />
        <Testimonials />
        <Promotions $typeCard='circular' />
        <WayUs />
        <Posters />
        <ToSign />
      </main>
      <Footer />
    </>
  )
}
