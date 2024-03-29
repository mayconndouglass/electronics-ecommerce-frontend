import { styled } from 'styled-components'

export const Container = styled.section`
  padding-top: 5rem;
  background-color: '#FEFEFE';

  & > div {
    padding-bottom: 3.125rem;
    border-bottom: 2px solid ${props => props.theme['slate-50']};
  }

  .products-container {
    & > div {
      margin: 0 -15px;

     span {
        @media screen and (max-width: 300px){
          text-align: center;
        }
      }
    }

    .product-card {
      .add-to-cart {
        & > div {
          button {
            line-height: 1.9;

            @media screen and (max-width: 1269px) {
              line-height: 1;
            }

            @media screen and (max-width: 1249px){
              line-height: 1.9;
            }

            @media screen and (max-width: 750px) {
              line-height: 1;
            }

            @media screen and (max-width: 512px) {
              line-height: 1.9;
            }

            @media screen and (max-width: 292px) {
              line-height: 1;
            }
          }
        }
      }

      @media screen and (max-width: 1249px) {
        .image-container {
          width: 250px;
          height: 250px;

          img {
            width: 150px;
            height: 150px;
          }
        }
      }

      @media screen and (max-width: 990px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      @media screen and (max-width: 750px) {
        .image-container {
          width: 200px;
          height: 200px;

          img {
            width: 125px;
            height: 125px;
          }
        }
      }

      @media screen and (max-width: 512px) {
        padding-top: 5rem;
      }
    }
  }

  @media screen and (max-width: 512px){
    h2 {
      text-align: center;
    }
  }
`
