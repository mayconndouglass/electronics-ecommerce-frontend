import * as S from './styles'
import Slider from 'react-slick'
import { getSliderSettings } from './settings'
import { ChangeEvent, useEffect, useState } from 'react'

import { ProductType } from '../../../../../../types/product'

import { Center } from '../../../../../../components/Center'
import { AnimatedButton } from '../../../../../../components/AnimatedButton'

import { AiOutlineCheck } from 'react-icons/ai'
import { CiHeart } from 'react-icons/ci'
import { BsPlusLg } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'

import { useCart } from '../../../../../../store/useCart'


type ProductInfoProps = {
  productDetails: ProductType
}

export const ProductInfo = ({ productDetails }: ProductInfoProps) => {
  const { addItemToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const { colors, images, ...restData } = productDetails

  const settings = getSliderSettings(productDetails)
  const descriptions = productDetails?.description.split('\n')

  useEffect(() => { if (productDetails) setQuantity(1) }, [productDetails])

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const reportedValue = Number(event.target.value)

    if (reportedValue > 0) setQuantity(Number(reportedValue))
  }

  return (
    <S.Container>
      <Center>
        <Slider {...settings}>
          {images.map((productImage, index) => (
            <div key={productImage?.id} className='main-image'>
              <img src={productImage?.url} alt={`Image ${index}`} />
            </div>
          ))}
        </Slider>

        <div className="product-information">
          <h2>{productDetails?.name}</h2>

          {productDetails?.promotional_price ? (
            <>
              <span className='old-price'> {productDetails?.price} </span>
              <span> - {productDetails?.promotional_price}</span>
            </>
          ) : (
            <span>{productDetails?.price}</span>
          )}
          {/* TODO: Pensar se vai por reviwes futuramente*/}

          <div className="product-features">
            <ul>
              <li><AiOutlineCheck />Em estoque</li>
              <li><AiOutlineCheck />Entrega gratuita</li>
              <li><AiOutlineCheck />Até 30% de desconto</li>
            </ul>
          </div>

          <div className="description">
            <ul>
              {descriptions?.slice(0, 2).map(description => (
                <li key={description}>{description}</li>
              ))}
            </ul>
          </div>

          <div className="colors">
            <h6>Cores:</h6>

            <div>
              {colors.map(color => (
                <span
                  key={color.id}
                  style={{ backgroundColor: color.hexadecimal }}
                ></span>
              ))}
            </div>
          </div>

          <div className="quantity">
            <h6>Quantidade</h6>

            <div>
              <span
                onClick={() => { if (quantity > 1) setQuantity(quantity - 1) }}
              >
                <BiMinus />
              </span>

              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                inputMode="numeric"
                min={1}
              />

              <span onClick={() => setQuantity(quantity + 1)}>
                <BsPlusLg />
              </span>
            </div>
          </div>

          <div className="buttons">
            <div onClick={() => {
              addItemToCart({
                ...restData,
                price: restData.promotional_price ?? restData.price,
                imageUrl: images[0].url,
                quantity,
              })
            }}>
              <AnimatedButton
                $background='#3577F0'
                color='#ffffff'
                title='Adicione ao Carrinho'
                $padding={{ vertical: 1, horizontal: 2 }}
              />
            </div>

            <div className="wishlist">
              <a href="#"><CiHeart /></a>
            </div>
          </div>
        </div>
      </Center>
    </S.Container >
  )
}
