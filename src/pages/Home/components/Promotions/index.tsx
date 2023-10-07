import * as S from './styles'

import { useEffect, useState } from 'react'

import axios from 'axios'
import Slider from 'react-slick'

import { ProductTypeTwo } from '../../../../types/product'

import { Center } from '../../../../components/Center'
import { Tag } from '../../../../components/Tag'
import { Title } from '../../../../components/Title'
import { ProductCard } from '../../../../components/ProductCard'
import { Arrow } from '../../../../components/Arrow'

import { BsBasket } from 'react-icons/Bs'
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/Hi'

export const Promotions = () => {
  const [productsOnSale, setProductsOnSale] = useState<ProductTypeTwo[]>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3333/products-on-sale')
        const { productsOnSale } = response.data

        setProductsOnSale(productsOnSale)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <Arrow right='73px' top='-52px' icon={<HiOutlineArrowNarrowLeft />} />,
    nextArrow: <Arrow right='15px' top='-52px' icon={<HiOutlineArrowNarrowRight />} />,
    useTransform: true,
  }

  return (
    <S.Container>
      <Center>
        <Tag title='Aproveite !' color='#8C71DB' icon={<BsBasket />} />
        <Title fontSize={2.25}>
          Em Promoção
        </Title>

        <div className="products-container">
          <Slider {...settings}>
            {productsOnSale?.map(product => (
              <ProductCard key={product.id} {...product} cardStyle='circular' />
            ))}
          </Slider>
        </div>
      </Center>
    </S.Container>
  )
}
