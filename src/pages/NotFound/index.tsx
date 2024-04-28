
import * as S from './styles'

import { FiClock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { AnimatedButton } from '../../components/AnimatedButton'
import { Banner } from '../../components/Banner'
import { Center } from '../../components/Center'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { Title } from '../../components/Title'

export const NotFound = () => {
  return (
    <S.Container>
      <Header />
      <Banner />
      <main>
        <Center>
          <div className="not-found-info">
            <Tag
              icon={<FiClock />}
              title='Ops! Está faltando algo'
              color='#FF497C'
            />
            <Title fontSize={2.875}>
              Página não encontrada
            </Title>

            <p>
              Parece que não encontramos o que você procurou. A página que você
              procurava não existe, não está disponível  ou carregando incorretamente.
            </p>

            <Link to='/'>
              <AnimatedButton
                $background='#FF497C'
                $padding={{ vertical: 1, horizontal: 2.375 }}
                title='VOLTE PARA A HOME'
                color='#FFFFFF'
              />
            </Link>
          </div>

          <div className="not-found-image" />
        </Center>
      </main>
      <Footer />
    </S.Container>
  )
}
