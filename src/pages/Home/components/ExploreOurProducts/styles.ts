import styled from 'styled-components'

export const Container = styled.section`
  padding: 80px 0;

  h2 {
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1.3;
    color: #292930;

    margin-bottom: 30px;
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
`
