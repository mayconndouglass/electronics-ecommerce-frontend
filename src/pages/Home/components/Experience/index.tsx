import * as S from './styles'

import { Tag } from '../../../../components/Tag'
import { ImHeadphones } from 'react-icons/Im'
import headsetWhite from '../../../../../public/assets/images/headset-white.png'

export const Experience = () => {
  return (
    <S.Container>
      <div className="info">
        <Tag icon={<ImHeadphones />} title='Don’t Miss!!' />
        <h2>
          Enhance Your Music Experience
        </h2>
        <div className="countdown-container">
          <div className="countdown">
            <span>0</span>
            <p>Day</p>
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
            <p>Sec</p>
          </div>
        </div>
      </div>

      <div className="image">
        <img src={headsetWhite} alt="Headset White" />
      </div>
    </S.Container>
  )
}
