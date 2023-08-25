import { Center } from '../../../../components/Center'
import * as S from './styles'

import { FaFire } from 'react-icons/Fa'
import { HiOutlineShoppingCart } from 'react-icons/Hi'
import { AiFillStar } from 'react-icons/Ai'
import { CiStar } from 'react-icons/Ci'

import userOne from '/assets/images/userOne.png'
import userTwo from '/assets/images/userTwo.png'
import userThree from '/assets/images/userThree.png'
import userFor from '/assets/images/userFor.png'

import headPhone from '/assets/images/main-image-headphone.png'

export const MainCarousel = () => {
  return (
    <S.Container>
      <Center>
        <div className="product-info">
          <span>
            <div className="icon-container">
              <FaFire />
            </div>
            Hot Deal In This Week
          </span>

          <h1>
            Roco Wireless Headphone
          </h1>

          <div className="more-info">
            <a href="#">
              <HiOutlineShoppingCart /> Shop Now
            </a>

            <div className="users">
              <ul>
                <li>
                  <img src={userFor} alt="Usuário" />
                </li>
                <li>
                  <img src={userTwo} alt="Usuário" />
                </li>
                <li>
                  <img src={userThree} alt="Usuário" />
                </li>
                <li>
                  <img src={userOne} alt="Usuário" />
                </li>
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

              <span>100+</span> Reviews
            </div>
          </div>
        </div>

        <div className="product-image">
          <img src={headPhone} alt="" />
        </div>
      </Center>
    </S.Container>
  )
}
