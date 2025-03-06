// import { useEffect, useState } from 'react'
import { BsBasket } from 'react-icons/bs'
import Slider from 'react-slick'

import {
  AnimatedButton,
  Center,
  ProductCard,
  Tag,
  Title
} from '@/components'
import { UseApiQuery } from '@/hooks/use-api-query'
import { useImagesLoaded } from '@/hooks/use-image-loaded'
import { SkeletonProductCard } from '@/pages/Products/components/SkeletonProductCard'
import { ProductTypeTwo } from '@/types'

import { settings } from './settings/slider'
import * as S from './styles'

type FeaturedProductsType = {
  featuredProducts: ProductTypeTwo[]
}

export const ExploreOurProducts = () => {
  const {
    data: { featuredProducts } = {},
  } = UseApiQuery<FeaturedProductsType>(
    '/featured-products'
  )
  const loadedImages = useImagesLoaded(featuredProducts, (product) => product.image_url)

  return (
    <S.Container>
      <Center>
        <Tag title='Nossos Produtos' color='#8C71DB' icon={<BsBasket />} />
        <Title fontSize={2.25}>Explore nossos Produtos</Title>

        <div className="container-products-cards">
          {loadedImages && featuredProducts ? (
            <Slider {...settings}>
              {featuredProducts.map(product => (
                <ProductCard key={product.id} {...product} $cardStyling='normal' />
              ))}
            </Slider>
          ) : (
            <>
              <Slider {...settings}>
                {Array.from({ length: 8 }).map((_, index) => (
                  <SkeletonProductCard key={index} $cardStyling='normal'/>
                ))}
              </Slider>
            </>
          )}
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
