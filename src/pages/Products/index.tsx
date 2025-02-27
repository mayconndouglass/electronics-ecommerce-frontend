import { useState } from 'react'

import empty from '../../../public/assets/images/empty.jpg'
import { Banner } from '../../components/Banner'
import { BreadCrumb } from '../../components/BreadCrumb'
import { Center } from '../../components/Center'
import { Footer } from '../../components/Footer/index.tsx'
import { Header } from '../../components/Header'
import { ProductCard } from '../../components/ProductCard/index.tsx'
import { ToSign } from '../../components/ToSign/index.tsx'
import { UseApiQuery } from '../../hooks/use-api-query.ts'
import { ProductsPaginated } from '../../types/products-paginated'
import { Filters } from './components/Filters/filters.tsx'
import { Pagination } from './components/pagination/index.tsx'
import * as S from './styles.ts'

export type FiltersType = {
  category: string
  color: string
  sort: string
  price: string | null
  page: number
}

export const Products = () => {
  const [filters, setFilters] = useState<FiltersType>({
    category: '',
    color: '',
    sort: 'newest',
    price: null,
    page: 1
  })

  const queryParams = new URLSearchParams({
    page: filters.page.toString(),
    limit: '9',
    category: filters.category,
    color: filters.color,
    sortby: filters.sort,
    maxprice: filters.price || ''
  }).toString()

  const { data: pagination, isFetching } = UseApiQuery<ProductsPaginated>(
    `/products/paginated?${queryParams.toString()}`
  )
  const { currentPage, totalPages, totalItems, products } = pagination ?? {}

  return (
    <S.Container>
      <Header />
      <Banner />

      <main>
        <BreadCrumb title='Nossos Produtos' crumb='Produtos' />
        <Center>
          <div className="content">
            <Filters  filters={filters} setFilters={setFilters} />

            <div className="right">
              <div className='filter-results'>
                <span>
                  Exibindo {totalPages ? currentPage : 0} - {totalPages}
                  {' '}de {totalItems} resultados
                </span>

                <select
                  name="filter-results"
                  id="filter-results"
                  value={filters.sort}
                  onChange={(e) => setFilters(prev => ({...prev, sort: e.target.value}))}
                >
                  <option value="newest">Mais recentes</option>
                  <option value="older">Mais antigos</option>
                  <option value="name">Por nome</option>
                  <option value="price">Por preço</option>
                </select>
              </div>

              <div className='products'>
                {products?.map(product => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    image_url={product.ProductImage[0].image.url}
                    $cardStyling="normal"
                  />
                ))}
              </div>

              <div className="products">
                {isFetching && (
                  <>
                    {Array.from({ length: 9 }).map((_, index) => (
                      <div key={index} >
                        <div className="skeleton image-loading" />
                        <div className="title-loading skeleton" />
                        <div className="price-loading skeleton" />
                      </div>
                    ))}
                  </>
                )}
              </div>

              {products?.length === 0 && (
                <div className="no-products">
                  <img src={empty} alt="Nenhum produto foi encontrado" />
                  <h2>Nenhum produto foi encontrado</h2>
                </div>
              )}
            </div>
          </div>

          {!isFetching ? (
            <Pagination  products={pagination} setFilters={setFilters} />
          ) : (
            <div className="skeleton-pagination-container">
              <div className="skeleton skeleton-pagination" />
            </div>
          )}

        </Center>
        <ToSign />
      </main>

      <Footer />
    </S.Container>
  )
}
