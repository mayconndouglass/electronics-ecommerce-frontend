import * as S from './styles'
import { Link } from 'react-router-dom'

import { ProductTypeTwo } from '../../types/product'

import { AiFillStar } from 'react-icons/Ai'
import { ImEye } from 'react-icons/Im'
import { AiOutlineHeart } from 'react-icons/Ai'

import { AnimatedButton } from '../AnimatedButton'
import { useCart } from '../../store/useCart'
import { useWishList } from '../../store/useWishList'

type ProductCardProps = {
  $cardStyling: 'normal' | 'circular'
}

export const ProductCard = (product: ProductTypeTwo & ProductCardProps) => {
  const { addItemToCart } = useCart()
  const { addItemToWishList } = useWishList()

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
      <div className="image-container">
        <Link to={`/store/product/${id}`}>
          <img src={image_url} alt={name} />
        </Link>

        {discount && (
          <div className="badget-container">
            <div className="badget-promotional">
              {`${discount}% off`}
            </div>
          </div>
        )}

        <div className="actions-container">
          <Link to={`/store/product/${id}`}>
            <div className="view">
              <AnimatedButton
                icon={<ImEye />}
                $padding={{ vertical: 0.825, horizontal: 0.825 }}
              />
            </div>
          </Link>

          <div
            className="add-to-cart"
            onClick={() => addItemToCart({
              id: product.id,
              name: product.name,
              price: product.promotional_price ?? product.price,
              imageUrl: product.image_url,
              quantity: 1
            })}
          >
            <AnimatedButton
              title='Adicionar ao Carrinho'
              $background='#ff497c'
              $padding={{ vertical: 0.625, horizontal: 0.3125 }}
              color='white'
            />
          </div>

          <div
            className="favorite"
            onClick={() => addItemToWishList({
              id: product.id,
              name: product.name,
              price: product.promotional_price ?? product.price,
              imageUrl: product.image_url
            })}>
            <AnimatedButton
              icon={<AiOutlineHeart />}
              $padding={{ vertical: 0.825, horizontal: 0.825 }}
            />
          </div>
        </div>
      </div>

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
            <Link to={`/store/product/${id}`}>
              <div className="view">
                <AnimatedButton
                  icon={<ImEye />}
                  $padding={{ vertical: 0.825, horizontal: 0.825 }}
                />
              </div>
            </Link>

            <div
              className="add-to-cart"
              onClick={() => addItemToCart({
                id: product.id,
                name: product.name,
                price: product.promotional_price ?? product.price,
                imageUrl: product.image_url,
                quantity: 1
              })}
            >
              <AnimatedButton
                title='Adicionar ao Carrinho'
                $background='#ff497c'
                $padding={{ vertical: 0.625, horizontal: 0.3125 }}
                color='white'
              />
            </div>

            <div
              className="favorite"
              onClick={() => addItemToWishList({
                id: product.id,
                name: product.name,
                price: product.promotional_price ?? product.price,
                imageUrl: product.image_url,
              })}
            >
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
