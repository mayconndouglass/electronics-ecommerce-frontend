import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import { ProductsPaginated } from '@/types'

import { FiltersType } from '../../index.tsx'
import * as S from './styles.ts'

type FultersProps = {
  products: ProductsPaginated | undefined
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>
}

export const Pagination = ({ products ,setFilters }: FultersProps) => {
  if (!products) return null
  const { currentPage, totalPages } = products

  return (
    <S.Container>
      <ul>
        <li
          className={currentPage === 1 ? 'disabled' : ''}
          onClick={() => setFilters(
            prev => ({...prev, page: currentPage >= 1 ? currentPage - 1 : 1}))
          }
        >
          <IoIosArrowBack />
        </li>
        {Array.from({ length: totalPages || 0 }).map((_, index) => (
          <li
            key={index + 1}
            onClick={() => setFilters(prev => ({...prev, page: index + 1}))}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </li>
        ))}
        <li
          className={currentPage === totalPages ? 'disabled' : ''}
          onClick={() => setFilters(prev => (
            {...prev, page: currentPage === totalPages ? currentPage : currentPage + 1}
          ))}
        >
          <IoIosArrowForward />
        </li>
      </ul>
    </S.Container>
  )
}
