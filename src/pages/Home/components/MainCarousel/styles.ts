import styled from 'styled-components'

export const Container = styled.section`
  background-color: #F9F3F0;
  padding: 5rem 0;
  position: relative;

  overflow: hidden;

  @keyframes carousel-animation {
    0% {
        opacity: 0;
        transform: translate3d(0, 50%, 0);
    }
    100% {
        opacity: 1;
        transform: none;
    }
  }

  .next-slide-anim {
    .product-info {
      & > span {
        animation: carousel-animation 800ms ease-in-out 0s normal none 1 running;
      }

      h1 {
        animation: carousel-animation 1000ms ease-in-out 0s normal none 1 running;
      }

      .more-info {
        & > a {
          animation: carousel-animation 1200ms ease-in-out 0s normal none 1 running;
        }

        .users {
          animation: carousel-animation 1200ms ease-in-out 0s normal none 1 running;
        }

        .reviews {
          animation: carousel-animation 1000ms ease-in-out 0s normal none 1 running;
        }
      }
    }
  }

  & > div {
    display: flex;
    align-items: center;
  }

  .slick-slider.slick-initialized {
    width: 678px;
  }

  .slick-dots {
    z-index: 3;
    text-align: left;
    bottom: -50px;

    li {
      width: initial;
    }

    button {
      height: 4px;
      width: 24px;
      border-radius: 6px;
      background-color: white;
      padding: 0;

      &::before, &:hover::before {
        opacity: 0;
      }
    }

    & li.slick-active {
      button {
        background-color: #ff497c;
        width: 34px;
        transition: all .4s ease-out 0s;
      }

      button::before {
        opacity: 0;
      }
    }
  }

  .product-info {
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
          /* transform: scale(1); */
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
  }

  .slick-list {
    z-index: 2;
  }

  .shape-carousel {
    position: absolute;
    z-index: 1;
    right: 30%;
    bottom: -9.25rem;
  }
`
