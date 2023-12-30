import styled from 'styled-components'

export const Container = styled.div`
  h1 {
    letter-spacing: -0.03em;
    margin-bottom: 3.125rem;
    font-size: 3.75rem;
    line-height: 1.2;
    font-weight: ${props => props.theme['font-w-bold']};
  }

  .more-info {
    display: flex;
    align-items: center;
    gap: 2rem;

    & > div {
      display: flex;
    }

    @media screen and (max-width: 1224px) {
      flex-direction: column;
      align-items: start;
    }
  }

  .users {
    animation: carousel-animation 1200 ease-in-out 0s normal none 1 running;
    margin-left: 2rem;

    ul {
      display: flex;

      li {
        margin-left: -22px;

        img {
          border: 2px solid ${props => props.theme['gray-100']};
          border-radius: 50%;
        }
      }
    }
  }

  .reviews {
    font-size: 0.75rem;

    .rating-stars {
      font-size: 1rem;

      svg {
        color: ${props => props.theme['yellow-400']};
      }
    }

    span {
      font-weight: ${props => props.theme['font-w-bold']};
    }
  }

  @media screen and (max-width: 990px) {
    h1 {
      font-size: 2.75rem;
    }
  }

  @media screen and (max-width: 750px) {
    h1 {
      font-size: 2rem;
      margin-bottom: 1.875rem;
    }

    .more-info {
      & > div {
        a {
          padding: 0.75rem 1.56rem !important;
        }
      }
    }
  }

  @media screen and (max-width: 512px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (max-width: 430px) {
    h1 {
      text-align: center;
    }
  }
`
