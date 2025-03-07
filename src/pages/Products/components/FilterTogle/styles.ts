import { keyframes,styled } from 'styled-components'

const slideOut = (size: string) => keyframes`
  0% {
    height: ${size};
  }
  100% {
    height: 0;
  }
`

const slideIn = (size: string) => keyframes`
  0% {
    height: 0;
  }
  100% {
    height: ${size};
  }
`

export const Container = styled.div<{ open: boolean, size: string }>`
  .drop {
    overflow: hidden;

    height: ${props => props.open ? props.size : '0px'};
    animation: ${props => props.open ? slideIn(props.size) : slideOut(props.size)} 0.5s ease-out;
  }

  h6 {
    font-size: 1.125rem;
    font-weight: 500;
    color: #27272E;
    border-bottom: 2px solid #CBD3D9;
    padding-bottom: 0.625rem;
    margin-bottom: 1.25rem;
    cursor: pointer;
    line-height: 1.3;
    position: relative;
    transition: .5s ease-out;

    /* background: #ebebeb; */

    &::before {
      content: ${props => (props.open ? '\'\\2212\'' : '\'\\002B\'')};
      font-size: 1.5rem;
      font-weight: 700;
      position: absolute;
      top: 0;
      right: 0;
      transition: .5s ease-out;
      pointer-events: none;
      transform: translateY(-20%);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      /* width: 100%; */
      height: 2px;
      background: ${props => props.theme['blue-400']};
      transition: .5s;
      pointer-events: none;
      /* opacity: ${props => (props.open ? '1' : '0')}; */
      /* transition: .5s; */
      width: ${props => (props.open ? '100%' : '0')};
    }
  }
`
