import { useEffect, useState } from 'react'

import { Banner, Center, Footer, Header } from '@/components'
import { useWishList } from '@/store'

import emptyCart from '../../../public/assets/images/empty-cart.avif'
import { FavoriteProductCardV1 } from './components/FavoriteProductCardV1'
import { FavoriteProductCardV2 } from './components/FavoriteProductCardV2'
import * as S from './styles'

export const WishList = () => {
  const { favorites } = useWishList()

  const [isMobile, setIsMobile] = useState(window.innerWidth < 991)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 991)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
              <li style={{ display: isMobile ? 'none' : 'grid' }}>
                <span>Produto</span>
                <span>Preço</span>
                <span>Status do Estoque</span>
              </li>

              {favorites.length ? favorites.map(item => (
                <li key={item.id}>
                  {!isMobile ? (
                    <FavoriteProductCardV1
                      {...item}
                    />
                  ) : (
                    <FavoriteProductCardV2
                      {...item}
                    />
                  )}
                </li>
              )) : (
                <div>
                  <img src={emptyCart} alt="Lista vazia" />
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
