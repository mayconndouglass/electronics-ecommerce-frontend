import * as S from './styles'

interface TagProps {
  title: string
  icon: React.ReactNode
  color: string
}

export const Tag = ({ title, icon, color }: TagProps) => {
  return (
    <S.Container color={color}>
      <div className="icon-container">
        {icon}
      </div>

      {title}
    </S.Container>
  )
}
