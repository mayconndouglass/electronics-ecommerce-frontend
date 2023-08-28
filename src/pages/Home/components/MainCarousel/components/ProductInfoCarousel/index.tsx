import * as S from './styles'

import { FaFire } from 'react-icons/Fa'
import { HiOutlineShoppingCart } from 'react-icons/Hi'
import { AiFillStar } from 'react-icons/Ai'
import { CiStar } from 'react-icons/Ci'

interface ProductInfoCarouselProps {
  id: number
  title: string
  users: string[]
  numberOfReviews: string
}

export const ProductInfoCarousel = ({
  id,
  title,
  users,
  numberOfReviews
}: ProductInfoCarouselProps) => {
  return (
    <S.Container className='product-info'>
      <span>
        <div className="icon-container">
          <FaFire />
        </div>
        Hot Deal In This Week
      </span>

      <h1>{title}</h1>

      <div className="more-info">
        <a href="#">
          <HiOutlineShoppingCart /> Shop Now
        </a>

        <div className="users">
          <ul>
            {users.map(user => (
              <li key={id}>
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
