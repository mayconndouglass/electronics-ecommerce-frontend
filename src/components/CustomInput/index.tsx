import * as S from './styles'
import { InputHTMLAttributes, forwardRef } from 'react'

type InputComponentProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export const CustomInput = forwardRef<HTMLInputElement, InputComponentProps>(
  (props, ref) => {
    const textLabelFormated = props.label!
      .charAt(0).toUpperCase() + props.label!.slice(1)

    return (
      <S.Container id={props.name!}>
        <label htmlFor={props.label}>
          {textLabelFormated} <span>*</span>
        </label>
        <input
          id={props.name!}
          type={props.type}
          placeholder={props.placeholder}
          ref={ref}
          {...props}
        />
      </S.Container>
    )
  })
