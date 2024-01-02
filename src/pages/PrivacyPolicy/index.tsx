import { Banner } from '../../components/Banner'
import { BreadCrumb } from '../../components/BreadCrumb'
import { Center } from '../../components/Center'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Texts } from './components/Texts'
import * as S from './styles'

export const PrivacyPolicy = () => {
  return (
    <S.Container>
      <Header />
      <Banner />
      <main>
        <BreadCrumb crumb='Páginas' title='Política de Privacidade' />
        <Center>
          <div className="notice">
            <p>Esta política de privacidade foi publicada em 02 de janeiro de 2024.</p>
          </div>

          <Texts />
        </Center>
      </main>
      <Footer />
    </S.Container>
  )
}
