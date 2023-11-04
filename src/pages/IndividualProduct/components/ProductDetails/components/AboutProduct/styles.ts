import { styled, css } from 'styled-components'

export const Container = styled.section<{ active: boolean }>`
  background-color: ${props => props.theme['slate-50']};
  padding: 5rem 0 3.125rem;

  .title {
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;

    h2 {
      font-weight: ${props => props.theme['font-w-bold']};
      font-size: 2.25rem;
      color: ${props => props.theme['gray-900']};
      line-height: 1.3;
    }
  }

  .details-container {
    padding: 1.875rem;
    padding-bottom: 4rem;
    background-color: ${props => props.theme.white};

    .specifications-menu {
      display: flex;
      gap: 1rem;
      border-bottom: 2px solid #ebebeb;
      margin-bottom: 30px;

      li {
        font-size: 1.25rem;
        font-weight: ${props => props.theme['font-w-medium']};
        padding: 0.625rem 1rem;
        color: ${props => props.theme['gray-500']};
        position: relative;

        &:after {
          content: "";
          height: 2px;
          width: 0;
          background-color: ${props => props.theme['blue-400']};
          position: absolute;
          bottom: -2px;
          right: 0;
          opacity: 0;
          transition: .5s;
        }

        &:hover {
          color: ${props => props.theme['blue-400']};
          cursor: pointer;
        }

        &:hover::after {
          opacity: 1;
          width: 100%;
          left: 0;
        }
      }

      ${props => props.active ? css`
        & > li:first-child {
          color: ${props => props.theme['blue-400']};

          &::after {
            opacity: 1;
            width: 100%;
            left: 0;
          }
        }
      ` : css`
          & > li:last-child {
            color: ${props => props.theme['blue-400']};

            &::after {
              opacity: 1;
              width: 100%;
              left: 0;
           }
          }
      `}
    }

    .specifications {
      display: grid;
      grid-template-columns: repeat(2, auto);
      column-gap: 4rem;
      padding-left: 20px;

      li {
        list-style: disc;
        font-size: 1.125rem;
        line-height: 1.7;
        color: ${props => props.theme['gray-500']};
        margin: 0.5rem 0;
      }
    }
  }

  .reviews {
    display: flex;
    gap: 8.875rem;

    h5 {
      margin-bottom: 30px;
      font-weight: ${props => props.theme['font-w-bold']};
      font-size: 1.25rem;
      line-height: 1.3;
      color: ${props => props.theme['gray-900']};
    }

    .comments-container {
      width: 50%;

      .comments {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .coment {
        display: flex;
        gap: 20px;

        img {
          width: 60px;
          height: 60px;
          border-radius: 100%;
        }

        .container-name {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;

          & > span:first-child {
            color: ${props => props.theme['gray-900']};
            font-weight: ${props => props.theme['font-w-medium']};
            font-size: 1.125rem;
          }
        }

        .coment-text {
          font-size: 1rem;
          font-weight: ${props => props.theme['font-w-egular']};
          color: ${props => props.theme['gray-500']};
          line-height: 1.7;
        }
      }
    }

    .form-container {
      width: 50%;

      p {
        display: flex;
        font-size: 1rem;
        font-weight: ${props => props.theme['font-w-egular']};
        color: ${props => props.theme['gray-500']};
        margin-bottom: 30px;

        span {
          color: #E76458;
          margin-right: 1rem;
        }

        & > svg:first-child {
          background-color: red;
        }

        svg {
          font-size: 21px;
          color: ${props => props.theme['gray-500']};
          margin-right: 0.25rem;

          &:hover {
            color: ${props => props.theme['blue-400']};
            cursor: pointer;
          }
        }
      }

      .area {
        position: relative;
      }

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

      #message {
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

      .user-data {
        display: flex;
        justify-content: space-between;
        gap: 30px;
        margin-top: 30px;
      }

      .name, .email {
        width: 100%;
        position: relative;

        span {
          color: #E76458;
        }
      }

      #name, #email {
        width: 100%;
        height: 50px;
        border-radius: 6px;
        outline: none;
        padding: 0 1.25rem;

        font-size: 0.875rem;
        font-weight: ${props => props.theme['font-w-egular']};
        line-height: 1.3;
        color: ${props => props.theme['gray-900']};
        border: 1px solid #CBD3D9;
        background-color: ${props => props.theme.white};

        &:focus {
          border-color: ${props => props.theme['blue-400']}
        }
      }

      .submit-button {
        margin-top: 30px;

        span {
         display: inline-block;
        }
      }
    }
  }

  .services {
    margin-top: 30px;

    ul {
      display: flex;
      gap: 2rem;

      li {
        display: flex;
        align-items: center;
        background-color: ${props => props.theme.white};
        padding: 1.5rem 1.75rem;
        border-radius: 8px;
        margin-bottom: 30px;

        .img {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100px;/* 77px; */
          height: 77px;
          background-color: ${props => props.theme['slate-50']};
          border-radius: 100%;
          margin-right: 1rem;

          img {
            width: 50%;
          }
        }

        h6 {
          margin-bottom: 5px;
          font-size: 1.125rem;
          font-weight: ${props => props.theme['font-w-bold']};
          line-height: 1.3;
          color: ${props => props.theme['gray-900']};
        }

        p {
          font-size: 14px;
          line-height: 1.7;
          font-weight: ${props => props.theme['font-w-egular']};
          color: ${props => props.theme['gray-500']};
        }
      }
    }
  }
`
