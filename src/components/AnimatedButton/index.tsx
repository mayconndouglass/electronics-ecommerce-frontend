import React from 'react'
import * as S from './styles'

type AnimatedButtonProps = {
  icon?: React.ReactNode
  title?: string
  $background?: string
  color?: string
  $padding: {
    vertical: number
    horizontal: number
  }
}

export const AnimatedButton = (props: AnimatedButtonProps) => {
  return (
    <S.Container
      color={props.color}
      $background={props.$background}
      $padding={{
        vertical: props.$padding.vertical,
        horizontal: props.$padding.horizontal
      }}
    >
      <span>
        {props.icon} {props.title}
      </span>
    </S.Container >
  )
}
