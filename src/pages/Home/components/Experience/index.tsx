import * as S from './styles'

import { Tag } from '../../../../components/Tag'
import { ImHeadphones } from 'react-icons/Im'
import headsetWhite from '../../../../../public/assets/images/headset-white.png'
import { AnimatedButton } from '../../../../components/AnimatedButton'

export const Experience = () => {
  return (
    <S.Container>
      <div className="info">
        <Tag
          icon={<ImHeadphones />}
          title='Não Perca!!'
          color={'#ff497c'}
        />
        <h2>
          Aprimore Sua <br />Experiência Musical
        </h2>
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
          backgroundColor='#3577F0'
          padding={{ vertical: 1, horizontal: 2.375 }}
        />
      </div>

      <div className="image">
        <img src={headsetWhite} alt="Headset White" />
      </div>
    </S.Container>
  )
}
