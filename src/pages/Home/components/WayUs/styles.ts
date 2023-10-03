import { styled } from 'styled-components'

export const Container = styled.section`
  padding: 5rem 0 3.125rem;

  &>div {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      display: flex;
      justify-content: center;
    }
  }

  h2 {
    margin-bottom: 50px;
  }

  .services-container {
    display: flex;
    gap: 3.2rem;
  }
`
