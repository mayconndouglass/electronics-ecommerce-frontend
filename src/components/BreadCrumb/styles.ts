import styled from 'styled-components'

export const Container = styled.section`
  padding: 2.5rem 0 2.8125rem;
  background-color: #f8f8f8;

  & > div {
    a {
      text-decoration: none;
      color: #777;
    }

    .internal-container {
      display: flex;

      .bread-crumb {
        width: 50%;

        ul {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 15px;

          li {
            font-size: 1rem;
            font-weight: ${props => props.theme['font-w-medium']};
            line-height: 1.7;
            color: ${props => props.theme['gray-500']};

            &:last-child, &:first-child > a:hover, &:last-child:hover {
              color: ${props => props.theme['blue-400']};
              cursor: pointer;
            }
          }
        }
      }

      .image-area {
        display: flex;
        justify-content: space-between;
        position: relative;
        width: 50%;

        img {
          z-index: 2;
        }

        &::after {
          content: "";
          height: 110px;
          width: 110px;
          background-color: white;
          border-radius: 50%;
          position: absolute;
          top: -10px;
          right: 60px;
        }
      }
    }
  }
`
