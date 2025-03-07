import { useState } from 'react'

import * as S from './styles'

type TogleProps = {
  title: string
  children: JSX.Element
  size: string
}

export const FilterTogle = ({ title, children, size }: TogleProps) => {
  const [togleIsOpen, setTogleisOpen] = useState<boolean>(true)

  return (
    <S.Container open={togleIsOpen} size={size}>
      <div
        className="togle-list-categories"
        onClick={() => setTogleisOpen(!togleIsOpen)}
      >
        <h6>{title}</h6>
      </div>

      <div className="drop">
        {children}
      </div>
    </S.Container>
  )
}
