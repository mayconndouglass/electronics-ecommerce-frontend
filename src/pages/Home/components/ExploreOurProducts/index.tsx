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
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 750,
        settings: {
          prevArrow: <Arrow right='62px' top='-52px' icon={<HiOutlineArrowNarrowLeft />} />,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 512,
        settings: {
          prevArrow: <Arrow right='62px' top='-52px' icon={<HiOutlineArrowNarrowLeft />} />,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        }
      },
      {
        breakpoint: 460,
        settings: {
          prevArrow: <Arrow right='62px' top='-32px' icon={<HiOutlineArrowNarrowLeft />} />,
          nextArrow: <Arrow right='15px' top='-32px' icon={<HiOutlineArrowNarrowRight />} />,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        }
      },
    ]
  }

  return (
    <S.Container>
      <Center>
        <Tag title='Nossos Produtos' color='#8C71DB' icon={<BsBasket />} />
        <Title fontSize={2.25}>Explore nossos Produtos</Title>

        <div className="container-products-cards">
          <Slider {...settings}>
            {featuredProducts?.map(product => (
              <ProductCard key={product.id} {...product} cardStyling='normal' />
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
