import * as S from './styles'

import { Center } from '../../../../components/Center'

import { BsTags } from 'react-icons/Bs'
import { Tag } from '../../../../components/Tag'

import phones from '../../../../../public/assets/images/phones.png'

export const Categories = () => {
  return (
    <S.Container>
      <Center>
        <Tag icon={<BsTags />} title='Categories' />

        <h2>Browse by Category</h2>

        <div className="container-categories">
          <div className="cards">
            <a href="#">
              <img src={phones} alt="Phones Categorie" />
              <h4>Phones</h4>
            </a>
          </div>
        </div>
      </Center>
    </S.Container>
  )
}
