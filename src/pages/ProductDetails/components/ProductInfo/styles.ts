import { styled } from 'styled-components'

export const Container = styled.section`
  padding: 5rem 0;

  & > div {
    display: flex;
    gap: 2rem;

    .slick-slider.slick-initialized {
      width: 612px;
      height: 612px;
      margin-left: 8%;/* 112px; */
      background-color: ${props => props.theme['slate-50']};
      border-radius: 6px;

      .slick-list {
        height: 100%;

        .slick-track {
          height: 100%;

          & > div {
            & > div {
              height: 100%;
            }
          }
        }
      }

      ul {
        display: flex !important;
        flex-direction: column !important;
        position: absolute;
        top: 0;
        left: -18.3%;/* 112px; */;
        width: auto;
        height: auto;
        gap: 1.5rem;

        li {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 76px;
          height: 74px;
          background-color: ${props => props.theme['slate-50']};
          border-radius: 6px;
          border: 2px solid ${props => props.theme['slate-50']};
          transition: all 0.4s;

          &:hover {
            border-color: ${props => props.theme['blue-400']};
            transition: all 0.4s;
          }

          img {
            width: 50px;
            height: 50px;
            object-fit: contain;
            border-radius: 6px;
          }
        }

        .slick-active {
          border: 2px solid ${props => props.theme['blue-400']};
        }
      }
    }
  }

  .main-image {
    display: flex !important;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
      width: 400px;
      height: 400px;
      object-fit: contain;
    }
  }

  .product-information {
    h2 {
      font-weight: ${props => props.theme['font-w-bold']};
      font-size: 2.25rem;
      line-height: 1.3;
      color: #27272E;
      margin-bottom: 1.125rem;
    }

    & > span {
      font-weight: ${props => props.theme['font-w-medium']};
      font-size: 1.5rem;
      display: inline-block;
      margin-bottom: 10px;
      color: ${props => props.theme.black};
    }

    .old-price {
      color: ${props => props.theme['slate-300']};
      text-decoration: line-through;
      margin-right: 10px;
    }

    .product-features {
      li {
        color: ${props => props.theme['blue-400']};
        font-weight: ${props => props.theme['font-w-medium']};
        font-size: 1rem;
        line-height: 1.7;
        display: flex;
        align-items: center;
        margin: 0;

        svg {
          margin-right: 0.3rem;
        }
      }
    }

    .description {
      ul {
        padding-left: 20px;
        margin-bottom: 1.5rem;

        li {
          font-size: 1rem;
          line-height: 1.5;
          margin-top: 8px;
          margin-bottom: 8px;
          color: ${props => props.theme['gray-500']};
          list-style: disc;
        }
      }
    }

    .colors {
      margin-bottom: 1.5rem;

      h6 {
        font-weight: ${props => props.theme['font-w-egular']};
        font-size: 1.25rem;
        margin-bottom: 0;
      }

      & > div {
        /* background-color: #F6F7FB; */
        width: 200px;
        margin-top: 0.6rem;

        & > span {
          display: inline-block;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          margin-right: 10px;
        }
      }
    }

    .quantity {
      h6 {
        font-weight: ${props => props.theme['font-w-egular']};
        font-size: 1.25rem;
        margin-bottom: 0;
      }

      & > div {
        margin-top: 0.6rem;;

        & > span {
          display: inline-block;
          width: 40px;
          height: 40px;
          background: ${props => props.theme['slate-50']};
          font-weight: 300;
          cursor: pointer;
          text-align: center;
          line-height: 34px;
          border-radius: 8px;
          font-size: 1.25rem;
        }

        input {
          border: 1px solid #d8d8d8;
          border-radius: 8px;
          height: 40px;
          width: 40px;
          font-size: 14px;
          margin: 0 10px;
          color: #27272e;
          font-weight: 500;
          text-align: center;
          line-height: 30px;
        }
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 1.5rem;

      & > div {
        a {
          display: block;
        }
      }

      .wishlist {
        a {
          border: 2px solid #CBD3D9;
          padding: 0.7rem 1rem 0.5rem;
          border-radius: 6px;
          line-height: 1.7;
          font-weight: ${props => props.theme['font-w-bold']};
          display: inline-block;
          position: relative;
          transition: all .3s ease-in-out;
          z-index: 1;

          svg {
            font-size: 1.5rem;
            color: ${props => props.theme['gray-900']};
          }

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

            background-color: ${props => props.theme['blue-400']};
            opacity: 0;
            visibility: hidden;
            transform: scale(.8);
            transition: .3s;
          }

          &:hover {
            border-color: ${props => props.theme['blue-400']};

            svg {
              color: white;
            }
          }

          &:hover::before {
            visibility: visible;
            opacity: 1;
            transform: scale(1.2);
          }
        }
      }
    }
  }
`
