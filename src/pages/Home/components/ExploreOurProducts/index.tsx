import * as S from './styles'
import { useQuery } from 'react-query'

import Slider from 'react-slick'

import { settings } from './settings/slider'
import { ProductTypeTwo } from '../../../../types/product'

import { Tag } from '../../../../components/Tag'
import { Center } from '../../../../components/Center'
import { ProductCard } from '../../../../components/ProductCard'

import { BsBasket } from 'react-icons/bs'
import { AnimatedButton } from '../../../../components/AnimatedButton'
import { Title } from '../../../../components/Title'

import { api } from '../../../../services/api'

export const ExploreOurProducts = () => {
  const {
    data: featuredProducts,
    isFetching
  } = useQuery<ProductTypeTwo[]>('featuredProducts', async () => {
    const response = await api.get('/featured-products')
    const { featuredProducts } = response.data

    return featuredProducts
  }, { staleTime: 1000 * 60 * 10 })

  return (
    <S.Container>
      <Center>
        <Tag title='Nossos Produtos' color='#8C71DB' icon={<BsBasket />} />
        <Title fontSize={2.25}>Explore nossos Produtos</Title>

        <div className="container-products-cards">
          <Slider {...settings}>
            {!isFetching && featuredProducts?.map(product => (
              <ProductCard key={product.id} {...product} $cardStyling='normal' />
            ))}
          </Slider>
        </div>

        <div className="button">
          <AnimatedButton
            title='Veja Todos Os Produtos'
            $background='#F6F7FB'
            $padding={{ vertical: 1, horizontal: 2.375 }}
            color='#777777'
          />
        </div>
      </Center>
    </S.Container>
  )
}
