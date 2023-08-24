import styled, { keyframes } from 'styled-components'

interface BannerProps {
  isOpen: boolean;
}

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-45px);
    opacity: 0;
  }
`

export const Container = styled.div<BannerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px 20px;
  background-image: url('assets/images/image-header-top.png');
  opacity: ${props => (props.isOpen ? '1' : '0')};

  p, a {
    text-align: center;
    color: white;
    font-size: 14px;
    font-weight: 400;
    font-family: 'DM Sans', 'sans-serif';
  }

  a {
    font-weight: 700;
    transition: all .3s ease-in-out;

    &:hover {
      color: #ff497c;
    }
  }

  .close {
    cursor: pointer;
  }

  animation: ${props => (!props.isOpen ? slideOut : '')} 0.5s ease-in-out;
`
