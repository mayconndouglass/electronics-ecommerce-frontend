import { useEffect, useState } from 'react'
import axios from 'axios'

import Slider from 'react-slick'

import { Center } from '../../../../components/Center'
import { BsTags } from 'react-icons/Bs'
import { Tag } from '../../../../components/Tag'
import { CardCategory } from './components/CardCategory'

import * as S from './styles'

import { HiOutlineArrowNarrowRight } from 'react-icons/Hi'
import { HiOutlineArrowNarrowLeft } from 'react-icons/Hi'

import { Arrow } from './components/Arrow'

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
        <Tag icon={<BsTags />} title='Categories' />

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
