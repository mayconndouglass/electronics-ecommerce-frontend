import * as S from './styles.ts'

type TestimonialCardProps = {
  image: string
  name: string
}

export const TestimonialCard = ({ image, name }: TestimonialCardProps) => {
  return (
    <S.Container>
      <div className="message">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore mollitia dolor ut? Illo provident in quasi rem, magni recusandae voluptatibus autem dignissimos distinctio alias beatae repellat ratione itaque odit voluptatem voluptates repellendus at reiciendis.</p>
      </div>

      <div className="user">
        <img src={image} alt="User" />

        <div className="info">
          <span>Cliente</span>
          <h6>{name}</h6>
        </div>
      </div>
    </S.Container>
  )
}
