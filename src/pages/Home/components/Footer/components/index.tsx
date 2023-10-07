import * as S from './styles'

type ServicePops = {
  img: string
  title: string
  subTitle: string
}

export const Service = ({ img, title, subTitle }: ServicePops) => {
  return (
    <S.Container>
      <img src={img} alt={title} />

      <div className="info">
        <h6>{title}</h6>
        <p>{subTitle}</p>
      </div>
    </S.Container>
  )
}
