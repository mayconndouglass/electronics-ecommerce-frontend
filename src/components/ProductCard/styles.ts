import styled, { css } from 'styled-components'

export const Container = styled.div<{ $cardStyling: 'normal' | 'circular' }>`
  padding: 2rem 1rem;
  width: 100%;//337.5px;

  @media screen and (max-width: 750px){
   max-height: 473.6px ;
  }

  @media screen and (max-width: 512px) {
    padding: 0 1rem;
  }

  ${props => props.$cardStyling === 'circular' ? css`
    &:hover {
      .image-container img {
        transform: scale(1.08);
      }
    }
  ` : ''}

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme['slate-50']};
    border-radius: ${props => props.$cardStyling === 'normal' ? '6px' : '50%'};
    position: relative;
    cursor: pointer;

    height: 300px;

    &:hover .actions-container {
      opacity: 1;
      bottom: 20px;
      visibility: visible;
      transition: .5s;
    }

    &:hover {
      img {
        transform: scale(1.08);
      }
    }

    img {
      border-radius: 6px;
      transition: .5s;

      width: 200px;
      height: 200px;
      object-fit: contain;
    }

    .badget-container {
      position: absolute;
      top: 24px;
      left: auto;
      right: -14px;
      z-index: 2;

      .badget-promotional {
        background-color: ${props => props.theme['blue-400']};
        padding: 0.25rem 0.625rem;
        font-size: 0.75rem;
        font-weight: ${props => props.theme['font-w-bold']};
        color: ${props => props.theme.white};
        border-radius: 4px;
        box-shadow: 0 8px 16px 0 rgba(53,119,240,.3);
      }
    }

    .actions-container {
      display: ${props => props.$cardStyling === 'circular' ? 'none' : 'flex'};
      justify-content: center;
      align-items: center;
      gap: 10px;

      width: 90%;
      margin: 0 auto;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0;
      visibility: hidden;
      transition: .5s;

      .view, .favorite {
        /* animatedButton */
        a {
          border-radius: 4px;
          box-shadow: 0 16px 32px 0 rgba(0,0,0,.06);
          z-index: 1;

          svg {
            width: 14px;
          }

          &:hover svg {
            animation: moveTop 400ms;
          }
        }
      }

      .add-to-cart {
        /* animatedButton */
        a {
          border-radius: 4px;

          font-weight: ${props => props.theme['font-w-bold']};
          font-size: 0.875rem;
          text-align: center;

          @media screen and (max-width: 1033px) {
            line-height: 1;
          }

          @media screen and (max-width: 990px) {
            line-height: 1.7;
          }

          @media screen and (max-width: 750px) {
            line-height: 1;
          }

          @media screen and (max-width: 512px) {
            line-height: 1.7;
          }
          @media screen and (max-width: 322px) {
            line-height: 1;
          }
        }
      }
    }

    @media screen and (max-width: 750px) {
      height: 270px;

      img {
        width: 150px;
        height: 150px;
      }
    }
  }

  .product-info {
    margin: 25px 0 30px;
    ${props => props.$cardStyling === 'circular' ? css`
      display: flex;
      flex-direction: column;
      align-items: center;
    ` : ''}

    @media screen and (max-width: 512px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .rating-stars {
      display: flex;
      gap: 0.1rem;
      margin-bottom: 10px;

      font-weight: ${props => props.theme['font-w-medium']};
      font-size: 0.8125rem;
      color: ${props => props.theme['gray-500']};

      svg {
        color: ${props => props.theme['yellow-300']};
        font-weight: ${props => props.theme['font-w-black']};
        font-size: 1.1rem;
      }

      span {
        margin-left: 5px;
      }
    }

    .product-name {
      margin-bottom: 10px;

      a {
        color: ${props => props.theme['gray-500']};
        font-size: 1rem;
        font-weight: ${props => props.theme['font-w-bold']};
        text-decoration: none;

        &:hover {
          color: ${props => props.theme['blue-400']};
        }
      }
    }

    .prices {
      display: flex;
      gap: 10px;

      font-weight: ${props => props.theme['font-w-bold']};
      font-size: 1.25rem;
      margin-bottom: 20px;

      .promotional-price {
        color: ${props => props.theme['gray-900']};
      }

      .original-price {
        color:${props => props.theme['slate-300']};
        text-decoration: line-through;
      }
    }

    .colors {
      display: flex;
      gap: 4px;
      margin-top: 12px;

      li {
        width: 9px;
        height: 9px;

        border-radius: 100%;
        background-color: red;
      }
    }

    .actions-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      transition: .5s;

      .view, .favorite {
        /* animatedButton */
        a {
          border-radius: 4px;
          box-shadow: 0 16px 32px 0 rgba(0,0,0,.06);
          z-index: 1;

          svg {
            width: 16px;
          }

          &:hover svg {
            animation: moveTop 400ms;
          }
        }
      }
    }
  }


  @keyframes moveTop {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    50% {
      transform: translateY(-50%);
      opacity: 0;
    }
    75%{
      transform: translateX(0);
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
