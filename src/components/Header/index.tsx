import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { CiHeart } from 'react-icons/ci'
import { CiSearch } from 'react-icons/ci'
import { CiUser } from 'react-icons/ci'
import { PiShoppingCartThin } from 'react-icons/pi'
import { RiMenu3Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

import logo from '/assets/images/logo.avif'
import { useCart, useUser,useWishList } from '@/store'

import { AnimatedIcon } from '../AnimatedIcon'
import { Center } from '../Center'
import * as S from './styles'

type HeaderProps = {
  $homeStyle?: boolean
}

export const Header = ({ $homeStyle }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { quantity } = useCart()
  const { user } = useUser()
  const { favorites } = useWishList()

  return (
    <S.Header $menuIsOpen={isOpen} $homeStyle={$homeStyle}>
      <div className="header-utils">
        <ul>
          <li><a href="#">Ajuda</a></li>
          <li><a href="#">Siga-nos</a></li>
          <li><Link to={'/accounts/sign-in'}>Login</Link></li>
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
              <li><Link to={'/about'}>Sobre</Link></li>
              <li><Link to={'/contact'}>Contato</Link></li>
            </ul>
          </nav>

          <div className="icons">
            <AnimatedIcon icon={<CiSearch />} color='#292930' />
            <div className="favorite-menu">
              {favorites.length != 0 && (
                <span>{favorites.length}</span>
              )}

              <AnimatedIcon icon={<CiHeart />} color='#292930' />
            </div>

            <div className='cart-menu'>
              {quantity != 0 && (
                <span>{quantity}</span>
              )}

              <AnimatedIcon icon={<PiShoppingCartThin />} color='#292930' />
            </div>

            <span>
              <AnimatedIcon icon={<CiUser />} color='#292930' />
              {user && <span>Olá, {user.name.split(' ')[0]}</span>}
            </span>

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
