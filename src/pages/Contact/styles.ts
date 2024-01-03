import styled from 'styled-components'

export const Container = styled.section`
  .contact-with-us {
    display: flex;
    gap: 60px;
    padding: 5rem 0;

    .contact-form {
      h3 {
        font-size: 1.75rem;
        font-weight: ${props => props.theme['font-w-medium']};
        color: #000;
        margin-bottom: 10px;
      }

      p {
        font-size: 1rem;
        color: #777;
        line-height: 1.7;
        margin-bottom: 45px;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 40px;

        & > div {
          display: flex;
          gap: 20px;
        }
      }

      .contact-text-area {
        position: relative;

        label {
          display: block;
          position: absolute;
          top: -11px;
          left: 20px;
          padding: 0 0.625rem;

          font-size: 0.875rem;
          font-weight: ${props => props.theme['font-w-medium']};
          line-height: 1.3;
          color: ${props => props.theme['gray-500']};
          background: ${props => props.theme.white};
          z-index: 4;
        }


        #contact-message {
          width: 100%;
          height: auto;
          min-height: 160px;
          border-radius: 6px;
          padding: 1rem;
          resize: none;

          font-size: 0.875rem;
          font-weight: ${props => props.theme['font-w-egular']};
          line-height: 1.5;
          color: ${props => props.theme['gray-900']};
          background-color: ${props => props.theme.white};
          border: 1px solid #CBD3D9;
          outline: none;

          &:focus {
            border-color: ${props => props.theme['blue-400']}
          }
        }
      }
    }

    .contact-info {
      h3 {
        font-size: 1.5rem;
        font-weight: ${props => props.theme['font-w-medium']};
        line-height: 1.3;
        margin-bottom: 20px;
        color: #000;
      }

      .contact-info-first {
        margin-bottom: 40px;

        .adress {
          margin-bottom: 20px;
        }
      }

      .contact-info-second {
        margin-bottom: 40px;
      }

      span {
        display: block;
        font-size: 1rem;
        line-height: 1.7;

        color: #777;
      }
    }
  }

  .map {
    margin-bottom: 80px;

    iframe {
      border: none;
    }
  }
`
