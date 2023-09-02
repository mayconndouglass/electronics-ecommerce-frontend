import styled from 'styled-components'

interface ButtonProps {
  backgroundColor?: string
  color?: string
}

export const Container = styled.div<ButtonProps>`
  a {
      display: flex;
      align-items: center;
      gap: 0.625rem;
      margin-right: 2rem;

      background-color: ${props => props.backgroundColor ? props.backgroundColor : 'white'};
      color: ${props => props.color ? props.color : '#292930'};
      box-shadow: 0 16px 32px 0 rgba(103,103,103,.06);
      border-radius: 6px;
      line-height: 1.7;
      font-weight: 600;
      padding: 16px 38px;
      position: relative;
      transition: all .3s ease-in-out;
      z-index: 1;
      text-decoration: none;

      &::before {
        content: "";
        height: 100%;
        width: 100%;
        border-radius: 6px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        transition: transform .5s cubic-bezier(0.165, 0.84, 0.44, 1);
        background-color: white;
      }

      &:hover::before {
        transform: scale(1.1);
        transition: transform .3s cubic-bezier(0.165, 0.84, 0.44, 1);
      }

      svg {
        font-weight: 400;
        color: #292930;
        font-size: 1.2rem;
      }
    }
`
