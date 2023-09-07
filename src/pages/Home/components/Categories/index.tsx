import axios from 'axios'

import * as S from './styles'
import { useEffect, useState } from 'react'

import { Center } from '../../../../components/Center'

import { BsTags } from 'react-icons/Bs'
import { Tag } from '../../../../components/Tag'
import { CardCategory } from './CardCategory'

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
        <Tag icon={<BsTags />} title='Categories' />

        <h2>Browse by Category</h2>

        <div className="container-categories">
          <div className="cards">
            {categories && categories.map(category => (
              <CardCategory
                key={category.id}
                alt={category.description}
                {...category}
              />
            ))}
          </div>
        </div>
      </Center>
    </S.Container>
  )
}
