import * as S from './styles'

type ServiceCardProps = {
  image: string
  text: string
}

export const ServiceCard = ({ image, text }: ServiceCardProps) => {
  return (
    <S.Container>
      <div className="img">
        <img src={image} alt={text} />
      </div>

      <h6>{text}</h6>
    </S.Container>
  )
}
