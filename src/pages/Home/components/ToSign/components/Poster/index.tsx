import * as S from './styles'

type PostProps = {
  image: string
  title: string
  subTitle: string
  $sideStyle: 'left' | 'right'
}

export const Poster = ({ image, title, subTitle, $sideStyle }: PostProps) => {
  return (
    <S.Container $sideStyle={$sideStyle}>
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
