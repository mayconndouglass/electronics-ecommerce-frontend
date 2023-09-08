import * as S from './styles'

type ArrowProps = {
  className?: string
  onClick?: (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void
  icon: React.ReactNode
  right: string
}

export const Arrow = ({ className, onClick, icon, right }: ArrowProps) => {
  return (
    <S.Container
      className={className}
      onClick={onClick}
      right={right}
    >
      {icon}
    </S.Container>
  )
}
