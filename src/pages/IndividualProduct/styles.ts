import { styled } from 'styled-components'

export const Container = styled.section`
  & > header {
    background-color: ${props => props.theme.white};
    padding-bottom: 0;

    .header-utils {
      background-color: ${props => props.theme['gray-900']};

      ul {
        li {
          a {
            color: #c2c2cc;
          }
        }
      }
    }

    .container-navigation {
      padding: 0;
    }
  }
`
