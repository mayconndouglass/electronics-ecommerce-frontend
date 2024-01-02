import styled from 'styled-components'

export const Container = styled.section`
  div {
    width: 80%;
    margin-bottom: 2rem;

    h4 {
      margin-bottom: 20px;
      /*  */
      color: #27272E;
      font-weight: ${props => props.theme['font-w-medium']};
      font-size: 1.5rem;
      line-height: 1.3;
    }

    p {
      font-size: 1rem;
      font-weight: ${props => props.theme['font-w-egular']};
      line-height: 1.7;
      color: ${props => props.theme['gray-500']};
      margin: 0 0 30px;
    }

    span {
      color: ${props => props.theme['blue-400']};
      cursor: pointer;
    }

    ul {
      margin-bottom: 45px;
      padding-left: 20px;

      li {
        list-style: disc;
        margin-bottom: 12px;
        font-size: 1rem;
        color: ${props => props.theme['gray-500']};
        line-height: 1.7;

        &::marker {
          color: #CBD3D9;
        }
      }
    }
  }
`
