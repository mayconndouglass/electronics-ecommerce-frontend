import { Banner } from '../../components/Banner'
import { Center } from '../../components/Center'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { useWishList } from '../../store/useWishList'
import { FavoriteProductCard } from './components/FavoriteProductCard'
import * as S from './styles'

export const WishList = () => {
  const { favorites } = useWishList()

  return (
    <S.Container>
      <Header />
      <Banner />
      <main>
        <Center>
          <div className="header-container">
            <h4>Sua Lista de Desejos</h4>
          </div>

          <div className="products-container">
            <ul>
              <li>
                <span>Produto</span>
                <span>Preço</span>
                <span>Status do Estoque</span>
              </li>

              {favorites.length ? favorites.map(item => (
                <li key={item.id}>
                  <FavoriteProductCard
                    {...item}
                  />
                </li>
              )) : (
                <div>
                  {/* <img src={emptyCart} alt="Carrinho vazio" /> */}
                  <h2>Vazio</h2>
                </div>
              )}
            </ul>
          </div>
        </Center>
      </main>
      <Footer />
    </S.Container>
  )
}
