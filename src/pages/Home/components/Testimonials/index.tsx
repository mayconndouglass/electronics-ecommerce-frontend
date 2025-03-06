import { FaQuoteLeft } from 'react-icons/fa'

import user1 from '/assets/images/image-1.avif'
import user2 from '/assets/images/image-2.avif'
import user3 from '/assets/images/image-3.avif'
import { Center, Tag, Title } from '@/components'

import { TestimonialCard } from './components/TestimonialCard'
import * as S from './styles'

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
