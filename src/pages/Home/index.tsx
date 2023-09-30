import { Categories } from './components/Categories'
import { Experience } from './components/Experience'
import { ExploreOurProducts } from './components/ExploreOurProducts'
import { Header } from './components/Header'
import { HeaderTop } from './components/HeaderTop'
import { MainCarousel } from './components/MainCarousel'

export const Home = () => {
  return (
    <>
      <HeaderTop />
      <Header />
      <MainCarousel />
      <Categories />
      <Experience />
      <ExploreOurProducts />
    </>
  )
}
