import styled, { keyframes } from 'styled-components'

interface BannerProps {
  open: boolean;
}

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
    height: 2.5rem;
  }
  to {
    transform: translateY(-2.5rem);
    padding: 0;
    opacity: 0;
    height: 0px;
  }
`

export const Container = styled.div<BannerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1.25rem;
  background-image: url('assets/images/image-header-top.png');
  opacity: ${props => (props.open ? '1' : '0')};
  height: ${props => (props.open ? '2.5rem' : '0')};

  p, a {
    text-align: center;
    color: ${props => props.theme.white};
    font-size: 0.875rem;
    font-weight: ${props => props.theme['font-w-egular']};
  }

  a {
    font-weight: ${props => props.theme['font-w-bold']};
    transition: all .3s ease-in-out;

    &:hover {
      color: ${props => props.theme['pink-600']};
    }
  }

  .close {
    cursor: pointer;
  }

  animation: ${props => (!props.open ? slideOut : '')} 0.5s ease;

  @media screen and (max-width: 270px) {

    padding: ${props => (props.open ? '2rem 1.25rem' : '0')};
    gap: 1rem;
  }
`
