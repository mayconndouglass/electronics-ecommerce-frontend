import * as S from './styles'

import { Center } from '../../../../components/Center'

import { BsTags } from 'react-icons/Bs'
import { Tag } from '../../../../components/Tag'

export const Categories = () => {
  return (
    <S.Container>
      <Center>
        <Tag icon={<BsTags />} title='Categories'/>

        <h2>Browse by Category</h2>
      </Center>
    </S.Container>
  )
}
