import { styled } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  border-bottom: solid 2px ${props => props.theme['slate-50']};
  padding: 0.937rem 0;

  .cart-product > span, .cart-product-quantity > span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;
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

  .cart-product {
    display: flex;
    align-items: center;
    gap: 3.5rem;

    grid-column: 1/4;

    .cart-product-image {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 80px;
      height: 80px;
      background-color: ${props => props.theme['slate-50']};
      border-radius: 10px;

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

    a {
      font-size: 1.25rem;
      font-weight: ${props => props.theme['font-w-medium']};
      color: ${props => props.theme['gray-900']};
      transition: .3s;
      text-decoration: none;

      &:hover {
        cursor: pointer;
        color: ${props => props.theme['blue-600']};
      }
    }
  }

  .cart-product-subtotal, .cart-product-price {
    display: flex;
    align-items: center;

    font-size: 1.25rem;
    font-weight: ${props => props.theme['font-w-medium']};
    color: ${props => props.theme['gray-500']};
  }

  .cart-product-quantity {
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

      font-size: 14px;
      color: #27272e;
      font-size: 20px;
      font-weight: 500;
      text-align: center;
      line-height: 30px;

      -webkit-appearance: textfield;
      -moz-appearance: textfield;
      appearance: textfield;
    }
  }
`
