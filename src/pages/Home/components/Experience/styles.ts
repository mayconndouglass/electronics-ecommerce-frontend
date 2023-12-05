import styled from 'styled-components'

export const Container = styled.section`
  margin: 95px auto 0 auto;

  & > div {
    display: flex;
    padding: 4rem 5rem;
    border-radius: 6px;

    background-color: #F6F7FB;
  }

  h2 {
    margin: 0.625rem 0 2rem 0;
  }

  .info {
    width: 50%;

    & > span {
      display: flex !important;
    }

    span {
      display: inline-block;
    }
  }

  .countdown-container {
    display: flex;
    gap: 1rem;
    margin-bottom: 2.5rem;

    .countdown {
      height: 80px;
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      background-color: ${props => props.theme.white};
      border-radius: 50%;

      span {
        font-size: 1.5rem;
        font-weight: ${props => props.theme['font-w-medium']};
        color: ${props => props.theme.black};
        line-height: 1;
        margin-bottom: 5px;
      }

      p {
        line-height: 1;
        font-size: 0.875rem;
        font-weight: ${props => props.theme['font-w-medium']};
        color: ${props => props.theme['gray-500']};
      }
    }
  }

  .image {
    margin-top: -160px;
  }

  @media screen and (max-width: 990px) {
    margin: 0 auto;

    & > div {
      flex-direction: column;
      align-items: center;
      gap: 4rem;
      padding: 4rem 0;
    }

    h2 {
      font-size: 2.5rem;
      text-align: center;
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;

      span {
        justify-content: center;
      }

      & > div:last-child {
        a {
          padding: 0.75rem 1.56rem;
        }
      }
    }

    .image {
      margin-top: 0;
    }
  }

  @media screen and (max-width: 750px) {
    h2 {
      font-size: 1.75rem;
    }

    .image {
      display: flex;
      justify-content: center;
      img {
        width: 90%;
      }
    }

    .countdown-container {
      .countdown {
        width: 60px;
        height: 60px;

        span {
          font-size: 1rem;
        }
      }
    }
  }

  @media screen and (max-width: 350px) {
    .countdown-container {
      .countdown {
        width: 50px;
        height: 50px;
      }
    }
  }
`
