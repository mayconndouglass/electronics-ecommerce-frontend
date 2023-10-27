import * as S from './styles'

import { Center } from '../Center'
import { Tag } from '../Tag'

import { BsEnvelopeOpenFill } from 'react-icons/Bs'

import { Title } from '../Title'
import { AnimatedButton } from '../AnimatedButton'

export const ToSign = () => {
  return (
    <S.Container>
      <Center>
        <div className="posts-container">

        </div>

        <div className="newsletter">
          <Tag title='Notícias' color='#3577F0' icon={<BsEnvelopeOpenFill />} />
          <Title fontSize={2.25}>Receba atualizações semanais</Title>

          <div className="input-container">
            <input type="text" placeholder="example@email.com" />
            <AnimatedButton
              $background='#292930'
              color='white'
              $padding={{ horizontal: 2.3, vertical: 1 }}
              title="Assinar"
            />
          </div>
        </div>
      </Center>
    </S.Container>
  )
}
