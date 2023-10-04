import * as S from './styles'

type PostProps = {
  image: string
  title: string
  subTitle: string
  textStyle: 'left' | 'right'
}

export const Poster = ({ image, title, subTitle, textStyle }: PostProps) => {
  return (
    <S.Container textStyle={textStyle}>
      <img src={image} alt={title} />

      <a href="">
        <div className="suport"></div>

        <div className="content">
          <h3>{title}</h3>
          <span>{subTitle}</span>
        </div>
      </a>
    </S.Container>
  )
}
