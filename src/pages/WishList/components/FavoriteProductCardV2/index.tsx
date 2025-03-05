import { IoIosClose } from 'react-icons/io'
import { Link } from 'react-router-dom'

import { FavoriteItemProps, useCart, useWishList } from '@/store'

import * as S from './styles'

export const FavoriteProductCardV2 = (itemData: FavoriteItemProps) => {
  const { id, name, price, imageUrl } = itemData
  const { removeItemFromWishList } = useWishList()
  const { addItemToCart } = useCart()

  return (
    <S.Container>
      <div className="cart-product-image">
        <Link to={`/loja/product/${id}`}>
          <img src={imageUrl} alt={name} title={name}/>
        </Link>
      </div>

      <div>
        <div className="cart-product-name">
          <Link to={`/loja/product/${id}`}><h5>{name}</h5></Link>
          <span onClick={() => removeItemFromWishList(id)}>
            <IoIosClose />
          </span>
        </div>

        <div className="cart-product-price">
          <div className='value'>Price:</div>
          {price}
        </div>

        <div className="cart-product-quantity">
          <div className='value'>Status:</div>

          <div className="favorite-product-stock">
            Em estoque
          </div>
        </div>

        <div className="cart-product-subtotal">
          <div className='favorite-product-button'>
            <button onClick={() => addItemToCart({ ...itemData, quantity: 1 })}>
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </S.Container >
  )
}
