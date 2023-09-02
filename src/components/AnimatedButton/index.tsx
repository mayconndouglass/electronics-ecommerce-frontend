import React from 'react'
import * as S from './styles'

type AnimatedButtonProps = {
  icon?: React.ReactNode
  title: string
  backgroundColor?: string
  color?: string
}

export const AnimatedButton = (props: AnimatedButtonProps) => {
  return (
    <S.Container>
      <a href="#">
        {props.icon} {props.title}
      </a>
    </S.Container>
  )
}
