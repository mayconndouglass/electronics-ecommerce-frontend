import * as S from './styles'

import { Tag } from '../../../../components/Tag'
import { ImHeadphones } from 'react-icons/Im'
import headsetWhite from '../../../../../public/assets/images/headset-white.png'
import { AnimatedButton } from '../../../../components/AnimatedButton'
import { Title } from '../../../../components/Title'
import { Center } from '../../../../components/Center'

export const Experience = () => {
  return (
    <S.Container>
      <Center>
        <div className="info">
          <Tag
            icon={<ImHeadphones />}
            title='Não Perca!!'
            color={'#ff497c'}
          />

          <Title fontSize={3}>
            Aprimore Sua <br />Experiência Musical
          </Title>

          <div className="countdown-container">
            <div className="countdown">
              <span>0</span>
              <p>Dias</p>
            </div>
            <div className="countdown">
              <span>00</span>
              <p>Hrs</p>
            </div>
            <div className="countdown">
              <span>00</span>
              <p>Min</p>
            </div>
            <div className="countdown">
              <span>00</span>
              <p>Seg</p>
            </div>
          </div>

          <AnimatedButton
            title={'Confira Agora!'}
            color='white'
            $background='#3577F0'
            $padding={{ vertical: 1, horizontal: 2.375 }}
          />
        </div>

        <div className="image">
          <img src={headsetWhite} alt="Headset White" />
        </div>
      </Center>
    </S.Container>
  )
}
