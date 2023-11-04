import * as S from './styles'

import { useState } from 'react'
import { useCart } from '../../store/useCart'
import { Link } from 'react-router-dom'

import { Center } from '../Center'
import { AnimatedIcon } from '../AnimatedIcon'

import logo from '/assets/images/logo.png'

import { PiShoppingCartThin } from 'react-icons/Pi'
import { CiHeart } from 'react-icons/Ci'
import { CiSearch } from 'react-icons/Ci'
import { CiUser } from 'react-icons/Ci'
import { RiMenu3Fill } from 'react-icons/Ri'
import { AiOutlineClose } from 'react-icons/Ai'

type HeaderProps = {
  $homeStyle?: boolean
}

export const Header = ({ $homeStyle }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { quantity } = useCart()

  return (
    <S.Header $menuIsOpen={isOpen} $homeStyle={$homeStyle}>
      <div className="header-utils">
        <ul>
          <li><a href="#">Ajuda</a></li>
          <li><a href="#">Siga-nos</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>

      <Center>

        <div className='container-navigation'>
          <Link to={'/'}>
            <img src={logo} alt="logo" />
          </Link>

          <nav>
            <ul>
              <li><Link to={'/'}>Início</Link></li>
              <li><a href="#">Loja</a></li>
              <li><a href="#">Páginas</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </nav>

          <div className="icons">
            <AnimatedIcon icon={<CiSearch />} color='#292930' />
            <AnimatedIcon icon={<CiHeart />} color='#292930' />

            <a href="#" className='cart-menu'>
              {quantity != 0 && (
                <span>{quantity}</span>
              )}

              <AnimatedIcon icon={<PiShoppingCartThin />} color='#292930' />
            </a>

            <AnimatedIcon icon={<CiUser />} color='#292930' />
            <div onClick={() => setIsOpen(!isOpen)}>
              <AnimatedIcon icon={<RiMenu3Fill />} color='#292930' />
            </div>
          </div>
        </div>

        <S.SideBar $menuIsOpen={isOpen}>
          <div className="side-bar-header">
            <img src={logo} alt="Logo" />

            <div className="close-menu" onClick={() => setIsOpen(!isOpen)}>
              <AiOutlineClose />
            </div>
          </div>

          <div className="list-menu">
            <nav>
              <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Loja</a></li>
                <li><a href="#">Páginas</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </nav>
          </div>
        </S.SideBar>

        <div className="overlay"></div>
      </Center>
    </S.Header>
  )
}
