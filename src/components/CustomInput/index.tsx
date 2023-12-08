import * as S from './styles'

type InputComponentProps = {
  label: string
  placeholder?: string
  type: 'text' | 'password'
}

export const CustomInput = ({
  label,
  placeholder,
  type
}: InputComponentProps) => {
  const placeHolder = placeholder ?? ''
  const textLabelFormated = label.charAt(0).toUpperCase() + label.slice(1)

  return (
    <S.Container id={label}>
      <label htmlFor={label}>
        {textLabelFormated} <span>*</span>
      </label>
      <input id={label} type={type} placeholder={placeHolder} />
    </S.Container>
  )
}
