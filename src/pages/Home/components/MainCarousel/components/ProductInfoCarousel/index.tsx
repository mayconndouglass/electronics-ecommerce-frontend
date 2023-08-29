import * as S from './styles'
import { Tag } from '../../../../../../components/Tag'

import { HiOutlineShoppingCart } from 'react-icons/Hi'
import { AiFillStar } from 'react-icons/Ai'
import { CiStar } from 'react-icons/Ci'
import { FaFire } from 'react-icons/Fa'

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
      <Tag icon={<FaFire />} title='Hot Deal In This Week' />

      <h1>{title}</h1>

      <div className="more-info">
        <a href="#">
          <HiOutlineShoppingCart /> Shop Now
        </a>

        <div className="users">
          <ul>
            {users.map(user => (
              <li key={ user }>
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

          <span>{numberOfReviews}</span> Reviews
        </div>
      </div>
    </S.Container>
  )
}
