import { styled } from 'styled-components'

export const Container = styled.footer`
  .services {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 1.25rem;
    border-bottom: 2px solid #F6F7FB;
  }

  .lists {
    padding: 3.15rem 0;
    border-bottom: 2px solid #F6F7FB;

    & > ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);

      & > li {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;

        h5 {
          font-weight: 600;
          font-size: 1.125rem;
          letter-spacing: -0.025em;
        }

        .peace {
          li {
            display: flex;
            align-items: center;
            gap: 0.25rem;
          }
        }

        ul {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          a {
            text-decoration: none;

            li {
              &::before {
              content: "";
              height: 2px;
              width: 0;
              background-color: #000;
              position: absolute;
              bottom: -2px;
              right: 0;
              opacity: 0;
              transition: .5s;
              }

              &:hover {
                color: #292930;
              }

              &:hover::before {
                width: 100%;
                opacity: 1;
                left: 0;
              }
            }
           }

          li {
            display: inline-block;

            position: relative;

            font-size: 1rem;
            font-weight: 500;
            line-height: 1.7;
            color: #777777;
          }
        }

        .content {
          p {
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.7;
            color: #777777;

            margin-bottom: 0.5rem;
          }

          .images {
            display: flex;
            align-items: center;
            gap: 1.25rem;

            .app-stores {
              display: flex;
              flex-direction: column;
              gap: 1rem;
            }
          }
        }
      }
    }
  }

  .container-copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;

    .redes {
      display: flex;
      gap: 1rem;

      svg {
        z-index: 1;
      }
    }

    .copyright {
      padding: 15px;
      color: #777777;
      font-weight: 500;
      font-size: 14px;
    }

    .carts {
      ul {
        display: flex;
        align-items: center;
        gap: 1.25rem;
      }

      color: #777777;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: -0.025em;
    }
  }
`
