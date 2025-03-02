import { styled } from 'styled-components'

export const Container = styled.section`
  & > div {
    display: flex;
    justify-content: space-between;
    gap: 1.875rem;

    margin-bottom: 1.875rem;

    @media screen and (max-width: 990px){
      flex-direction: column;
    }
  }
`
