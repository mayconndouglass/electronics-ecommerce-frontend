import { styled } from 'styled-components'

export const Container = styled.section`
  padding: 5rem 0 3.125rem;

  h2 {
    text-align: center;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      display: flex;
      justify-content: center;
    }
  }

  h2 {
    margin-bottom: 3.125rem;
  }

  .services-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;

    @media screen and (max-width: 496px) {
      gap: 1rem;
    }
  }
`
