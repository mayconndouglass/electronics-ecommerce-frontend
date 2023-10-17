import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  max-width: 1320px;
  margin: 0 auto;

  @media screen and (max-width: 990px) {
    max-width: 724px;
  }

  @media screen and (max-width: 750px) {
    max-width: 540px;
  }
`
