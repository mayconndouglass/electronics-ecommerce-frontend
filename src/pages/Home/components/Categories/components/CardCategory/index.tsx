import { Link } from 'react-router-dom'

import * as S from './styles'

type CardCategoryProps = {
  image: string
  alt: string
  name: string
}

export const CardCategory = ({ image, alt, name }: CardCategoryProps) => {
  return (
    <S.Container title={name}>
      <Link
        to={`/products?category=${name.toLowerCase()}`}
      >

        <img
          src={image}
          alt={alt}
        />

        <h4>{name}</h4>
      </Link>
    </S.Container>
  )
}
