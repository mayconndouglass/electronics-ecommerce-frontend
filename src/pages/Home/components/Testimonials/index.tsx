import { Center } from '../../../../components/Center'
import { Tag } from '../../../../components/Tag'
import { Title } from '../../../../components/Title'
import { TestimonialCard } from './components/TestimonialCard'
import * as S from './styles'

import user1 from '../../../../../public/assets/images/image-1.png'
import user2 from '../../../../../public/assets/images/image-2.png'
import user3 from '../../../../../public/assets/images/image-3.png'

import { FaQuoteLeft } from 'react-icons/Fa'

export const Testimonials = () => {
  return (
    <S.Container>
      <Center>
        <Tag title='Depoimentos' color='#ff497c' icon={<FaQuoteLeft />} />
        <Title fontSize={2.25}>Feedback dos Clientes</Title>

        <div className="testimonials-container">
          <TestimonialCard image={user1} name='John Doe' />
          <TestimonialCard image={user2} name='John Doe' />
          <TestimonialCard image={user3} name='John Doe' />
        </div>
      </Center>
    </S.Container>
  )
}
