import * as S from './styles'

type ArrowProps = {
  className?: string
  onClick?: (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void
  icon: React.ReactNode
  $right: string
  $top: string
  $arrowAnimation: 'right' | 'left'
}

export const Arrow = ({ className, onClick, icon, $right, $top, $arrowAnimation }: ArrowProps) => {
  return (
    <S.Container
      className={className}
      onClick={onClick}
      $right={$right}
      $top={$top}
      $arrowAnimation={$arrowAnimation}
    >
      {icon}
    </S.Container>
  )
}
