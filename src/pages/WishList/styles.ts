import styled from 'styled-components'

export const Container = styled.section`
  main {
    & > div {
      padding: 5rem 0;

      @media screen and (max-width: 550px) {
        padding: 2.5rem 0;
      }

      .header-container {
        display: flex;
        justify-content: space-between;

        margin-bottom: 1.25rem;

        h4 {
          font-size: 1.5rem;
          font-weight: ${props => props.theme['font-w-medium']};
          line-height: 1.3;
          color: ${props => props.theme['gray-900']};
        }
      }

      ul {
        & > div {
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 40%;
            margin: 0 auto;
          }
        }

      & > li:first-child {
        display: grid;
        grid-template-columns: repeat(6, 1fr);

        font-size: 1.25rem;
        font-weight: ${props => props.theme['font-w-medium']};
        color: ${props => props.theme['gray-900']};
        background-color: ${props => props.theme['slate-50']};
        padding: 1.125rem 0;

        & > span:first-child {
          margin-left: 4.5rem;
          grid-column: 1/4;
        }

        & > span:last-child {
          grid-column: 5/7;
        }
      }
    }
    }
  }
`
