import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  border-bottom: solid 2px ${props => props.theme['slate-50']};

  @media screen and (max-width: 380px) {
    gap: 1rem;

    .cart-product-image {
      width: 60px !important;
      height: 60px !important;

      a {
        width: 60px !important;
        height: 60px !important;

        img {
          width: 35px;
          height: 50px;
        }
      }
    }
  }

  & > div {
    width: 100%;
  }

  a {
      font-size: 1rem;
      font-weight: ${props => props.theme['font-w-medium']};
      color: ${props => props.theme['gray-900']};
      transition: .3s;
      text-decoration: none;

      &:hover {
        cursor: pointer;
        color: ${props => props.theme['blue-600']};
      }

      h5 {
        font-weight: 500 !important;
      }
    }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 25px;
    height: 25px;
    border-radius: 100%;
    border: 2px solid ${props => props.theme['slate-50']};
    background-color: ${props => props.theme['slate-50']};

    &:hover {
      cursor: pointer;
      border-color: ${props => props.theme['blue-600']};
    }

    svg {
      width: 100%;
      height: 70%;
    }
  }

  .cart-product-image {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 80px;
    background-color: ${props => props.theme['slate-50']};
    border-radius: 10px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
    }

    &:hover {
      cursor: pointer;
    }

    img {
      width: 50px;
      height: 50px;
      object-fit: contain;
      border-radius: 10px;
    }
  }

  .cart-product-name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    padding-block: 0.625rem;
    padding-right: 0.625rem;
  }

  .cart-product-subtotal, .cart-product-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 0.625rem;
    padding-block: 0.625rem;

    font-size: 1rem;
    font-weight: ${props => props.theme['font-w-medium']};
    color: ${props => props.theme['gray-500']};
  }

  .cart-product-quantity {
    display: flex;
    justify-content: space-between;
    padding-block: 0.625rem;
    padding-right: 0.625rem;

    .cart-product-quantity-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      input {
        width: 28px;
        height: 32px;
        /* min-width: 45px; */
        outline: none;
        border: none;
        margin: 0 5px;

        font-size: 0.875rem;
        color: #27272e;
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
        line-height: 30px;

        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        appearance: textfield;

        @media screen and (max-width: 380px) {
          width: 15px;
        }
      }
    }
  }

  .cart-product-quantity,
  .cart-product-image,
  .cart-product-name,
  .cart-product-price {
    border-bottom: solid 2px ${props => props.theme['slate-50']};
  }

  .value {
    font-size: 0.8125rem;
    color: #000;
    font-weight: 500;
  }
`
