import * as S from './styles'

type CardCategoryProps = {
  image: string
  alt: string
  title: string
}

export const CardCategory = ({ image, alt, title }: CardCategoryProps) => {
  return (
    <S.Container>
      <a href="#">
        <img src={image} alt={alt} />
        <h4>{title}</h4>
      </a>
    </S.Container>
  )
}
