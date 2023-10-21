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
    }

    .product-card {
      @media screen and (max-width: 1389px){
        .add-to-cart {
          & > div {
            a {
              line-height: 1;
              text-align: center;
            }
          }
        }
      }

      @media screen and (max-width: 1249px){
        .image-container {
          width: 250px;
          height: 250px;

          img {
            width: 150px;
            height: 150px;
          }
        }

        .add-to-cart {
          & > div {
            a {
              line-height: 1.7;
            }
          }
        }
      }

      @media screen and (max-width: 1033px){
        .add-to-cart {
          & > div {
            a {
              line-height: 1;
            }
          }
        }
      }

      @media screen and (max-width: 990px){
        display: flex;
        flex-direction: column;
        align-items: center;

        .add-to-cart {
          & > div {
            a {
              line-height: 1.7;
            }
          }
        }
      }

      @media screen and (max-width: 750px){
        .image-container {
          width: 200px;
          height: 200px;

          img {
            width: 125px;
            height: 125px;
          }
        }

        .add-to-cart {
          & > div {
            a {
              line-height: 1;
            }
          }
        }
      }

      @media screen and (max-width: 512px){
        padding-top: 5rem;

        .add-to-cart {
          & > div {
            a {
              line-height: 1.7;
            }
          }
        }
      }

      @media screen and (max-width: 300px){
        .add-to-cart {
          & > div {
            a {
              line-height: 1;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 512px){
    h2 {
      text-align: center;
    }
  }
`
