import * as S from './styles'
import { Link } from 'react-router-dom'

import { ProductTypeTwo } from '../../types/product'

import { AiFillStar } from 'react-icons/Ai'
import { ImEye } from 'react-icons/Im'
import { AiOutlineHeart } from 'react-icons/Ai'

import { AnimatedButton } from '../AnimatedButton'
import { useCart } from '../../store/useCart'

type ProductCardProps = {
  $cardStyling: 'normal' | 'circular'
}

export const ProductCard = (product: ProductTypeTwo & ProductCardProps) => {
  const { addItemToCart } = useCart()

  const {
    id,
    image_url,
    name,
    discount,
    price,
    promotional_price,
    $cardStyling
  } = product

  return (
    <S.Container $cardStyling={$cardStyling} className='product-card'>
      <Link to={`/loja/product/${id}`}>
        <div className="image-container">

          <img src={image_url} alt={name} />


          {discount && (
            <div className="badget-container">
              <div className="badget-promotional">
                {`${discount}% off`}
              </div>
            </div>
          )}

          <div className="actions-container">
            <Link to={`/loja/product/${id}`}>
              <div className="view">
                <AnimatedButton
                  icon={<ImEye />}
                  $padding={{ vertical: 0.825, horizontal: 0.825 }}
                />
              </div>
            </Link>

            <div
              className="add-to-cart"
              onClick={() => addItemToCart({ ...product, quantity: 1 })}
            >
              <AnimatedButton
                title='Adicionar ao Carrinho'
                $background='#ff497c'
                $padding={{ vertical: 0.625, horizontal: 0.3125 }}
                color='white'
              />
            </div>

            <div className="favorite">
              <AnimatedButton
                icon={<AiOutlineHeart />}
                $padding={{ vertical: 0.825, horizontal: 0.825 }}
              />
            </div>
          </div>
        </div>
      </Link>

      <div className="product-info">
        <div className="rating-stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />

          <span>(64)</span>
        </div>

        <div className="product-name">
          <a href="#">{name}</a>
        </div>

        <div className="prices">
          {promotional_price ? (
            <>
              <span className='promotional-price'>{promotional_price}</span>
              <span className='original-price'>{price}</span>
            </>
          ) : (
            <span className='promotional-price'>{price}</span>
          )}
        </div>

        {$cardStyling === 'circular' &&
          <div className="actions-container">
            <Link to={`/loja/product/${id}`}>
              <div className="view">
                <AnimatedButton
                  icon={<ImEye />}
                  $padding={{ vertical: 0.825, horizontal: 0.825 }}
                />
              </div>
            </Link>

            <div
              className="add-to-cart"
              onClick={() => addItemToCart({ ...product, quantity: 1 })}
            >
              <AnimatedButton
                title='Adicionar ao Carrinho'
                $background='#ff497c'
                $padding={{ vertical: 0.625, horizontal: 0.3125 }}
                color='white'
              />
            </div>

            <div className="favorite">
              <AnimatedButton
                icon={<AiOutlineHeart />}
                $padding={{ vertical: 0.825, horizontal: 0.825 }}
              />
            </div>
          </div>
        }
      </div>
    </S.Container>
  )
}
