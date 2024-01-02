import * as S from './styles'

import { Center } from '../Center'
import { Title } from '../Title'

import image from '../../../public/assets/images/image-bread-crumb.png'
import { Link } from 'react-router-dom'

type BreadCrumbProps = {
  title: string
  crumb: string
}

export const BreadCrumb = (props: BreadCrumbProps) => {
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
              <li>{props.crumb}</li>
            </ul>

            <Title fontSize={2.5}>
              {props.title}
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
