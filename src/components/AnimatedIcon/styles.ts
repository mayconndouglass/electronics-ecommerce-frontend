import { styled } from 'styled-components'

export const Container = styled.div`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    color: #292930;
    font-size: 1.5rem;
    font-weight: 400;

    position: relative;
    transition: 0.3s;

    &::before {
      content: "";
      height: 45px;
      width: 45px;

      background-color: #ff497c;
      border-radius: 50%;

      transform: scale(0);
      position: absolute;
      z-index: -1;
      transition: 0.3s;
    }

    &:hover {
      color: white;

      &::before {
        transform: scale(1);
        z-index: 0;
      }
    }
  }
`
