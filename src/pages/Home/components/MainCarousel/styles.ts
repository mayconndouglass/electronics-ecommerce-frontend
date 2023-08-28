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
