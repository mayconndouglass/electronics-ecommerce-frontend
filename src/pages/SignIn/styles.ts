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
      background-image: url('../assets/images/signin.jpg');
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
        width: 450px;

        h3 {
          margin-bottom: 1rem;
        }

        p {
          color: #999FAE;
          line-height: 1.65;
          font-size: 0.875rem;
          margin-bottom: 55px;
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
  }
`
