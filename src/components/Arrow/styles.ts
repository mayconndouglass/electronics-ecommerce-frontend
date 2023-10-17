import styled from 'styled-components'

interface arrowProps {
  $right: string,
  $top: string,
  $arrowAnimation: 'right' | 'left'
}

export const Container = styled.div<arrowProps> `
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: ${props => props.$top};
  left: auto;
  right: ${props => props.$right};
  outline: none;
  width: 50px;
  height: 50px;
  background: ${props => props.theme['slate-50']};
  color: ${props => props.theme['gray-500']};
  border: none;
  border-radius: 6px;
  z-index: 2;

  &::before {
    content: "";
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme['slate-50']};
    border-radius: 6px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    transition: transform .5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover::before {
    transform: scale(1.07);
    transition: transform .5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  svg {
    color: ${props => props.theme['gray-500']};
    font-weight: 300;
    width: 16px;
    height: 18px;
  }

  @media screen and (max-width: 750px) {
    width: 40px;
    height: 40px;

    svg {
      width: 14px;
    }
  }

  @keyframes moveRight {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    50% {
      transform: translateX(50%);
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

  @keyframes moveLeft {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    50% {
      transform: translateX(-50%);
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

  &:hover svg {
    animation:
      ${props => props.$arrowAnimation === 'right' ? 'moveRight' : 'moveLeft'} 400ms;
  }
`
