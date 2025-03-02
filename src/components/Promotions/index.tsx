import { BsBasket } from 'react-icons/bs'
import Slider from 'react-slick'

import { UseApiQuery } from '@/hooks/use-api-query'
import { ProductTypeTwo } from '@/types'

import { Center } from '../Center'
import { ProductCard } from '../ProductCard'
import { Tag } from '../Tag'
import { Title } from '../Title'
import { settings } from './settings/slider'
import * as S from './styles'

type cardStyling = {
  $typeCard: 'circular' | 'normal'
}

type FeaturedProductsType = {
  productsOnSale: ProductTypeTwo[]
}

export const Promotions = ({ $typeCard }: cardStyling) => {
  const {
    data: { productsOnSale } = {},
    isFetching
  } = UseApiQuery<FeaturedProductsType>('/products-on-sale')

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
