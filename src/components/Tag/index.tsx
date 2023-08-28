import * as S from './styles'

interface TagProps {
  title: string
  icon: React.ReactNode
}

export const Tag = ({ title, icon }: TagProps) => {
  return (
    <S.Container>
      <div className="icon-container">
        {icon}
      </div>

      {title}
    </S.Container>
  )
}
