import * as S from './styles'
import Slider from 'react-slick'
import { ChangeEvent, useEffect, useState } from 'react'

import { ProductType } from '../../../../../../types/product'

import { Center } from '../../../../../../components/Center'
import { AnimatedButton } from '../../../../../../components/AnimatedButton'

import { AiOutlineCheck } from 'react-icons/Ai'
import { CiHeart } from 'react-icons/Ci'
import { BsPlusLg } from 'react-icons/Bs'
import { BiMinus } from 'react-icons/Bi'

import { useCart } from '../../../../../../store/useCart'

type ProductInfoProps = {
  productDetails: ProductType | undefined
}

export const ProductInfo = ({ productDetails }: ProductInfoProps) => {
  const { addItemToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const { colors, images, ...restData } = productDetails!

  const handleAddToCart = () => {
    addItemToCart({
      id: restData.id,
      name: restData.name,
      price: restData.promotional_price ?? restData.price,
      imageUrl: images[0].url,
      quantity,
    })
  }

  useEffect(() => {
    if (productDetails) {
      setQuantity(1)
    }
  }, [productDetails])

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const reportedValue = Number(event.target.value)

    if (reportedValue > 0) {
      setQuantity(Number(reportedValue))
    }
  }

  const settings = {
    customPaging: function (i: number) {
      const productImages = productDetails?.images

      if (productImages && i >= 0 && i < productImages.length) {
        return (
          <img
            src={productDetails?.images[i].url ?? ''}
            alt={productDetails?.name}
          />
        )
      }

      return (
        <img
          src={''}
          alt={''}
        />
      )
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  const descriptions = productDetails?.description.split('\n')

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
            <div onClick={handleAddToCart}>
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
