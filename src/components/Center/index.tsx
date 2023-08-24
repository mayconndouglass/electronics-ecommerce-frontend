import * as S from './styles'
import { ReactNode } from 'react'

export const Center = ({ children }: { children: ReactNode }) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  )
}
