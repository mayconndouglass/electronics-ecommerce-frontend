import styled, { keyframes } from 'styled-components'

interface BannerProps {
  open: boolean;
}

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
    height: 40px;
  }
  to {
    transform: translateY(-40px);
    opacity: 0;
    height: 0px;
  }
`

export const Container = styled.div<BannerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 20px;
  background-image: url('assets/images/image-header-top.png');
  opacity: ${props => (props.open ? '1' : '0')};
  height: ${props => (props.open ? '40px' : '0')};

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

  animation: ${props => (!props.open ? slideOut : '')} 0.5s ease;
`
