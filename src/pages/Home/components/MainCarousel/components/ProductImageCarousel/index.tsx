import * as S from './styles'

interface ProductImageCarouselProps {
  image: string
  price: string
}

export const ProductImageCarousel = ({ image, price }: ProductImageCarouselProps) => {
  return (
    <S.Container>
      <img src={image} alt="" />
      <div className="product-price">
        <span>Promoção</span>
        <span>{price}</span>
      </div>
    </S.Container>
  )
}
