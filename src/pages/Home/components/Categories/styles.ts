import styled from 'styled-components'

export const Container = styled.section`
  padding: 5rem 0 3.125rem;

  @media screen and (max-width: 420px) {
    & > div {
      h2 {
        text-align: center;
      }
    }
  }


  .container-categories {
    margin-top: 10px;

    .slick-list {
      padding-block: 2rem;
    }

    @media screen and (max-width: 420px) {
      .slick-list {
        padding-block: 4rem;
      }
    }
  }
`
