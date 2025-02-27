import { FaShoppingBasket } from 'react-icons/fa'
import { RiTeamFill } from 'react-icons/ri'

import {
  Banner,
  BreadCrumb,
  Center,
  Footer,
  Header,
  Tag,
  Title
} from '@/components'

import aboutImg2 from '../../../public/assets/images/aboutDois.webp'
import aboutImg1 from '../../../public/assets/images/aboutTres.avif'
import aboutImg3 from '../../../public/assets/images/aboutUm.avif'
import { cardData } from './data'
import { teamData } from './data'
import * as S from './styles'

export const About = () => {
  return (
    <S.Container>
      <Header />
      <Banner />
      <main>
        <BreadCrumb title='Sobre Nossa Loja' crumb='Sobre Nós' />
        <Center>
          <div className="about-store">
            <div className="about-store-image">
              <img src={aboutImg1} alt="" />
            </div>
            <div className="about-store-text">
              <div>
                <Tag
                  icon={<FaShoppingBasket />}
                  title='Sobre Nós'
                  color='#3577F0'
                />
                <Title fontSize={2.25}>
                  Compras Online
                </Title>
              </div>

              <span>
                Nosso ecommerce pode ajudá-lo a criar experiências de comércio digital unificadas e inteligentes, tanto on-line quanto pressencialmente.
              </span>

              <div className='about-store-paragraphs'>
                <p>
                  Equipes capacitadas de vendas, com soluções personalizadas, setores que apoiam os nossos clientes à medida que eles se tornam digitais e se adaptam mais rapidamente ao mercado digital, nós os acompanhamos em sua constante mudanças.
                </p>

                <p>
                  Nosso ecommerce oferece aos compradores a experiência perfeita de autoatendimento de compras on-line com todos os nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </Center>

        <div className="about-info-area">
          <Center>
            {cardData.map(({ title, id, image }) => (
              <div key={id} className='about-info-card'>
                <img src={image} alt={title} />
                <h6>{title}</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, pariatur.
                </p>
              </div>
            ))}
          </Center>
        </div>

        <div className="our-team">
          <Center>
            <Tag
              icon={<RiTeamFill />}
              title='Nosso Time'
              color='#8C71DB'
            />
            <Title fontSize={2.25}>
              Nossa Equipe Especializada
            </Title>

            <div className="team">
              {teamData.map(({ id, name, role, image }) => (
                <div className="card-team" key={id}>
                  <div>
                    <img src={image} alt={role} />
                  </div>
                  <span>{role}</span>
                  <h5>{name}</h5>
                </div>
              ))}
            </div>
          </Center>
        </div>

        <Center>
          <div className="about-features">
            <div className="feature">
              <img src={aboutImg2} alt=" Imagem programa de fidelidade" />
              <div className="feature-text">
                <h4>Programa de Fidelidade Exclusivo</h4>
                <p>
                  Reconhecemos e valorizamos a lealdade dos nossos clientes. Apresentamos nosso programa de fidelidade, onde cada compra acumula pontos que podem ser trocados por descontos exclusivos, brindes ou ofertas especiais. Queremos recompensar você por escolher o nosso e-commerce repetidamente, proporcionando benefícios adicionais como forma de agradecimento.
                </p>
                <button>Conheça Agora</button>
              </div>
            </div>

            <div className="feature">
              <div className="feature-text">
                <h4>Entrega Rápida e Confiável</h4>
                <p>
                  Destacamos nossa eficiência na entrega, garantindo que seus produtos cheguem em suas mãos de maneira rápida e segura. Nosso compromisso é proporcionar uma experiência de compra sem complicações, com prazos de entrega confiáveis para que você receba seus produtos no menor tempo possível.
                </p>
                <button>Conheça Agora</button>
              </div>
              <img src={aboutImg3} alt="Imagem entrega rápida" />
            </div>
          </div>
        </Center>

      </main>
      <Footer />
    </S.Container>
  )
}
