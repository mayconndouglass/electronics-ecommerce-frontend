import * as S from './styles'

import { Center } from '../../../../components/Center'
import { Poster } from './components/Poster'
import { Tag } from '../../../../components/Tag'

import { BsEnvelopeOpenFill } from 'react-icons/Bs'

import poster1 from '../../../../../public/assets/images/poster-01.png'
import poster2 from '../../../../../public/assets/images/poster-02.png'
import { Title } from '../../../../components/Title'
import { AnimatedButton } from '../../../../components/AnimatedButton'

export const ToSign = () => {
  return (
    <S.Container>
      <Center>
        <div className="posts-container">
          <Poster
            image={poster1}
            title={'Alta qualidade, preço baixo'}
            subTitle={'Coleções'}
            $sideStyle='right'
          />
          <Poster
            image={poster2}
            title={'VR visor de realidade'}
            subTitle={'Oferta de 50%'}
            $sideStyle='left'
          />
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
