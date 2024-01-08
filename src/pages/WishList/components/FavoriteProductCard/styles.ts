import { styled } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  border-bottom: solid 2px ${props => props.theme['slate-50']};
  padding: 0.937rem 0;

  .favorite-product > span {
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

  .favorite-product {
    display: flex;
    align-items: center;
    gap: 3.5rem;

    grid-column: 1/4;

    .favorite-product-image {
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

  .favorite-product-price, .favorite-product-stock {
    display: flex;
    align-items: center;

    font-size: 1.25rem;
    font-weight: ${props => props.theme['font-w-medium']};
    color: ${props => props.theme['gray-500']};
  }

  .favorite-product-button {
    display: flex;
    align-items: center;
  }

  button {
    font-size: 1rem;
    line-height: 1.7;
    font-weight: ${props => props.theme['font-w-bold']};
    color: ${props => props.theme['gray-900']};
    background-color: white;

    /* padding: 1rem 2.375rem; */
    padding: 0.65rem 1.25rem;
    border-width: 2px;
    border: 2px solid #efefef;
    border-radius: 6px;
    transition: all .3s ease-in-out;

    &:hover {
      background-color: ${props => props.theme['blue-600']};
      color: white;
      cursor: pointer;
      border-color: ${props => props.theme['blue-600']};
    }
  }
`
