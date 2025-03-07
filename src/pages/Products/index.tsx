import { useEffect, useState } from 'react'
import { CiFilter } from 'react-icons/ci'

import empty from '/assets/images/empty.avif'
import { Banner,
  BreadCrumb,
  Center,
  Footer,
  Header,
  ProductCard,
  SkeletonProductCard,
  ToSign} from '@/components'
import { ProductsPaginated } from '@/types'

import { UseApiQuery } from '../../hooks/use-api-query.ts'
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
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false)
  const [loadedImages, setLoadedImages] = useState<boolean>(false)
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

  useEffect(() => {
    setLoadedImages(false)

    if (!products) return

    Promise.all(
      products.map((product) =>
        new Promise<void>((resolve) => {
          const img = new Image()
          img.src = product.ProductImage[0].image.url
          img.onload = () => resolve()
          img.onerror = () => resolve()
        })
      )
    ).then(() => setLoadedImages(true))
  }, [products])

  return (
    <S.Container>
      <Header />
      <Banner />

      <main>
        <BreadCrumb title='Nossos Produtos' crumb='Produtos' />
        <Center>
          <div className="content">
            <Filters
              filters={filters}
              setFilters={setFilters}
              sideBar={sideBarIsOpen}
              setSideBar={setSideBarIsOpen}
            />
            <div className="right">
              <div className='filter-results'>
                <div
                  className='filter-icon'
                  onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
                >
                  <CiFilter />
                  <span>Filtros</span>
                </div>

                <div>
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
              </div>

              <div className='products'>
                {loadedImages && products?.map(product => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    image_url={product.ProductImage[0].image.url}
                    $cardStyling="normal"
                  />
                ))}
              </div>

              <div className="products">
                {(isFetching || !loadedImages) &&  (
                  <>
                    {Array.from({ length: 9 }).map((_, index) => (
                      <div key={index} className='skeleton-product-card'>
                        <SkeletonProductCard  $cardStyling='normal' />
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
