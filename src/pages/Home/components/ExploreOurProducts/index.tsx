import * as S from './styles'
import { useEffect, useState } from 'react'

import axios from 'axios'
import Slider from 'react-slick'

import { ProductTypeTwo } from '../../../../types/product'

import { Tag } from '../../../../components/Tag'
import { Center } from '../../../../components/Center'
import { ProductCard } from '../../../../components/ProductCard'
import { Arrow } from '../../../../components/Arrow'

import { HiOutlineArrowNarrowRight } from 'react-icons/Hi'
import { HiOutlineArrowNarrowLeft } from 'react-icons/Hi'
import { BsBasket } from 'react-icons/Bs'
import { AnimatedButton } from '../../../../components/AnimatedButton'
import { Title } from '../../../../components/Title'

export const ExploreOurProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<ProductTypeTwo[]>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3333/featured-products')
        const { featuredProducts } = response.data
        setFeaturedProducts(featuredProducts)
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
    rows: 2,
    slidesToScroll: 4,
    prevArrow: <Arrow right='73px' top='-52px' icon={<HiOutlineArrowNarrowLeft />} />,
    nextArrow: <Arrow right='15px' top='-52px' icon={<HiOutlineArrowNarrowRight />} />,
    useTransform: true,
  }

  return (
    <S.Container>
      <Center>
        <Tag title='Nossos Produtos' color='#8C71DB' icon={<BsBasket />} />
        <Title fontSize={2.25}>Explore nossos Produtos</Title>

        <div className="container-products-cards">
          <Slider {...settings}>
            {featuredProducts?.map(product => (
              <ProductCard key={product.id} {...product} cardStyle='normal' />
            ))}
          </Slider>
        </div>

        <div className="button">
          <AnimatedButton
            title='Veja Todos Os Produtos'
            background='#F6F7FB'
            padding={{ vertical: 1, horizontal: 2.375 }}
            color='#777777'
          />
        </div>
      </Center>
    </S.Container>
  )
}
