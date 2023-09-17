import * as S from './styles'

import { Tag } from '../../../../components/Tag'
import { Center } from '../../../../components/Center'

import { BsBasket } from 'react-icons/Bs'
import { ProductCard } from './components/ProductCard'

export const ExplorerOurProducts = () => {
  return (
    <S.Container>
      <Center>
        <Tag title='Nossos Produtos' color='#8C71DB' icon={<BsBasket />} />
        <h2>Explore nossos Produtos</h2>

        <div className="container-products-cards">
          <ProductCard />
        </div>
      </Center>
    </S.Container>
  )
}