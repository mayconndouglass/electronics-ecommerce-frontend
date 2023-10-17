import styled from 'styled-components'
interface Props {
  fontSize: number
}

export const H2 = styled.h2<Props>`
  color: #292930;
  line-height: 1.3;
  font-weight: 700;
  font-size: ${props => `${props.fontSize}rem`};

  @media screen and (max-width: 990px) {
    font-size: 1.75rem;
  }

  @media screen and (max-width: 750px) {
    font-size: 1.5rem;
  }
`
