import { styled } from 'styled-components'

export const Container = styled.section`
  main {
    .skeleton {
      opacity: .7;
      animation: skeleton-loading 1s linear infinite alternate;
    }

    .content {
      display: flex;
      gap: 2rem;
      /* padding: 5rem 0; */
      padding-top: 5rem;

      .right {


        width: 75%;
        /* height: 100vh; */

        .filter-results {
          display: flex;
          justify-content: end;
          align-items: center;
          margin-bottom: 1.5rem;

          span {
            font-size: 16px;
            color: #000;
            font-weight: 500;
            margin: 0 20px 0 10px;
          }

          select {
            color: #27272E;
            font-weight: 500;
            font-size: 1rem;
            border: 2px solid #CBD3D9;
            background: url('../../../../../public/assets/images/arrow-icon2.png') 85% center no-repeat rgba(0, 0, 0, 0);

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
        }

        .hidden {
          display: none;
        }

        .products {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: 2rem;

          .product-card hidden {
            visibility: hidden;
            margin-top: 2rem;
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

          .image-loading {
            height: 200px;
            border-radius: 6px;
            margin-bottom: 0.7rem;
          }

          .title-loading {
            width: 75%;
            height: 1rem;
            border-radius: 6px;
            margin-bottom: .5rem;
          }

          .price-loading {
            width: 30%;
            height: 1rem;
            border-radius: 6px;
            margin-bottom: 2rem;
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

  @keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 70%);
  }

  100% {
    background-color: hsl(200, 20%, 95%);
  }
}
`
