import * as S from './styles'
import { UseApiQuery } from '../../../../hooks/use-api-query'

import { AnimatedButton } from '../../../../components/AnimatedButton'
import { FilterTogle } from '../FilterTogle'

import { Category } from '../../../../types/category'
import { Color } from '../../../../types/color'
import { FiltersType } from '../..'

type FiltersProps = {
  filters: FiltersType
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>
}

export const Filters = ({ filters, setFilters }: FiltersProps) => {
  const { data: categories } = UseApiQuery<Category[]>('/categories')
  const { data: colors } = UseApiQuery<Color[]>('/colors')

  const prices = ['50', '100', '200', '500', '1000', '5000', '10000']

  const handleResetFilters = () => {
    setFilters({
      category: '',
      color: '',
      sort: 'newest',
      price: null,
      page: 1,
    })
  }

  return (
    <S.Container>
      <FilterTogle title='Categorias' size={'416px'}>
        <div className="drop-categories">
          <ul>
            <label htmlFor= 'all'>
              <input
                type="radio"
                value='all'
                id='all'
                checked={filters.category === ''}
                onChange={() => setFilters(prev => ({...prev, category: ''}))}
              />
              {'Todas'}
            </label>

            {categories?.map(category => (
              <label key={category.id} htmlFor= {category.id}>
                <input
                  type="radio"
                  value={category.name}
                  id={category.id}
                  checked={filters.category === category.id}
                  onChange={() => setFilters(prev => ({...prev, category: category.id}))}
                />
                {category.name}
              </label>
            ))}
          </ul>
        </div>
      </FilterTogle>

      <FilterTogle title='Cores' size={'72px'}>
        <div className="colors">
          <ul>
            {colors?.map(color => (
              <S.ColorItem
                key={color.id}
                color={color.hexadecimal}
                isSelected={filters.color === color.id}
                onClick={() => setFilters(prev => (
                  {...prev, color: filters.color === color.id ? '' : color.id}
                ))}
              >
                <span />
              </S.ColorItem>
            ))}
          </ul>
        </div>
      </FilterTogle>

      <FilterTogle title='Preços' size={'150px'}>
        <div>
          <ul className='prices'>
            {prices.map(price => (
              <S.PriceItem
                key={price}
                isSelected={filters.price === price}
                onClick={() => setFilters(prev => (
                  {...prev, price: filters.price === price ? ' ' : price}
                )
                )}
              >
                        R${price}
              </S.PriceItem>
            ))}
          </ul>
        </div>

      </FilterTogle>

      <div onClick={handleResetFilters}>
        <AnimatedButton
          $background='#3577F0'
          $padding={{ vertical: 1, horizontal: 2.375 }}
          title='Resetar Campos'
          color='white'

        />
      </div>

    </ S.Container>
  )
}
