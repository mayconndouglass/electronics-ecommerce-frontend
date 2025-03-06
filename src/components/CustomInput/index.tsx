import { forwardRef,InputHTMLAttributes } from 'react'

import * as S from './styles'

type InputComponentProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  mandatory?: boolean
}

export const CustomInput = forwardRef<HTMLInputElement, InputComponentProps>(
  (props, ref) => {
    const textLabelFormated = props.label!
      .charAt(0).toUpperCase() + props.label!.slice(1)
    const { mandatory, ...restDataProps } = props

    return (
      <S.Container id={props.name!}>
        <label htmlFor={props.label}>
          {textLabelFormated} <span>
            {mandatory !== false ? '*' : ''}
          </span>
        </label>
        <input
          id={props.name!}
          type={props.type}
          placeholder={props.placeholder}
          ref={ref}
          {...restDataProps}
        />
      </S.Container>
    )
  })
