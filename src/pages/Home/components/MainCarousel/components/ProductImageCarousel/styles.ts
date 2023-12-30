import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  img {
    width: 95%;//100%;
    object-fit: cover;
  }

  .product-price {
    height: 100px;
    width: 100px;
    background-color: ${props => props.theme.white};
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.25rem;
    text-align: center;
    position: absolute;
    top: 20%;
    left: 30%;

    span:first-child {
      color: ${props => props.theme['gray-500']};
    }

    span:last-child {
      color:${props => props.theme['blue-600']};
      font-weight: ${props => props.theme['font-w-bold']};
      font-size: 1.125rem;
    }

    @media screen and (max-width: 1024px) {
      width: 80px;
      height: 80px;

      top: 10%;
      left: 20%;

      span:first-child {
        display: none;
      }

      span:last-child {
        font-size: 0.875rem;
      }
    }

    @media screen and (max-width: 750px) {
      width: 60px;
      height: 60px;

      span:last-child {
        font-size: 0.75rem;
      }
    }

    @media screen and (max-width: 512px) {
      width: 80px;
      height: 80px;
      left: 15%;
    }

    @media screen and (max-width: 300px) {
      width: 60px;
      height: 60px;
    }
  }
`
