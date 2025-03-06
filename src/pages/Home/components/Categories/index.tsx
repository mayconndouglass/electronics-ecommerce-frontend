import { BsTags } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import { Center, Tag, Title } from '@/components'
import { UseApiQuery } from '@/hooks/use-api-query'
import { useImagesLoaded } from '@/hooks/use-image-loaded'
import { Category } from '@/types'

import { CardCategory } from './components/CardCategory'
import { SkeletonCardCategory } from './components/SkeletonCardCategory'
import { settings } from './settings/slider'
import * as S from './styles'

export const Categories = () => {
  const { data: categories, isFetching } = UseApiQuery<Category[]>('/categories')
  const loadedImages = useImagesLoaded(categories, (category) => category.image)

  return (
    <S.Container>
      <Link to={'/store/cart'}>
        <button>
          Testando cart
        </button>
      </Link>
      <Link to={'/store/wish-list'}>
        <button>
          Testando wishlist
        </button>
      </Link>

      <Center>
        <Tag
          icon={<BsTags />}
          title='Categorias'
          color={'#ff497c'}
        />

        <Title fontSize={2.25}>Busque por Categoria</Title>

        <div className="container-categories">
          {loadedImages && (
            <div className="cards">
              <Slider {...settings}>
                {categories?.map(category => (
                  <CardCategory
                    key={category.id}
                    alt={category.description}
                    {...category}
                  />
                ))}
              </Slider>
            </div>
          )}

          {(isFetching || !loadedImages) && (
            <div className="cards">
              <Slider {...settings}>
                {Array.from({ length: 7 }).map((_, index) => (
                  <SkeletonCardCategory key={index} />
                ))}
              </Slider>
            </div>
          )}
        </div>
      </Center>
    </S.Container>
  )
}
