import styled from 'styled-components'

interface ButtonProps {
  $background?: string
  color?: string
  $padding: {
    horizontal: number
    vertical: number
  }
}

export const Container = styled.div<ButtonProps>`
  button {
      outline: none;
      border: none;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.625rem;

      background-color:
        ${props => props.$background ? props.$background : props.theme.white};
      color: ${props => props.color ? props.color : props.theme['gray-900']};
      box-shadow: 0 16px 32px 0 rgba(103,103,103,.06);
      border-radius: 6px;
      line-height: 1.7;
      font-weight: ${props => props.theme['font-w-semi-bold']};
      font-size: 1rem;

      padding:
        ${({ $padding }) => `${$padding.vertical}rem ${$padding.horizontal}rem`};
      position: relative;
      transition: all .3s ease-in-out;
      z-index: 1;
      text-decoration: none;

      &:hover {
        cursor: pointer;
      }

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
        background-color:
          ${props => props.$background ? props.$background : props.theme.white};
      }

      &:hover::before {
        transform: scale(1.1);
        transition: transform .3s cubic-bezier(0.165, 0.84, 0.44, 1);
      }

      svg {
        font-weight: 400;
        color: ${props => props.theme['gray-900']};
        font-size: 1.2rem;
      }

      @media screen and (max-width: 750px) {
        font-size: 0.875rem;
      }
    }
`
