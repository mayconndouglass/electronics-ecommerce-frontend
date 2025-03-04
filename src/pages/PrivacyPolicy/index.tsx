import { Banner, BreadCrumb, Center, Footer, Header } from '@/components'

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
