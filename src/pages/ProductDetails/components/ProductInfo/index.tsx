import * as S from './styles'
import Slider from 'react-slick'
import { ProductType } from '../../../../types/product'

import { Center } from '../../../../components/Center'
import { AnimatedButton } from '../../../../components/AnimatedButton'

import { AiOutlineCheck } from 'react-icons/Ai'
import { CiHeart } from 'react-icons/Ci'

type ProductInfoProps = {
  productDetails: ProductType | undefined
}

export const ProductInfo = ({ productDetails }: ProductInfoProps) => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img src={productDetails?.images[i].url} alt={productDetails?.name} />
        </a>
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
          {productDetails?.images.map((productImage, index) => (
            <div key={productImage.id} className='main-image'>
              <img src={productImage.url} alt={`Image ${index}`} />
            </div>
          ))}
        </Slider>

        <div className="product-information">
          <h2>{productDetails?.name}</h2>
          <span className='old-price'> {productDetails?.price} </span>
          <span> - {productDetails?.promotional_price}</span>
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
              {productDetails?.colors.map(color => (
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
              <span>-</span>
              <input type="text" value='1' />
              <span>+</span>
            </div>
          </div>

          <div className="buttons">
            <AnimatedButton
              $background='#3577F0'
              color='#ffffff'
              title='Adicione ao Carrinho'
              $padding={{ vertical: 1, horizontal: 2 }}
            />

            <div className="wishlist">
              <a href="#"><CiHeart /></a>
            </div>
          </div>
        </div>
      </Center>
    </S.Container>
  )
}
