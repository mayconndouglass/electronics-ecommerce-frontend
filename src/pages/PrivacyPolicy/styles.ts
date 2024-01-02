import styled from 'styled-components'

export const Container = styled.section`
  main {
    & > div {
      padding: 5rem 0;

      .notice {
        p {
          display: inline-block;
          font-size: 1.375rem;
          font-weight: ${props => props.theme['font-w-medium']};
          color: #27272E;
          padding-bottom: 1.25rem;
          margin-bottom: 70px;

          position: relative;

          &:after {
            content: "";
            height: 3px;
            width: 100%;
            background-color: ${props => props.theme['blue-400']};
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
          }
        }
      }
    }
  }
`
