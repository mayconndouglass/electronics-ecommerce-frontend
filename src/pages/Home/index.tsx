import { Categories } from './components/Categories'
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
    </>
  )
}
