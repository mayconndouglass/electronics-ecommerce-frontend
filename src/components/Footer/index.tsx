import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { BiLogoDiscord } from 'react-icons/bi'
import { BiLogoLinkedinSquare } from 'react-icons/bi'
import { BsTelephone } from 'react-icons/bs'
import { PiEnvelopeSimpleOpenBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'

import appStore from '../../../public/assets/images/app-store.avif'
import cart1 from '../../../public/assets/images/cart-1.avif'
import cart2 from '../../../public/assets/images/cart-2.avif'
import cart3 from '../../../public/assets/images/cart-3.avif'
import PlayStore from '../../../public/assets/images/play-store.avif'
import qrCode from '../../../public/assets/images/qr.avif'
import { AnimatedIcon } from '../AnimatedIcon'
import { Center } from '../Center'
import { Service } from './components/Service'
import { dataServices } from './data/data-services'
import * as S from './styles'

export const Footer = () => {
  return (
    <S.Container>
      <Center>
        <div className="services">
          {dataServices.map(({ id, img, title, subTitle }) => (
            <Service key={id} img={img} title={title} subTitle={subTitle} />
          ))}
        </div>

        <div className="lists">
          <ul>
            <li>
              <h5>Suporte</h5>

              <div className="content">
                <ul className='peace'>
                  <li>04 Rua Dos Alfeneiros,</li>
                  <li>Londres, Inglaterra.</li>
                  <li><PiEnvelopeSimpleOpenBold /> example@email.com</li>
                  <li><BsTelephone /> (99) 9999-9999</li>
                </ul>
              </div>
            </li>
            <li>
              <h5>Conta</h5>

              <div className="content">
                <ul>
                  <a href=""><li>Minha Conta</li></a>
                  <Link to={'/accounts/sigin'}><li>Login / Cadastro</li></Link>
                  <Link to={'/store/cart'}><li>Carrinho</li></Link>
                  <a href="#"><li>Favoritos</li></a>
                  <a href="#"><li>Loja</li></a>
                </ul>
              </div>
            </li>
            <li>
              <h5>Links Rápidos</h5>
              <div className="content">
                <ul>
                  <a href="#"><li>Política de privacidade</li></a>
                  <a href="#"><li>Termos de uso</li></a>
                  <a href="#"><li>FAQ</li></a>
                  <a href="#"><li>Contato</li></a>
                </ul>
              </div>
            </li>
            <li>
              <h5>Baixe Nosso Aplicativo</h5>

              <div className="content">
                <p>Economize usando o aplicativo</p>

                <div className="images">
                  <img src={qrCode} alt="Qr Code para o aplicativo" />

                  <div className="app-stores">
                    <img src={appStore} alt="App Store" title='App Store'/>
                    <img src={PlayStore} alt="Play Store" title='Play Store'/>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="container-copyright">
          <div className="redes">
            <AnimatedIcon icon={<BiLogoFacebook />} color='#777777' />
            <AnimatedIcon icon={<AiOutlineInstagram />} color='#777777' />
            <AnimatedIcon icon={<AiOutlineTwitter />} color='#777777' />
            <AnimatedIcon icon={<BiLogoLinkedinSquare />} color='#777777' />
            <AnimatedIcon icon={<BiLogoDiscord />} color='#777777' />
          </div>

          <div className="copyright">
            © 2025. Todos os Direitos Reservados
          </div>

          <div className="carts">
            <ul>
              <li>Aceitamos</li>
              <li><img src={cart1} alt="Paypal" title='Paypal' /></li>
              <li><img src={cart2} alt="Master Card" title='Master Card' /></li>
              <li><img src={cart3} alt="Visa" title='Visa' /></li>
            </ul>
          </div>
        </div>
      </Center>
    </S.Container >
  )
}
