import * as S from './styles'

export const FormError = ({ text }: { text: string }) => {
  return (
    <S.Container>
      {text}
    </S.Container>
  )
}
