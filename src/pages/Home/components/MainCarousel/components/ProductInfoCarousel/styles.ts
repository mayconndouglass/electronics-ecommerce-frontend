import styled from 'styled-components'

export const Container = styled.div`
  h1 {
    letter-spacing: -0.03em;
    margin-bottom: 50px;
    font-size: 60px;
    line-height: 1.2;
    font-weight: 700;
  }

  .more-info {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .users {
    animation: carousel-animation 1200 ease-in-out 0s normal none 1 running;
    ul {
      display: flex;

      li {
        margin-left: -22px;

        img {
          border: 2px solid #f9f3f0;
          border-radius: 50%;
        }
      }
    }
  }

  .reviews {
    .rating-stars {
      font-size: 16px;

      svg {
        color: #ffa800;
      }
    }

    font-size: 12px;

    span {
      font-weight: 700;
    }
  }
`
