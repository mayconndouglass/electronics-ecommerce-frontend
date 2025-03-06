import { LuThumbsUp } from 'react-icons/lu'

import { Center, Tag, Title } from '@/components'

import { ServiceCard } from './components/ServiceCard'
import { dataCard } from './data/card-data'
import * as S from './styles'

export const WayUs = () => {
  return (
    <S.Container>
      <Center>
        <Tag title='Por que nós' color='#FF497C' icon={<LuThumbsUp />} />
        <Title fontSize={2.25}>Por que as pessoas nos escolhem</Title>

        <div className="services-container">
          {dataCard.map(({ image, text }) => (
            <ServiceCard key={text} image={image} text={text} />
          ))}
        </div>
      </Center>
    </S.Container>
  )
}
