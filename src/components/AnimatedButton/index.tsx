import React, { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type AnimatedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
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
      <button type={props.type}>
        {props.icon} {props.title}
      </button>
    </S.Container >
  )
}
