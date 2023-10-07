import * as S from './styles'

import { Center } from '../../../../components/Center'
import logo from '/assets/images/logo.png'

import { PiShoppingCartThin } from 'react-icons/Pi'
import { CiHeart } from 'react-icons/Ci'
import { CiSearch } from 'react-icons/Ci'
import { CiUser } from 'react-icons/Ci'
import { AnimatedIcon } from '../../../../components/AnimatedIcon'

export const Header = () => {
  return (
    <S.Header>
      <Center>
        <div className="header-utils">
          <ul>
            <li><a href="#">Ajuda</a></li>
            <li><a href="#">Siga-nos</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>
        <div className='container-navigation'>
          <img src={logo} alt="logo" />

          <nav>
            <ul>
              <li><a href="#">Início</a></li>
              <li><a href="#">Loja</a></li>
              <li><a href="#">Páginas</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </nav>

          <div className="icons">
            <AnimatedIcon icon={<CiSearch />} />
            <AnimatedIcon icon={<CiHeart />} />
            <AnimatedIcon icon={<PiShoppingCartThin />} />
            <AnimatedIcon icon={<CiUser />} />
          </div>
        </div>

      </Center>
    </S.Header>
  )
}
