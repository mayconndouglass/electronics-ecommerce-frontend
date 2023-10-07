import * as S from './styles'

type AnimatedIconProps = {
  icon: React.ReactNode
}

export const AnimatedIcon = ({ icon }: AnimatedIconProps) => {
  return (
    <S.Container>
      <a href="#">{icon}</a>
    </S.Container>
  )
}
