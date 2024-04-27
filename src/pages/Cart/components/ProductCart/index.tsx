import * as S from './styles.ts'

import { useCart } from '../../../../store/useCart.ts'
import { Center } from '../../../../components/Center/index.tsx'
import { CartProductCard } from './CartProductCard/index.tsx'

import emptyCart from '../../../../../public/assets/images/empty-cart.png'

export const ProductCart = () => {
  const { items, total, removeAllItems } = useCart()
  const subTotalFormated = total
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

  return (
    <S.Container>
      <Center>
        <div className="header-container">
          <h4>Seu carrinho</h4>
          <span onClick={() => removeAllItems()}>Limpar Carrinho</span>
        </div>

        <div className="products-container">
          <ul>
            <li>
              <span>Produto</span>
              <span>Preço</span>
              <span>Quantidade</span>
              <span>Subtotal</span>
            </li>

            {items.length ? items.map(item => (
              <li key={item.id}>
                <CartProductCard
                  {...item}
                />
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
