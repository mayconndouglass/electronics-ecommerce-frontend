import * as S from './styles'
import { useState } from 'react'

import { Center } from '../../../../../../components/Center'
import { AnimatedButton } from '../../../../../../components/AnimatedButton'

import { servicesDetails } from './data/services-details'
import { comments } from './data/comments'

import { ProductType } from '../../../../../../types/product'
import { AiOutlineStar } from 'react-icons/Ai'
import { CustomInput } from '../../../../../../components/CustomInput'

type ProductInfoProps = {
  productDetails: ProductType | undefined
}

export const AboutProduct = ({ productDetails }: ProductInfoProps) => {
  const [
    specificationsIsClicked,
    setSpecificationsIsClicked
  ] = useState<boolean>(false)

  const descriptions = productDetails?.description.split('\n')

  return (
    <S.Container active={specificationsIsClicked}>
      <Center>
        <div className="title">
          <h2>Sobre este Produto</h2>
        </div>

        <div className="details-container">
          <ul className='specifications-menu'>
            <li onClick={() => setSpecificationsIsClicked(true)}>
              Especificações
            </li>
            <li onClick={() => setSpecificationsIsClicked(false)}>
              Avaliações
            </li>
          </ul>

          {specificationsIsClicked ? (
            <ul
              className='specifications'
            >
              {descriptions?.map(description => (
                <li key={description}>{description}</li>
              ))}
            </ul>
          ) : (
            <div className="reviews">
              <div className="comments-container">
                <h5>Comente sobre este produto</h5>

                <div className="comments">
                  {comments.map(comment => (
                    <div className="coment" key={comment.id}>
                      <img src={comment.image} alt="" />

                      <div>
                        <div className='container-name'>
                          <span>{comment.name}</span>
                          <span>rating</span>
                        </div>

                        <div className="coment-text">{comment.content}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-container">
                <h5>Adicionar comentário</h5>
                <p>Seu endereço de e-mail não será publicado.
                  <br />Os campos obrigatórios estão marcados <span>*</span></p>
                <p>
                  Sua avaliação
                  <span>*</span>
                  <AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
                </p>

                <form action="#">
                  <div className="area">
                    <label htmlFor="message">Sua Mensagem(opcional)
                    </label>
                    <textarea name="message" id="message"></textarea>
                  </div>

                  <div className='user-data'>
                    <CustomInput name='name' label='nome' type='text' id='name' />
                    <CustomInput name='email' label='email' type='email' id='email' />
                  </div>

                  <div className="submit-button">
                    <AnimatedButton
                      title='Enviar Comentário'
                      $background='#3577F0'
                      color='#ffffff'
                      $padding={{ vertical: 1, horizontal: 2.4 }}
                    />
                  </div>
                </form>
              </div>
            </div>
          )
          }
        </div>

        <div className="services">
          <ul>
            {servicesDetails.map(service => (
              <li key={service.id}>
                <div className="img">
                  <img src={service.image} alt={service.title} />
                </div>

                <div className="content">
                  <h6>{service.title}</h6>
                  <p>{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Center >
    </S.Container >
  )
}
