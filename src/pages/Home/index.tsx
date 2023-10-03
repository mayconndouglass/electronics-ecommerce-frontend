import { Categories } from './components/Categories'
import { Experience } from './components/Experience'
import { ExploreOurProducts } from './components/ExploreOurProducts'
import { Header } from './components/Header'
import { HeaderTop } from './components/HeaderTop'
import { MainCarousel } from './components/MainCarousel'
import { Promotions } from './components/Promotions'
import { Testimonials } from './components/Testimonials'
import { WayUs } from './components/WayUs'

export const Home = () => {
  return (
    <>
      <HeaderTop />
      <Header />
      <MainCarousel />
      <Categories />
      <Experience />
      <ExploreOurProducts />
      <Testimonials />
      <Promotions />
      <WayUs />
    </>
  )
}
