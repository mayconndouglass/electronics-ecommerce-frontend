import styled, { keyframes } from 'styled-components'

const slideOut = keyframes`
  0% {
    height: 350px;
    margin-top: 20px;
    padding: 30px;
    border: 1px solid #CBD3D9;
  }
  70%{
    padding: 10px;
  }
  90% {
    border: 1px solid #CBD3D9;
  }
  100% {
    height: 0;
    margin-top: 0;
    padding: 0;
    border: 0;
  }
`

const slideOutGamb = keyframes`
  0% {
    height: 190px;
    margin-top: 20px;
    padding: 30px;
    border: 1px solid #CBD3D9;
  }
  70%{
    padding: 10px;
  }
  90% {
    border: 1px solid #CBD3D9;
  }
  100% {
    height: 0;
    margin-top: 0;
    padding: 0;
    border: 0;
  }
`

const slideIn = keyframes`
  0% {
    height: 0;
    margin-top: 0;
    padding: 0;
    border: 0;
  }
  100% {
    /* height: 350px; */
    margin-top: 20px;
    padding: 30px;
    border: 1px solid #CBD3D9;
  }
`

export const Container = styled.section<{ open: boolean, size: number }>`
  margin-bottom: 20px;

  .togle {
    display: flex;
    align-items: center;

    background-color: #F6F7FB;
    border-radius: 6px;
    padding: 17px 30px;

    svg {
      font-size: 1rem;
      color: #777;
      margin-bottom: 2px;
      margin-right: 8px;
    }

    p {
      font-size: 1rem;
      font-weight: ${props => props.theme['font-w-egular']};
      color: #777;
      line-height: 1.7;
    }

    span {
      display: flex;
      align-items: center;
      gap: 5px;

      font-size: 1rem;
      font-weight: ${props => props.theme['font-w-egular']};
      transition: 0.3s;
      color: #292930;

      svg {
        color: #777;
        font-weight: ${props => props.theme['font-w-egular']};
        margin-bottom: 0;
      }

      &:hover {
        color: ${props => props.theme['blue-400']};
        cursor: pointer;
      }
    }
  }

  .togle-form, form {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .togle-form {
    overflow: hidden;
    margin-top: 0;
    padding: 0;
    margin-bottom: 4px;

    border:0;
    height: ${props => props.open ? `${props.size}px` : '0px'};
    margin-top: ${props => props.open && '20px'};
    padding: ${props => props.open && '30px'};

    border: ${props => props.open && '1px solid #CBD3D9'};
    border-radius: 16px;
    animation: ${props => (
    props.open
      ? slideIn
      : (props.size > 190 ? slideOut : slideOutGamb))}
    0.5s ease-out;

    p {
      font-size: 1rem;
      line-height: 1.7;
      font-weight: ${props => props.theme['font-w-egular']};
      color: #777;
    }
  }
`
