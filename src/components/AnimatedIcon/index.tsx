import * as S from './styles'

type AnimatedIconProps = {
  icon: React.ReactNode
  color: string
}

export const AnimatedIcon = ({ icon, color }: AnimatedIconProps) => {
  return (
    <S.Container color={color}>
      <a href="#">{icon}</a>
    </S.Container>
  )
}
