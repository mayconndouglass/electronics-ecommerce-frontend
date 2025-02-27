import { Link } from 'react-router-dom'

import image from '../../../public/assets/images/image-bread-crumb.avif'
import { Center } from '../Center'
import { Title } from '../Title'
import * as S from './styles'

type BreadCrumbProps = {
  title: string
  crumb: string
}

export const BreadCrumb = ({ title, crumb }: BreadCrumbProps) => {
  return (
    <S.Container>
      <Center>
        <div className="internal-container">
          <div className="bread-crumb">
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>|</li>
              <li>{crumb}</li>
            </ul>

            <Title fontSize={2.5}>
              {title}
            </Title>
          </div>

          <div className="image-area">
            <div />
            <img src={image} alt="" />
          </div>
        </div>
      </Center>
    </S.Container>
  )
}
