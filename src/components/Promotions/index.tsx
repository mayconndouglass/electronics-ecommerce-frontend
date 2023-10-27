import * as S from './styles'

import axios from 'axios'
import { useQuery } from 'react-query'
import Slider from 'react-slick'

import { ProductTypeTwo } from '../../types/product'
import { settings } from './settings/slider'

import { Center } from '../Center'
import { Tag } from '../Tag'
import { Title } from '../Title'
import { ProductCard } from '../ProductCard'

import { BsBasket } from 'react-icons/Bs'

type cardStyling = {
  $typeCard: 'circular' | 'normal'
}

export const Promotions = ({ $typeCard }: cardStyling) => {
  const {
    data: productsOnSale,
    isFetching
  } = useQuery<ProductTypeTwo[]>('productsOnSale', async () => {
    const response = await axios.get('http://localhost:3333/products-on-sale')
    const { productsOnSale } = response.data

    return productsOnSale
  }, { staleTime: 1000 * 60 * 10 })

  return (
    <S.Container>
      <Center>
        <Tag title='Aproveite !' color='#8C71DB' icon={<BsBasket />} />
        <Title fontSize={2.25}>
          Em Promoção
        </Title>

        <div className="products-container">
          <Slider {...settings}>
            {!isFetching && productsOnSale?.map(product => (
              <ProductCard
                key={product.id}
                {...product}
                $cardStyling={$typeCard}
              />
            ))}
          </Slider>
        </div>
      </Center>
    </S.Container>
  )
}
