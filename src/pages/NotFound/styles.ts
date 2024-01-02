import styled from 'styled-components'

export const Container = styled.section`
  main {
    & > div {
      display: flex;
      padding: 6.25rem 0;

      a {
        text-decoration: none;
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
        width: 40%;
      }

      .not-found-image {
        padding: 3rem 0;
        width: 60%;
        background-image: url('../../../public/assets/images/404.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }

`
