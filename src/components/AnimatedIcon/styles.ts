import { styled } from 'styled-components'

export const Container = styled.div<{ color: string }>`
  display: inline-block;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    color: ${props => props.color};
    font-size: 1.5rem;
    font-weight: ${props => props.theme['font-w-egular']};

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
      color: ${props => props.theme.white};

      &::before {
        transform: scale(1);
        z-index: 0;
      }
    }
  }
`
