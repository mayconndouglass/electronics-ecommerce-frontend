import styled from 'styled-components'

export const Container = styled.section`
  .contact-with-us {
    display: flex;
    gap: 3rem;
    padding: 5rem 0;

    .contact-form {
      @media screen and (max-width: 500px) {
        h3 {
          font-size: 1.5rem !important;
        }

        p {
          line-height: 1.3 !important;
        }
      }

      h3 {
        font-size: 1.75rem;
        font-weight: ${props => props.theme['font-w-medium']};
        color: #000;
        margin-bottom: 0.625rem;
      }

      p {
        font-size: 1rem;
        color: #777;
        line-height: 1.7;
        margin-bottom: 2.8125rem;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 2.5rem;

        & > div {
          display: flex;
          gap: 1.25rem;

          @media screen and (max-width: 750px) {
            flex-direction: column;
          }
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
        margin-bottom: 1.25rem;
        color: #000;
      }

      .contact-info-first {
        margin-bottom: 2.5rem;

        .adress {
          margin-bottom: 1.25rem;
        }
      }

      .contact-info-second {
        margin-bottom: 2.5rem;
      }

      span {
        display: block;
        font-size: 1rem;
        line-height: 1.7;

        color: #777;
      }

      @media screen and (max-width: 1200px) {
        width: 40%;
      }
    }

    @media screen and (max-width: 990px) {
      flex-direction: column;
      .contact-info {
        width: 100%;
      }
    }
  }

  .map {
    height: 500px;
    margin-bottom: 5rem;

    iframe {
      border: none;
    }

    @media screen and (max-width: 990px) {
      height: 400px;
    }

    @media screen and (max-width: 750px) {
      height: 300px;
    }
  }
`
