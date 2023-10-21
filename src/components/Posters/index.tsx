import * as S from './styles'

import { Poster } from './components/Poster'
import poster1 from '../../../public/assets/images/poster-01.png'
import poster2 from '../../../public/assets/images/poster-02.png'
import { Center } from '../Center'


export const Posters = () => {
  return (
    <S.Container>
      <Center>
        <Poster
          image={poster1}
          title={'Alta qualidade, preço baixo'}
          subTitle={'Coleções'}
          $sideStyle='right'
        />
        <Poster
          image={poster2}
          title={'VR visor de realidade'}
          subTitle={'Oferta de 50%'}
          $sideStyle='left'
        />
      </Center>
    </S.Container>
  )
}
