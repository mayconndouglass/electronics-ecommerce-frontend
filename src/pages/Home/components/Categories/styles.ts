import styled from 'styled-components'

export const Container = styled.section`
  padding: 5rem 0 3.125rem;

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 420px) {
    padding: 5rem 0 0;

    & > div {
      h2 {
        text-align: center;
      }
    }
  }

  .container-categories {
    margin-top: 10px;

    .slick-list {
      margin: 0 -15px;
      padding-block: 2rem;

      .slick-slide {
        padding: 0 15px;
      }
    }

    @media screen and (max-width: 420px) {
      .slick-list {
        padding-block: 4rem;
      }
    }
  }
`
