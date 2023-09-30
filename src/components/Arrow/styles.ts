import styled from 'styled-components'

export const Container = styled.div<{ right: string, top: string }> `
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: ${props => props.top};
  left: auto;
  right: ${props => props.right};
  outline: none;
  width: 50px;
  height: 50px;
  background: #F6F7FB;
  color: #777;
  border: none;
  border-radius: 6px;
  z-index: 2;

  &::before {
    content: "";
    height: 100%;
    width: 100%;
    background-color: #F6F7FB;
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
    color: #777;
    font-weight: 300;
    width: 16px;
    height: 18px;
  }
`
