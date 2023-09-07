import * as S from './styles'

import { Center } from '../../../../components/Center'

import { BsTags } from 'react-icons/Bs'
import { Tag } from '../../../../components/Tag'
import { CardCategory } from './CardCategory'

const dataTest = {
  image: '../../../../../public/assets/images/phones.png',
  alt: 'qualqr um',
  title: 'Maycon'
}

export const Categories = () => {
  return (
    <S.Container>
      <Center>
        <Tag icon={<BsTags />} title='Categories' />

        <h2>Browse by Category</h2>

        <div className="container-categories">
          <div className="cards">
            <CardCategory {...dataTest} />
          </div>
        </div>
      </Center>
    </S.Container>
  )
}
