import { useEffect, useState } from 'react'

import { Center } from '@/components'
import { useCart } from '@/store'

import emptyCart from '../../../../../public/assets/images/empty-cart.png'
import { CartProductCardV1 } from './components/CartProductCardV1/index.tsx'
import { CartProductCardV2 } from './components/CartProductCardV2/index.tsx'
import * as S from './styles.ts'

export const ProductCart = () => {
  const { items, total, removeAllItems } = useCart()
  const subTotalFormated = total
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

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
      <Center>
        <div className="header-container">
          <h4>Seu carrinho</h4>
          <span onClick={() => removeAllItems()}>Limpar Carrinho</span>
        </div>

        <div className="products-container">
          <ul>

            <li style={{ display: isMobile ? 'none' : 'grid' }}>
              <span>Produto</span>
              <span>Preço</span>
              <span>Quantidade</span>
              <span>Subtotal</span>
            </li>

            {items.length ? items.map(item => (
              <li key={item.id}>
                {!isMobile ? (
                  <CartProductCardV1
                    {...item}
                  />
                ) : (
                  <CartProductCardV2
                    {...item}
                  />
                )}
              </li>
            )) : (
              <div>
                <img src={emptyCart} alt="Carrinho vazio" />
              </div>
            )}
          </ul>
        </div>

        <div className="subtotal-container">
          <div className="coupon">
            <input type="text" placeholder='Adicione o seu cupom' />
            <button>Aplicar</button>
          </div>

          <div className="subtotal">
            <div>
              Total
              <span>{subTotalFormated}</span>
            </div>

            <button>Checkout</button>
          </div>
        </div>
      </Center>
    </S.Container>
  )
}
