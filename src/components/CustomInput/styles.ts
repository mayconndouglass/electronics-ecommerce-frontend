import { styled } from 'styled-components'

export const Container = styled.div<{ id: string }> `
  width: 100%;
  position: relative;

  span {
    color: #E76458;
  }

  label {
    display: block;
    position: absolute;
    top: -11px;
    left: 20px;
    padding: 0 0.625rem;

    font-size: 0.875rem;
    font-weight: ${props => props.theme['font-w-medium']};
    line-height: 1.3;
    color: ${props => props.theme['gray-500']};
    background: ${props => props.theme.white};
    z-index: 4;
  }

  #${props => props.id} {
    width: 100%;
    /* height: 50px; */
    border-radius: 6px;
    outline: none;
    padding: 1.25rem 1.25rem;

    font-size: 0.875rem;
    font-weight: ${props => props.theme['font-w-egular']};
    line-height: 1.3;
    color: ${props => props.theme['gray-900']};
    border: 1px solid #CBD3D9;
    background-color: ${props => props.theme.white};
    transition: 0.3s;

    &:focus {
      border-color: ${props => props.theme['blue-400']};
      transition: 0.3s;
    }
  }
`
