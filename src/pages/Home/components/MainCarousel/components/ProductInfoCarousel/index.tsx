import * as S from './styles'
import { Tag } from '../../../../../../components/Tag'

import { HiOutlineShoppingCart } from 'react-icons/Hi'
import { AiFillStar } from 'react-icons/Ai'
import { CiStar } from 'react-icons/Ci'
import { FaFire } from 'react-icons/Fa'

import { AnimatedButton } from '../../../../../../components/AnimatedButton'

interface ProductInfoCarouselProps {
  id: number
  title: string
  users: string[]
  numberOfReviews: string
}

export const ProductInfoCarousel = ({
  title,
  users,
  numberOfReviews
}: ProductInfoCarouselProps) => {
  return (
    <S.Container className='product-info'>
      <Tag
        icon={<FaFire />}
        title='Ofertas Desta Semana'
        color={'#ff497c'}
      />

      <h1>{title}</h1>

      <div className="more-info">
        <AnimatedButton
          icon={<HiOutlineShoppingCart />}
          title={'Compre Agora'}
          $padding={{ vertical: 1, horizontal: 2.375 }}
        />
        <div>
          <div className="users">
            <ul>
              {users.map(user => (
                <li key={user}>
                  <img src={user} alt="User" />
                </li>
              ))}
            </ul>
          </div>

          <div className="reviews">
            <div className="rating-stars">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <CiStar />
            </div>

            <span>{numberOfReviews}</span> Avaliações
          </div>
        </div>

      </div>
    </S.Container>
  )
}
