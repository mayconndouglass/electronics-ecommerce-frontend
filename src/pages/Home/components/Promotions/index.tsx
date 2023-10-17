import * as S from './styles'

import { useEffect, useState } from 'react'

import axios from 'axios'
import Slider from 'react-slick'

import { ProductTypeTwo } from '../../../../types/product'
import { settings } from './settings/slider'

import { Center } from '../../../../components/Center'
import { Tag } from '../../../../components/Tag'
import { Title } from '../../../../components/Title'
import { ProductCard } from '../../../../components/ProductCard'

import { BsBasket } from 'react-icons/Bs'

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
              <ProductCard
                key={product.id}
                {...product}
                $cardStyling='circular'
              />
            ))}
          </Slider>
        </div>
      </Center>
    </S.Container>
  )
}
