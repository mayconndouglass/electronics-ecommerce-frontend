import * as S from './styles'
import { Center } from '../../../../components/Center'

import logo from '/assets/images/logo.png'
import { PiShoppingCartThin } from 'react-icons/Pi'
import { CiHeart } from 'react-icons/Ci'
import { CiSearch } from 'react-icons/Ci'
import { CiUser } from 'react-icons/Ci'

export const Header = () => {
  return (
    <S.Header>
      <Center>
        <div className="header-utils">
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Join Us</a></li>
            <li><a href="#">Sign In</a></li>
          </ul>
        </div>

        <div className="container-navigation">
          <img src={logo} alt="logo" />

          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Pages</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>

          <div className="icons">
            <a href="#"><CiSearch /></a>
            <a href="#"><CiHeart /></a>
            <a href="#"><PiShoppingCartThin /></a>
            <a href="#"><CiUser /></a>
          </div>
        </div>
      </Center>
    </S.Header>
  )
}
