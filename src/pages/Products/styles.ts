import { styled } from 'styled-components'

export const Container = styled.section`
  main {
    .content {
      display: flex;
      gap: 2rem;
      /* padding: 5rem 0; */
      padding-top: 5rem;

      .right {
        width: 75%;
        /* height: 100vh; */

        @media screen and (max-width: 1150px) {
          width: 80%;
        }

        @media screen and (max-width: 990px) {
          width: 100%;
        }

        .filter-results {
          display: flex;
          justify-content: end;
          align-items: center;
          margin-bottom: 1.5rem;

          .filter-icon {
            display: none;
          }

          @media screen and (max-width: 990px) {
            justify-content: space-between;

            .filter-icon {
              display: flex;
              align-items: center;
              cursor: pointer;

              svg {
                width: 20px;
                height: 20px;
                font-weight: 500;
              }

              span {
                margin: 0;
              }
            }
          }

          @media screen and (max-width: 425px) {
            flex-direction: column;
            align-items: end;
            gap: 1rem;
          }

          span {
            font-size: 1rem;
            color: #000;
            font-weight: 500;
            margin: 0 1.25rem 0 0.625rem;
          }

          select {
            color: #27272E;
            font-weight: 500;
            font-size: 1rem;
            border: 2px solid #CBD3D9;
            background: url('/assets/images/arrow-icon2.png') 85% center no-repeat rgba(0, 0, 0, 0);

            cursor: pointer;
            transition: .3s;
            height: 55px;
            padding: 0 2.5rem 0 1rem;
            outline: none;
            appearance: none;
            line-height: 1.7;

            background-color: white;
            border-radius: 0.5rem;
          }

          @media screen and (max-width: 750px) {
            & > div:last-child {
              display: flex;
              flex-direction: column;
              align-items: end;
              gap: 1rem;
            }
           /*  flex-direction: column;
            align-items: end;
            gap: 1rem; */

            span {
              order: 2;
            }

            select {
              height: 45px;
            }
          }
        }

        .hidden {
          display: none;
        }

        .products {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: 2rem;

          @media screen and (max-width: 750px) {
            grid-template-columns: repeat(2, 1fr);
          }

          @media screen and (max-width: 520px) {
            grid-template-columns: repeat(1, 1fr);
          }

          .skeleton-product-card {
            & > div {
              padding: 0;

              .image-loading {
                height: 200px;
              }
            }
          }

          .product-card hidden {
            visibility: hidden;
            margin-top: 2rem;
          }

          @media screen and (max-width: 1300px) {
            column-gap: 1.4rem;

            .product-card .image-container .actions-container .add-to-cart button {
              line-height: 1;
            }
          }

          @media screen and (max-width: 520px) {
            .product-card .image-container .actions-container .add-to-cart button {
              line-height: 1.7;
            }
          }

          @media screen and (max-width: 330px) {
            .product-card .image-container .actions-container .add-to-cart button {
              line-height: 1;
            }
          }

          /* customizando o card-product */
          & > div {
            padding: 0;
          }

          .image-container {
            height: 200px;

            .add-to-cart {
              button {
                /* line-height: 1; */
              }
            }

            img {
              width: 150px;
              height: 150px;
            }
          }

          .product-info {
            margin: 0.5rem 0 2rem;

            .product-name {
              margin-bottom: 0.5rem;
            }
          }

          .rating-stars {
            display: none;
          }
        }

        .no-products {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #777;

          h2 {
            margin-left: 2rem;
          }
        }
      }

      @media screen and (max-width: 400px) {
        padding-top: 2.25rem;
      }
    }

    .skeleton-pagination-container {
      width: 75%;
      display: flex;
      justify-content: center;
      margin-left: auto;
      padding-bottom: 5rem;

      .skeleton-pagination {
        width: 188px;
        height: 35px;
      }
    }
  }
`
