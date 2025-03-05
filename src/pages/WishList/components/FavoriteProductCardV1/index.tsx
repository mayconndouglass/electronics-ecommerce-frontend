import { IoIosClose } from 'react-icons/io'
import { Link } from 'react-router-dom'

import { FavoriteItemProps, useCart, useWishList } from '@/store'

import * as S from './styles'

export const FavoriteProductCardV1 = (itemData: FavoriteItemProps) => {
  const { id, name, price, imageUrl } = itemData
  const { removeItemFromWishList } = useWishList()
  const { addItemToCart } = useCart()

  return (
    <S.Container>
      <div className="favorite-product">
        <span onClick={() => removeItemFromWishList(id)}>
          <IoIosClose />
        </span>

        <div className="favorite-product-image">
          <Link to={`/loja/product/${id}`}>
            <img src={imageUrl} alt={name} />
          </Link>
        </div>

        <Link to={`/loja/product/${id}`}><h5>{name}</h5></Link>
      </div>

      <div className="favorite-product-price">
        {price}
      </div>

      <div className="favorite-product-stock">
        Em estoque
      </div>

      <div className='favorite-product-button'>
        <button onClick={() => addItemToCart({ ...itemData, quantity: 1 })}>
          Adicionar ao carrinho
        </button>
      </div>
    </S.Container>
  )
}
