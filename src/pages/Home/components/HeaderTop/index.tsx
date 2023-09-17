import { useState } from 'react'
import { Center } from '../../../../components/Center'

import * as S from './styles'
import iconClose from '../../../../../public/assets/images/icon-close.svg'

export const HeaderTop = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <S.Container open={isOpen}>
      <div></div>
      <Center>
        <p>Portas Abertas Para Um Mundo De Técnologia <a href="#">Descubra Mais</a></p>
      </Center>

      <div className="close" onClick={() => setIsOpen(!isOpen)}>
        <img src={iconClose} alt="Close" />
      </div>
    </S.Container>
  )
}
