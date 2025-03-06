import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${props => props.theme['gray-100']};
  padding: 5rem 0;

  h2 {
    margin-bottom: 1.875rem;
  }

  .testimonials-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;

    & > div:nth-child(2) {
      margin-top: 1.875rem;
    }

    @media screen and (max-width: 990px){
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 750px){
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media screen and (max-width: 512px){
    h2 {
      text-align: center;
    }
  }
`
