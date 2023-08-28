import styled from 'styled-components'

export const Container = styled.div`
  & > span {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 500px;

    margin-bottom: 1rem;

    font-size: 14px;
    font-weight: 700;
    color: #ff497c;

    .icon-container {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 24px;
      width: 24px;

      background-color: #ff497c;
      border-radius: 50%;
    }

    svg {
      font-size: 12px;
      color: white;
      position: relative;
    }
  }

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

    a {
      display: flex;
      align-items: center;
      gap: 0.625rem;
      margin-right: 2rem;

      background-color: white;
      color: #292930;
      box-shadow: 0 16px 32px 0 rgba(103,103,103,.06);
      border-radius: 6px;
      line-height: 1.7;
      font-weight: 600;
      padding: 16px 38px;
      position: relative;
      transition: all .3s ease-in-out;
      z-index: 1;
      text-decoration: none;

      &::before {
        content: "";
        height: 100%;
        width: 100%;
        border-radius: 6px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        transition: transform .5s cubic-bezier(0.165, 0.84, 0.44, 1);
        background-color: white;
      }

      &:hover::before {
        transform: scale(1.1);
        transition: transform .3s cubic-bezier(0.165, 0.84, 0.44, 1);
      }

      svg {
        font-weight: 400;
        color: #292930;
        font-size: 1.2rem;
      }
    }
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
