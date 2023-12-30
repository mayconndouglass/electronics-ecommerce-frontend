import styled from 'styled-components'

export const Container = styled.section`
  background-color: #F9F3F0;
  padding: 5rem 0;
  position: relative;

  overflow: hidden;

  & > div {
    display: flex;
    align-items: center;
  }

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
        & > a, & > div {
          animation: carousel-animation 1200ms ease-in-out 0s normal none 1 running;
        }

        .users {
          animation: carousel-animation 700ms ease-in-out 0s normal none 1 running;
        }

        .reviews {
          animation: carousel-animation 1000ms ease-in-out 0s normal none 1 running;
        }
      }
    }
  }

  .slick-slider.slick-vertical.slick-initialized {
    .slick-list {
      height: 350px !important;

      @media screen and (max-width: 1224px) {
        height: 400px !important;
      }

      @media screen and (max-width: 512px) {
        height: 300px !important;
      }

      @media screen and (max-width: 256px) {
        height: 350px !important;
      }
    }
  }

  .slick-slider.slick-initialized {
    width: 661px;//678px;

    padding: 0 0 15px 15px;
    margin: 0 0 -15px -15px;

    @media screen and (max-width: 1480px) {
     width: 45.3125vw;
    }

    @media screen and (max-width: 990px) {
     width: 50%;
    }
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
      background-color: ${props => props.theme.white};
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

  .slick-slider > .slick-list {
    padding: 0 0 15px 15px;
    margin: 0 0 -15px -15px;

    @media screen and (max-width: 512px) {
      padding: 0;
      margin: 0;
    }
  }

  .shape-carousel {
    position: absolute;
    z-index: 1;
    right: 30%;
    bottom: -9.25rem;
  }

  @media screen and (max-width: 1024px) {
    .shape-carousel {
      right: 5%;
    }
  }

  @media screen and (max-width: 750px) {
    padding: 2rem 0;

    .slick-slider.slick-initialized {
      @media screen and (max-width: 512px) {
       width: 100%;
     }
    }
  }

  @media screen and (max-width: 512px) {
    padding-bottom: 4rem;

    & > div {
      flex-direction: column;
      gap: 2rem;
    }

    .slick-dots {
      text-align: center;
    }
  }

  @media screen and (max-width: 412px) {
    .shape-carousel {
      right: -5%;
    }
  }

  @media screen and (max-width: 300px) {
    .shape-carousel {
      right: -24%;
    }
  }
`
