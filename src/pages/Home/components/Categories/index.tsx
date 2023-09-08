import * as S from './styles'
import { useEffect, useState } from 'react'

import Slider from 'react-slick'
import axios from 'axios'

import { Center } from '../../../../components/Center'
import { Tag } from '../../../../components/Tag'
import { CardCategory } from './components/CardCategory'
import { Arrow } from './components/Arrow'

import { BsTags } from 'react-icons/Bs'
import { HiOutlineArrowNarrowRight } from 'react-icons/Hi'
import { HiOutlineArrowNarrowLeft } from 'react-icons/Hi'

type Category = {
  id: string
  name: string
  description: string
  image: string
}

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3333/categories')
        const { categories } = response.data

        setCategories(categories)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    prevArrow: <Arrow right='58px' icon={<HiOutlineArrowNarrowLeft />} />,
    nextArrow: <Arrow right='0' icon={<HiOutlineArrowNarrowRight />} />,
    useTransform: true,
  }

  return (
    <S.Container>
      <Center>
        <Tag
          icon={<BsTags />}
          title='Categories'
          color={'#ff497c'}
        />

        <h2>Browse by Category</h2>

        <div className="container-categories">
          <div className="cards">
            <Slider {...settings}>
              {categories && categories.map(category => (
                <CardCategory
                  key={category.id}
                  alt={category.description}
                  {...category}
                />
              ))}
            </Slider>
          </div>
        </div>
      </Center>
    </S.Container>
  )
}
