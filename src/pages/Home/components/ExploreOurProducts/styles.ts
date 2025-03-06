import styled from 'styled-components'

export const Container = styled.section`
  padding: 5rem 0;

  h2 {
    margin-bottom: 1.875rem;
  }

  .container-products-cards {
    & > div {
      margin: 0 -15px;
    }
  }

  .button {
    display: flex;
    justify-content: center;

    a {
      display: block;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 460px){
    .container-products-cards {
      padding-top: 4rem;
    }

    h2 {
      text-align: center;
    }

    .button {
      & > div {
       button {
          padding: 1rem;
        }
      }
    }
  }
`
