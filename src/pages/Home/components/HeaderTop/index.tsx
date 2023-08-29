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
        <p>Open Doors To A World Of Fashion <a href="#">Discover More</a></p>
      </Center>

      <div className="close" onClick={() => setIsOpen(!isOpen)}>
        <img src={iconClose} alt="Close" />
      </div>
    </S.Container>
  )
}
