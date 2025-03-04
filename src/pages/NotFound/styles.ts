import styled from 'styled-components'

export const Container = styled.section`
  main {
    & > div {
      display: flex;
      padding: 5rem 0;
      gap: 4rem;


      a {
        text-decoration: none;

        @media screen and (max-width: 990px) {
          & > div {
            button {
              padding: 0.8rem 1.5rem;
              line-height: 1.3;
            }
          }
        }

        @media screen and (max-width: 500px) {
          & > div {
            button {
              font-size: 12px;
            }
          }
        }
      }

      h2, p {
        margin-bottom: 2rem;
      }

      p {
        font-size: 1rem;
        font-weight: ${props => props.theme['font-w-egular']};
        line-height: 1.7;
        color: ${props => props.theme['gray-500']};
      }

      .not-found-info {
        padding: 3rem 0;
        width: 50%;
      }

      .not-found-image {
        padding: 3rem 0;
        width: 50%;
        background-image: url('../../../public/assets/images/404.avif');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }

      @media screen and (max-width: 750px) {
        flex-direction: column;
        gap: 0;
        padding: 2.5rem 0;

        .not-found-info, .not-found-image {
          width: 100%;
        }

        .not-found-image {
          height: 330px;
        }
      }

      @media screen and (max-width: 500px) {
        .not-found-image {
          height: 250px;
        }

        h2, p {
          margin-bottom: 1.5rem;
        }
      }
    }
  }

`
