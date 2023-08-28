import * as S from './styles'

interface ProductImageProps {
  image: string
  price: string
}

export const ProductImage = ({ image, price }: ProductImageProps) => {
  return (
    <S.Container>
      <img src={image} alt="" />
      <div className="product-price">
        <span>From</span>
        <span>{price}</span>
      </div>
    </S.Container>
  )
}
