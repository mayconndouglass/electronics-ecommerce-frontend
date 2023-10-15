import * as S from './styles'
import { useEffect, useState } from 'react'

import Slider from 'react-slick'
import axios from 'axios'

import { settings } from './settings/slider'

import { Center } from '../../../../components/Center'
import { Tag } from '../../../../components/Tag'
import { CardCategory } from './components/CardCategory'
import { Title } from '../../../../components/Title'

import { BsTags } from 'react-icons/Bs'

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

  return (
    <S.Container>
      <Center>
        <Tag
          icon={<BsTags />}
          title='Categorias'
          color={'#ff497c'}
        />

        <Title fontSize={2.25}>Busque por Categorias</Title>

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
