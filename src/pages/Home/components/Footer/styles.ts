import { styled } from 'styled-components'

export const Container = styled.footer`
  .services {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;

    padding-bottom: 1.25rem;
    border-bottom: 2px solid ${props => props.theme['slate-50']};
  }

  .lists {
    padding: 3.15rem 0;
    border-bottom: 2px solid ${props => props.theme['slate-50']};

    & > ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);

      & > li {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;

        h5 {
          font-weight: ${props => props.theme['font-w-semi-bold']};
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
              background-color: ${props => props.theme.black};
              position: absolute;
              bottom: -2px;
              right: 0;
              opacity: 0;
              transition: .5s;
              }

              &:hover {
                color: ${props => props.theme['gray-900']};
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
            font-weight: ${props => props.theme['font-w-medium']};
            line-height: 1.7;
            color: ${props => props.theme['gray-500']};
          }
        }

        .content {
          p {
            font-size: 1rem;
            font-weight: ${props => props.theme['font-w-medium']};
            line-height: 1.7;
            color: ${props => props.theme['gray-500']};

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

            @media screen and (max-width: 280px) {
              flex-direction: column;
            }
          }
        }
      }

      @media screen and (max-width: 990px) {
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 3rem;
      }

      @media screen and (max-width: 512px) {
        grid-template-columns: repeat(1, 1fr);
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
      padding: 1rem;
      color: ${props => props.theme['gray-500']};
      font-weight: ${props => props.theme['font-w-medium']};
      font-size: 0.875rem;
      text-align: center;
    }

    .carts {
      ul {
        display: flex;
        align-items: center;
        gap: 1.25rem;
      }

      color: ${props => props.theme['gray-500']};
      font-size: 0.875rem;
      font-weight: ${props => props.theme['font-w-medium']};
      letter-spacing: -0.025em;
    }

    @media screen and (max-width: 990px) {
      flex-direction: column;
      gap: 0.25rem;
    }
  }
`
