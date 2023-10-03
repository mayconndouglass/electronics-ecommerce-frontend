import { styled } from 'styled-components'

export const Container = styled.section`
  padding-top: 5rem;
  background-color: '#FEFEFE';

  & > div {
    padding-bottom: 3.125rem;
    border-bottom: 2px solid #F6F7FB;
  }

  .products-container {
    & > div {
      margin: 0 -15px;
    }
  }
`
