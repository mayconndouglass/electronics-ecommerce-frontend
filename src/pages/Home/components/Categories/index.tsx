import * as S from './styles'

import Slider from 'react-slick'
import axios from 'axios'

import { settings } from './settings/slider'

import { Center } from '../../../../components/Center'
import { Tag } from '../../../../components/Tag'
import { CardCategory } from './components/CardCategory'
import { Title } from '../../../../components/Title'

import { BsTags } from 'react-icons/Bs'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

type Category = {
  id: string
  name: string
  description: string
  image: string
}

export const Categories = () => {
  const { data: categories, isFetching } = useQuery<Category[]>('categories', async () => {
    const response = await axios.get('http://localhost:3333/categories')
    const { categories } = response.data

    return categories
  }, { staleTime: 1000 * 60 * 10 })

  return (
    <S.Container>
      <Link to={'/testPage'}>
        <button>
          Testando apenas
        </button>
      </Link>

      <Center>
        <Tag
          icon={<BsTags />}
          title='Categorias'
          color={'#ff497c'}
        />

        <Title fontSize={2.25}>Busque por Categorias</Title>

        <div className="container-categories">
          {!isFetching && (
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
          )}
        </div>
      </Center>
    </S.Container>
  )
}
