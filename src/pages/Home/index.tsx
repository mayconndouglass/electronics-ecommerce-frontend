import { HeaderTop } from './components/HeaderTop'
import { Header } from '../../components/Header'
import { MainCarousel } from './components/MainCarousel'
import { Categories } from './components/Categories'
import { Experience } from './components/Experience'
import { ExploreOurProducts } from './components/ExploreOurProducts'
import { Testimonials } from './components/Testimonials'
import { Promotions } from '../../components/Promotions'
import { WayUs } from './components/WayUs'
import { Posters } from '../../components/Posters'
import { ToSign } from '../../components/ToSign'
import { Footer } from '../../components/Footer'

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
