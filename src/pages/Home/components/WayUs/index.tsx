import { Center } from '../../../../components/Center'
import { Tag } from '../../../../components/Tag'
import { Title } from '../../../../components/Title'
import { ServiceCard } from './components/ServiceCard'
import * as S from './styles'

import { LuThumbsUp } from 'react-icons/lu'

import { dataCard } from './data/card-data'

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
