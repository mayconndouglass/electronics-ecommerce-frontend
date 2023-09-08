import * as S from './styles'

type CardCategoryProps = {
  image: string
  alt: string
  name: string
}

export const CardCategory = ({ image, alt, name }: CardCategoryProps) => {
  return (
    <S.Container>
      <a href="#">
        <img src={image} alt={alt} />
        <h4>{name}</h4>
      </a>
    </S.Container>
  )
}
