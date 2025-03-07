import { useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import { AnimatedButton } from '@/components'
import { Category, Color } from '@/types'

import { UseApiQuery } from '../../../../hooks/use-api-query'
import { FiltersType } from '../..'
import { FilterTogle } from '../FilterTogle'
import * as S from './styles'

type FiltersProps = {
  filters: FiltersType
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>
  sideBar: boolean,
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>
}

export const Filters = ({ filters, setFilters, sideBar, setSideBar }: FiltersProps) => {
  const {
    data: categories,
    isFetching: isFetchingCategories
  } = UseApiQuery<Category[]>('/categories')
  const {
    data: colors,
    isFetching: isFetchingColors
  } = UseApiQuery<Color[]>('/colors')

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

  useEffect(() => {
    const handleCloseSidebar = (event: MouseEvent | KeyboardEvent) => {
      if ('key' in event && event.key === 'Escape') {
        setSideBar(false)
        return
      }

      if (event.target && !(event.target as HTMLElement).closest('.side-bar')) {
        setSideBar(false)
      }
    }

    document.addEventListener('mousedown', handleCloseSidebar)
    document.addEventListener('keydown', handleCloseSidebar)

    document.body.style.overflow = sideBar ? 'hidden' : ''

    return () => {
      document.removeEventListener('mousedown', handleCloseSidebar)
      document.removeEventListener('keydown', handleCloseSidebar)
      document.body.style.overflow = ''
    }
  }, [sideBar])

  return (
    <>
      <S.Container  $menuIsOpen={sideBar}>
        <div className="side-bar">
          <div className="close-menu" onClick={() => setSideBar(false)}>
            <AiOutlineClose />
          </div>
        </div>

        <FilterTogle title='Categorias' size={isFetchingCategories ? '0px': '416px'}>
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

        <FilterTogle title='Cores' size={isFetchingColors ? 'opx' : '72px'}>
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

        <div className='reset-filters-button' onClick={handleResetFilters}>
          <AnimatedButton
            $background='#3577F0'
            $padding={{ vertical: 1, horizontal: 2.375 }}
            title='Resetar Campos'
            color='white'

          />
        </div>
      </ S.Container>

      <S.overlay $menuIsOpen={sideBar} />
    </>
  )
}
