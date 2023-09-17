import * as S from './styles'

import { AiFillStar } from 'react-icons/Ai'
import { ImEye } from 'react-icons/Im'
import { AiOutlineHeart } from 'react-icons/Ai'

import image from '../../../../../../../public/assets/images/removed.png'
import { AnimatedButton } from '../../../../../../components/AnimatedButton'

export const ProductCard = () => {
  return (
    <S.Container>
      <a className="image-container">
        <img src={image} alt="" />

        <div className="badget-container">
          <div className="badget-promotional">
            20% off
          </div>
        </div>

        <div className="actions-container">
          <div className="view">
            <AnimatedButton
              icon={<ImEye />}
            />
          </div>
          <div className="add-to-cart">
            <AnimatedButton
              title='Adicionar ao Carrinho'
              backgroundColor='#ff497c'
            />
          </div>
          <div className="favorite">
            <AnimatedButton
              icon={<AiOutlineHeart />}
            />
          </div>
        </div>
      </a>

      <div className="product-info">
        <div className="rating-stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />

          <span>(64)</span>
        </div>

        <div className="product-name">
          <a href="#">Yantiti Leather & Canvas Bags</a>
        </div>

        <div className="prices">
          <span className='promotional-price'>$29.99</span>
          <span className='original-price'>$49.99</span>
        </div>
      </div>
    </S.Container>
  )
}
