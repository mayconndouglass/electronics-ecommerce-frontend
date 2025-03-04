import styled from 'styled-components'

export const Container = styled.section`
  height: 100vh;

  a {
    text-decoration: none;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    padding: 2.5rem 6.25rem;

    .logo {
      img {
        width: 80px;
      }
    }

    .sign-in {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    @media screen and (max-width: 750px) {
      flex-direction: column;
      padding: 2.5rem 0;

      .sign-in {
        flex-direction: column;
        gap: 1rem;

        button {
          padding: 0.5rem 2rem;
        }
      }
    }
  }

  section {
    display: flex;
    width: 100%;

    h3 {
      font-weight: ${props => props.theme['font-w-bold']};
      font-size: 1.75rem;
      line-height: 1.3;
      color: ${props => props.theme['gray-900']};
    }

    .banner {
      padding: 12.5rem 3rem;
      h3 {
        display: flex;
        justify-content: center;
        text-align: center;
      }

      width: 33.3%;
      height: 100vh;
      /* padding-top: 12.5rem; */
      background-image: url('../assets/images/signup.avif');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    .container-form-sign-up {
      display: flex;
      justify-content: center;
      width: 50%;
      padding-top: 12.5rem;

      & > div {
        width: 23.44vw; //450px;

        h3 {
          margin-bottom: 1rem;
        }

        p {
          color: #999FAE;
          line-height: 1.65;
          font-size: 0.875rem;
          margin-bottom: 3rem; //55px;
          font-weight: ${props => props.theme['font-w-egular']};
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 2rem;

          & > div:last-child {
            display: flex;
          }
        }
      }
    }

    @media screen and (max-width: 1200px) {
      .banner {
        width: 40%;
      }

      .container-form-sign-up {
        width: 50%;

        & > div {
          width: 30vw;
        }
      }
    }

    @media screen and (max-width: 990px) {
      .banner {
        display: none;
      }

      .container-form-sign-up {
        width: 100%;

        & > div {
          width: 45vw;
        }
      }
    }

    @media screen and (max-width: 750px) {
      .container-form-sign-up {
        padding-top: 16rem;
      }
    }

    @media screen and (max-width: 600px) {
      justify-content: center;

      .container-form-sign-up {
        width: 80%;

        & > div {
          width: 100%;
        }

        form {
          & > div:last-child {
            display: flex;
            justify-content: center;

            button {
              padding: 0.5rem 2rem;
            }
          }
        }

      }
    }
  }
`
