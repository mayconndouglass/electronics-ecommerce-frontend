import { AnimatedButton } from '../../components/AnimatedButton'
import { Banner } from '../../components/Banner'
import { BreadCrumb } from '../../components/BreadCrumb'
import { Center } from '../../components/Center'
import { CustomInput } from '../../components/CustomInput'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import * as S from './styles'

export const Contact = () => {
  return (
    <S.Container>
      <Header />
      <Banner />
      <main>
        <BreadCrumb title='Entre Em Contato Conosco' crumb='Contato' />
        <Center>
          <div className="contact-with-us">
            <div className="contact-form">
              <h3>Gostaríamos muito de ouvir você.</h3>
              <p>Se você tem ótimos produtos para vender ou deseja trabalhar conosco, envie-nos uma mensagem.</p>

              <form>
                <div>
                  <CustomInput
                    id='name'
                    label='nome'
                    type='text'
                    name='name'
                  />

                  <CustomInput
                    id='phone'
                    label='telefone'
                    type='tel'
                    name='phone'
                  />

                  <CustomInput
                    id='email'
                    label='email'
                    type='email'
                    name='email'
                  />
                </div>

                <div className="contact-text-area">
                  <label htmlFor="contact-message">Sua Mensagem</label>
                  <textarea name="contact-message" id="contact-message"></textarea>
                </div>

                <AnimatedButton
                  title='Enviar Mensagem'
                  $background='#3577F0'
                  color='#ffffff'
                  $padding={{ vertical: 1, horizontal: 2.4 }}
                />
              </form>
            </div>
            <div className="contact-info">
              <div className='contact-info-first'>
                <h3>Nossa Loja</h3>
                <span className='adress'>8212 E. Glen Creek Street Orchard Park,<br /> NY 14127, United States of America</span>
                <span>Telefone: +55 9 1234-56789</span>
                <span>Email: Hello@ecommerce.com</span>
              </div>

              <div className='contact-info-second'>
                <h3>Carreira</h3>
                <span>Com uma trajetória dedicada e apaixonada na indústria do comércio eletrônico</span>
              </div>

              <div>
                <h3>Horário de funcionamento:</h3>
                <span>Segunda a sábado: 9h - 22h</span>
                <span>Domingos: 10h - 18h</span>
              </div>
            </div>
          </div>

          <div className="map">
            <iframe width="100%" height="500" src="https://maps.google.com/maps?q=melbourne&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
          </div>
        </Center>
      </main>
      <Footer />
    </S.Container>
  )
}
